import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './AppMenu.css'

const AppMenu = () => ({
  // data
  isOpened: false,
  restoreBackgroundState: () => {},
  $listeners: {
    '@breakpoint:change.window': 'setup'
  },
  // computed
  get isOpen () {
    return this.$store.menu.isOpen
  },
  get isSearchOpen () {
    return this.$store.search.isOpen
  },
  get zIndex () {
    return gsap.getProperty(this.$parent.querySelector('[x-ref="navbar"]'), 'z-index')
  },
  // mounted
  init () {
    this.$watch('isOpen', isOpen => isOpen ? this.enter() : this.leave())

    this.staggerItems = [
      this.$el.querySelectorAll('[x-ref="navItem"]'),
      this.$el.querySelector('[x-ref="cta"]'),
    ]

    this.setup()
  },
  setup () {
    if (this.$isMobile) {
      gsap.set(this.$refs.curtain, { yPercent: -100 })
      gsap.set(this.staggerItems, { autoAlpha: 0, y: -8 })
      gsap.set(this.$refs.banner, { autoAlpha: 0 })
    } else {
      gsap.set(this.$refs.curtain, { clearProps: 'transform' })
      gsap.set(this.staggerItems, { clearProps: 'opacity,visibility,transform' })
      gsap.set(this.$refs.banner, { clearProps: 'opacity,visibility' })
      gsap.set('.AppBackground', { clearProps: 'zIndex' })
      this.afterLeave()
    }
  },
  // methods
  open () {
    this.$store.menu.open()
  },
  close () {
    this.$store.menu.close()
  },
  beforeEnter () {
    // fake reverse scroll to display global header instead of page navbar
    this.$store.scroll.setDirection(-1)

    // play AppBackground before being revealed
    // save current state first
    const appBackgroundVisibility = this.$store.app.isBackgroundVisible
    this.$store.app.setBackgroundVisibility(true)
    this.restoreBackgroundState = () => this.$store.app.setBackgroundVisibility(appBackgroundVisibility)
  },
  enter () {
    this.beforeEnter()

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'quart.inOut'
      },
      onComplete: this.afterEnter.bind(this),
    })

    tl
      .to(this.$refs.curtain, {
        yPercent: 0,
        duration: 0.5,
        ease: 'cubic.in'
      })
      .addLabel('reveal')
      .set('.AppBackground', { zIndex: this.zIndex - 1 })
      .set(this.$refs.banner, { autoAlpha: 1 })
      .to(this.$refs.curtain, {
        yPercent: 100,
        duration: 0.5,
        ease: 'cubic.out'
      })
      .to(this.staggerItems, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.06,
        clearProps: 'all'
      }, 'reveal')

    return tl
  },
  afterEnter () {
    this.$refs.inner && disableBodyScroll(this.$refs.inner)
    this.isOpened = true
  },
  leave () {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'quart.inOut'
      },
      onComplete: this.afterLeave.bind(this)
    })
    tl
      .to(this.$refs.curtain, {
        yPercent: 0,
        duration: 0.4,
        ease: 'cubic.in'
      })
      .addLabel('hide')
      .set('.AppBackground', { clearProps: 'zIndex' })
      .set(this.$refs.banner, { autoAlpha: 0 })
      .to(this.$refs.curtain, {
        yPercent: -100,
        duration: 0.3,
        ease: 'cubic.out'
      })
      .to(this.staggerItems, {
        autoAlpha: 0,
        y: -8,
      }, 0)

    return tl
  },
  afterLeave () {
    this.$refs.inner && enableBodyScroll(this.$refs.inner)
    this.isOpened = false
    this.restoreBackgroundState()
  }
})

Alpine.data('AppMenu', AppMenu)
