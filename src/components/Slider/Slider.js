import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import Impetus from 'impetus'
import './Slider.css'

const Slider = (settings = {}) => ({
  // props
  multiplier: 1,
  friction: 0.92,
  edgeResistance: 0.5,
  snapWithKeyboard: true, // snap on closest slide when using keyboard

  ...settings,

  // data
  x: 0,
  xMin: 0,
  xMax: 0,
  rowsDelta: [],
  slidesOffset: [],
  hasMoved: false,
  $listeners: {
    '@resize.window.debounce': 'onResize',
    '@mousedown.prevent': 'onDown',
    '@touchstart': 'onDown',
    '@mousemove': 'onMove',
    '@touchmove': 'onMove',
    '@mouseup': 'onUp',
    '@touchend': 'onUp',
    '@touchcancel': 'onUp',
    '@keydown.arrow-left': 'previous',
    '@keydown.arrow-right': 'next',
  },

  get progress () {
    return this.x / this.xMin
  },
  get isEnabled () {
    return this.xMin < this.xMax
  },

  init () {
    this.moveTrack = gsap.quickSetter(this.$refs.track, 'x', 'px')
    this.moveRows = []

    this.$watch('x', this.translate.bind(this))
    this.$watch('multiplier', (multiplier) => {
      this.impetus && this.impetus.setMultiplier(multiplier)
    })

    this.$nextTick(() => {
      this.impetus = new Impetus({
        source: this.$el,
        boundX: [this.xMin, this.xMax],
        boundY: [0, 0],
        multiplier: this.multiplier,
        friction: this.friction,
        update: this.setX.bind(this)
      })

      this.computeBounds()

      // in-view animation
      const inViewTL = gsap.timeline({
        defaults: {
          ease: 'quart.out'
        },
        scrollTrigger: {
          trigger: this.$el,
          start: () => this.$isDesktop ? 'top+=64 bottom' : 'top bottom',
          once: true,
        }
      })
      const rows = this.$el.querySelectorAll('.Slider__Slides')
      const slides = this.$el.querySelectorAll('.Slider__Slide')
      const stagger = {
        each: 0.03,
        from: 'start',
        grid: 'auto'
      }
      inViewTL
        .from(slides, {
          xPercent: 100,
          duration: 1.45,
          stagger
        }, 0.03)
        .from(slides, {
          opacity: 0,
          duration: 0.7,
          ease: 'linear',
          stagger
        }, 0.1)
        .from(rows, {
          x: 400,
          duration: 1.45,
          stagger: 0.26
        }, 0)
    })
  },
  onResize () {
    this.computeBounds()
  },
  onDown () {
    this.hasMoved = false
    this.pointerActive = true
  },
  onMove () {
    this.pointerActive && (this.hasMoved = true)
  },
  onUp () {
    this.hasMoved = false
    this.pointerActive = false
  },
  previous () {
    let x = 0
    if (this.snapWithKeyboard) {
      x = gsap.utils.snap(this.slidesOffset, Math.abs(this.x))
      if (x >= Math.round(Math.abs(this.x))) {
        const currentIndex = this.slidesOffset.findIndex(offset => offset === x)
        x = this.slidesOffset[Math.max(0, currentIndex - 1)]
      }
      x *= -1
    } else {
      const trackBBox = this.$refs.track.getBoundingClientRect()
      x = this.x + (trackBBox.width - 40)
    }

    this.slideTo(Math.min(this.xMax, x))
  },
  next () {
    let x = 0
    if (this.snapWithKeyboard) {
      x = gsap.utils.snap(this.slidesOffset, Math.abs(this.x))
      if (x <= Math.round(Math.abs(this.x))) {
        const currentIndex = this.slidesOffset.findIndex(offset => offset === x)
        x = this.slidesOffset[Math.min(this.slidesOffset.length - 1, currentIndex + 1)]
      }
      x *= -1
    } else {
      const trackBBox = this.$refs.track.getBoundingClientRect()
      x = this.x - (trackBBox.width - 40)
    }

    this.slideTo(Math.max(this.xMin, x))
  },
  computeBounds () {
    // compute total width
    const trackBBox = this.$refs.track.getBoundingClientRect()
    const rowsOffsetLeft = []
    const rowsOffsetRight = []
    this.slidesOffset = []

    Array.from(this.$refs.track.querySelectorAll('.Slider__Slides'), (row, i) => {
      Array.from(row.querySelectorAll('.Slider__Slide'), (slide, j) => {
        const { left, right } = slide.getBoundingClientRect()
        if (!j) {
          rowsOffsetLeft[i] = left - trackBBox.left
        }
        rowsOffsetRight[i] = Math.max(rowsOffsetRight[i] || 0, right)
        this.slidesOffset.push(Math.round(left - trackBBox.left))
      })

      this.moveRows[i] = gsap.quickSetter(row, 'x', 'px')
    })

    const minOffsetRight = Math.min(...rowsOffsetRight)
    // const maxOffsetRight = Math.max(...rowsOffsetRight)

    this.xMin = (trackBBox.right - minOffsetRight)
    this.xMax = 0

    // compute delta for each row comparing bounds of min row and current row
    // + add left offset of current row
    let multiplier = 1
    rowsOffsetRight.forEach((offsetRight, i) => {
      this.rowsDelta[i] = (trackBBox.right - offsetRight) - this.xMin - rowsOffsetLeft[i]
      multiplier = Math.max(multiplier, Math.abs(offsetRight / minOffsetRight))
    })

    this.multiplier = multiplier

    this.xMin = Math.min(this.xMax, this.xMin)

    if (this.impetus) {
      // update impetus's bounds
      this.impetus.setBoundX([this.xMin, this.xMax])
      // disable if no need for swipe
      this.impetus[this.isEnabled ? 'resume' : 'pause']()
    }
  },
  setX (x) {
    // apply resistance to out of bounds values
    const edgeTolerance = 1 - this.edgeResistance

    this.x = Math.round((x > this.xMax ? this.xMax + (x - this.xMax) * edgeTolerance : (x < this.xMin) ? this.xMin + (x - this.xMin) * edgeTolerance : x) * 100) / 100
  },
  translate (x) {
    this.moveTrack(x)

    this.moveRows.forEach((moveRow, i) => {
      moveRow(this.rowsDelta[i] * this.progress)
    })
  },
  slideTo (x, duration = 0.8) {
    gsap.killTweensOf(this, 'x')
    gsap.to(this, {
      x,
      duration,
      ease: 'cubic.out',
      onUpdate: () => {
        this.impetus && this.impetus.setValues(this.x, null)
      }
    })
  }
})

Alpine.data('Slider', Slider)
// window.Slider = Slider
