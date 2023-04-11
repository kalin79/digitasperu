import Alpine from 'alpinejs'
import { gsap, ScrollTrigger } from 'gsap'
import { wrap, range } from '@/utilities/array.utils'
import './ShuffleGallery.css'

// @TODO
// [] pause autoplay when outside viewport

const ShuffleGallery = (settings = {}) => ({
  // props
  images: [],
  itemsToShow: 5,
  autoplay: 5, // in seconds, 0 to disable

  // data
  index: 0,
  currentBatch: [],
  nextBatch: [],
  isAnimating: false,
  tickTimeout: null,

  // computed
  get currentImages () {
    return [ ...this.nextBatch, ...this.currentBatch ]
  },

  ...settings,

  init () {
    this.$watch('index', this.setBatches.bind(this))

    // disable autoplay on mobile
    // this.autoplay = !this.$isTouch && this.autoplay

    // add an id to each image and do a first shuffle
    this.images = gsap.utils.shuffle(this.images.map((image, i) => (image.id = i, image)))
    this.setBatches()

    this.autoplay &&
    this.$nextTick(() => {
      ScrollTrigger.create({
        trigger: this.$refs.items,
        onToggle: ({ isActive }) => isActive ? this.tick() : this.clearTick()
      })
    })
  },

  // methods
  setBatches () {
    this.currentBatch = this.nextBatch.length ? this.nextBatch : wrap(this.images, this.index, this.itemsToShow)
    this.nextBatch = gsap.utils.shuffle(wrap(this.images, this.index + this.itemsToShow, this.itemsToShow))
  },
  next () {
    if (this.isAnimating) {
      return
    }

    this.onBeforeChange()

    const stagger = 0.05
    const tl = gsap.timeline({
      defaults: {
        duration: 0.45,
        ease: 'cubic.inOut',
      },
      onComplete: this.onAfterChange.bind(this)
    })

    const items = gsap.utils.toArray('[x-ref="item"]', this.$refs.items)
    const randomIndexes = gsap.utils.shuffle(range(0, this.itemsToShow - 1))
    randomIndexes.forEach((index, i) => {
      const currentItems = [items[index], items[index + this.itemsToShow]]
      currentItems.forEach((item, j) => {
        const isCurrent = !!j
        tl
          .fromTo(item, {
            yPercent: isCurrent ? 0 : -100,
          }, {
            yPercent: isCurrent ? 100 : 0,
          }, i * stagger)
          .fromTo(item.querySelector('[x-ref="image"]'), {
            yPercent: isCurrent ? 0 : 100,
            scale: isCurrent ? 1 : 1.1,
            transformOrigin: isCurrent ? 'top' : 'bottom'
          }, {
            yPercent: isCurrent ? -100 : 0,
            scale: isCurrent ? 1.1 : 1
          }, i * stagger)
      })
    })

    tl.to(this.$store.cursor, {
      progress: 2,
      duration: tl.duration()
    }, 0)
  },
  onBeforeChange () {
    this.isAnimating = true
    this.pause()
  },
  onAfterChange () {
    this.isAnimating = false
    this.index += this.itemsToShow
    this.restart()
  },
  pause() {
    this.clearTick()
  },
  restart() {
    this.tick()
  },
  clearTick() {
    gsap.killTweensOf(this.$store.cursor)
  },
  tick() {
    if (!this.autoplay) {
      return
    }

    this.clearTick()
    gsap.fromTo(this.$store.cursor, {
      progress: 0
    }, {
      progress: 1,
      duration: this.autoplay,
      ease: 'none',
      onComplete: this.next.bind(this)
    })
  },
})

Alpine.data('ShuffleGallery', ShuffleGallery)
