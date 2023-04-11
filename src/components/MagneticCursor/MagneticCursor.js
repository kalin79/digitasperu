import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import lerp from '@/utilities/lerp'
import './MagneticCursor.css'

const MagneticCursor = (settings = {}) => ({
  // props
  icon: '',
  label: '',
  backgroundColor: '',
  iconColor: '',
  withProgress: false,
  resetOnLeave: true,
  // data
  isMagnetic: false,
  isVisible: true,
  position: { x: 0, y: 0 },
  $target: null,
  $props: {
    '@magnetic-cursor:enter.window': 'onEnter',
    '@magnetic-cursor:leave.window': 'onLeave',
  },
  // computed
  get hasLabel () {
    return this.icon === 'label' && this.label
  },
  get progress () {
    return this.$store.cursor.progress
  },
  set progress (progress) {
    this.$store.cursor.setProgress(progress)
  },
  get styles () {
    return {
      backgroundColor: this.backgroundColor,
      color: this.iconColor,
    }
  },
  // mounted
  init () {
    for (const [key, value] of Object.entries(settings)) {
      this[key] = value
    }

    if (!this.$isTouch) {
      const setPosition = gsap.quickSetter(this.$el, 'css')
      const getProperty = gsap.getProperty(this.$el)

      const update = () => {
        let x = 0
        let y = 0

        if (this.$target) {
          ({ x, y } = this.$target.getBoundingClientRect())
        }

        this.position.x = lerp(this.position.x, this.$store.mouse.x - x, this.$store.mouse.inertia)
        this.position.y = lerp(this.position.y, this.$store.mouse.y - y, this.$store.mouse.inertia)

        setPosition(this.position)
      }

      const resetPosition = (position) => {
        gsap.set(this.$el, { clearProps: 'x,y' })

        gsap.from(this.$el, {
          ...position,
          duration: 0.3,
          ease: 'quad.out',
          onStart: () => {
            this.position.x = getProperty('x')
            this.position.y = getProperty('y')
          }
        })
      }

      this.$watch('isMagnetic', (isMagnetic) => {
        if (isMagnetic) {
          gsap.ticker.add(update)
        } else {
          gsap.ticker.remove(update)
          this.resetOnLeave && resetPosition(this.position)
        }
      })

      this.$nextTick(() => {
        this.position.x = getProperty('x')
        this.position.y = getProperty('y')
      })
    }
  },
  onEnter ({ target }) {
    this.$target = target
    this.isMagnetic = true
  },
  onLeave () {
    this.isMagnetic = false
  }
})

Alpine.data('MagneticCursor', MagneticCursor)
