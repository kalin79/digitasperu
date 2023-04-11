import Alpine from 'alpinejs'
import { gsap, SplitText, ScrollTrigger } from 'gsap'
import './BannerNews.css'

const BannerNews = (settings = {}) => ({
  // props
  speed: 100, // in pixels per seconds
  roll: true,
  // data
  $listeners: {
    '@mouseenter': 'pause',
    '@mouseleave': 'play',
    '@focusin': 'pause',
    '@focusout': 'play',
  },
  ticker: null,
  rollTweens: [],
  isPaused: false,

  ...settings,

  // mounted
  init () {
    // this.speed = 0
    if (this.speed > 0) {
      // clone items
      const clonedItems = this.$refs.items.cloneNode(true)
      Array.from(clonedItems.querySelectorAll('a'), link => link.setAttribute('tabindex', -1))
      this.$refs.track.appendChild(clonedItems)
    }

    if (this.roll) {
      Array.from(this.$el.querySelectorAll('[x-ref="title"]'), (title, i) => {
        const { chars } = new SplitText(title, {
          type: 'chars',
          charsClass: 'char'
        })

        gsap.set(chars, { transformOrigin: 'center center -20px' })

        const roll = gsap.to(chars, {
          yPercent: -200,
          rotationX: 90,
          opacity: -1,
          modifiers: {
            yPercent: v => v <= -100 ? 200 + v : v,
            rotationX: v => {
              const _v = parseFloat(v)
              return _v >= 45 ? `${(-90 + _v)}deg` : v
            },
            opacity: v => v <= 0 ? Math.abs(v) : v,
          },
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.015,
          paused: true,
        })

        const duration = 3

        this.rollTweens.push(
          gsap.to(roll, {
            progress: 1,
            duration,
            ease: 'power1.inOut',
            delay: i * duration,
            paused: true,
            onStart: function (instance) {
              instance.isPaused && this.pause()
            },
            onStartParams: [this],
            onComplete: function (instance) {
              !instance.isPaused && gsap.delayedCall(1, () => this.restart())
            },
            onCompleteParams: [this]
          })
        )
      })
    }

    this.$nextTick(() => {
      if (this.speed > 0) {
        const duration = this.$refs.items.clientWidth / this.speed

        this.ticker = gsap.to(this.$el.querySelectorAll('[x-ref="items"]'), {
          xPercent: -100,
          duration,
          ease: 'none',
          repeat: -1,
          force3D: false,
          paused: true
        })

        // when wrapped into AppMenu component
        if (this.$parent && this.$parent.getAttribute('x-data').startsWith('AppMenu')) {
          this.$watch('isOpen', isOpen => isOpen ? this.play() : this.stop())
        } else {
          ScrollTrigger.create({
            trigger: this.$el,
            onToggle: ({ isActive }) => isActive ? this.play() : this.stop()
          })
        }
      }
    })
  },
  pause () {
    this.isPaused = true

    this.ticker && gsap
      .killTweensOf(this.ticker, 'timeScale')
      .to(this.ticker, {
        timeScale: 0.2,
        duration: 0.45,
        ease: 'power1.out'
      })
      .play()

    this.rollTweens.length && this.rollTweens.map((tween) => {
      tween.timeScale(2)
    })
  },
  play () {
    this.isPaused = false

    if (this.ticker) {
      gsap.killTweensOf(this.ticker, 'timeScale')
      gsap.to(this.ticker, {
        timeScale: 1,
        duration: 0.1,
        ease: 'power2.in'
      })
      this.ticker.play()
    }

    this.rollTweens.length && this.rollTweens.map((tween) => {
      tween.timeScale(1)
      !tween.isActive() && tween.restart(true, false)
    })
  },
  stop () {
    this.isPaused = true

    if (this.ticker) {
      gsap.killTweensOf(this.ticker, 'timeScale')
      this.ticker.pause()
    }

    this.rollTweens.length && this.rollTweens.map(tween => tween.pause())
  }
})

Alpine.data('BannerNews', BannerNews)
