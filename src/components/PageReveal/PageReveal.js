import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './PageReveal.css'

const PageReveal = () => ({
  isVisible: true,
  isHomepage: false,

  get zIndex () {
    return gsap.getProperty(this.$el, 'z-index')
  },
  get showIntro () {
    return this.$store.app.showIntro
  },

  init () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // skip the whole thing
      return this.afterLeave()
    }

    this.isHomepage = document.querySelectorAll('[x-data^="Home"]').length > 0

    this.$nextTick(this.enter.bind(this))
  },
  beforeEnter () {
    window.scrollTo(0, 0)
    disableBodyScroll(this.$el)
  },
  enter () {
    if (!this.showIntro) {
      return this.afterEnter()
    }

    this.beforeEnter()

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'css.ease',
      },
      onComplete: this.afterEnter.bind(this)
    })
    Array.from(this.$el.querySelectorAll('[x-ref="frame"]'), (frame, i) => {
      if (i) {
        tl.fromTo(frame, { opacity: 0 }, { opacity: 1 }, '>-0.15')
      }
      tl.to(frame, { opacity: 0 }, i ? '>1.333' : 1.6)
    })

    let homepageTL = null
    if (this.isHomepage && (homepageTL = this.enterToHomepage())) {
      tl.add(homepageTL, '>-0.15')
    }
  },
  enterToHomepage () {
    // specific enter animation for homepage
    if (!(this.showIntro && this.isHomepage)) {
      return
    }

    const bannerNews = document.querySelector(':not(.AppMenu__BannerNews) > [x-data^="BannerNews"]')
    if (!bannerNews) {
      return
    }

    const { top, height } = bannerNews.getBoundingClientRect()

    const tl = gsap.timeline()
    tl
      .set(bannerNews.children, {
        position: 'fixed',
        zIndex: this.zIndex + 1,
        top,
        left: 0,
        height,
        width: '100%',
        pointerEvents: 'none',
        y: window.innerHeight / 2 - height / 2 - top,
      })
      .from(bannerNews.children, {
        autoAlpha: 0,
        duration: 1.16,
        ease: 'css.ease'
      })

    return tl
  },
  afterEnter () {
    this.leave()
  },
  leave () {
    const tl = gsap.timeline({
      onComplete: this.afterLeave.bind(this)
    })

    let homepageTL = null
    if (this.isHomepage && (homepageTL = this.leaveToHomepage())) {
      tl.add(homepageTL)
    } else {
      tl.add(this.leaveToDefault())
    }

    if (this.showIntro) {
      // fade in header
      const appHeader = document.querySelector('[x-data^="AppHeader"]')
      if (appHeader) {
        tl.from(appHeader, {
          opacity: 0,
          duration: 0.5,
          ease: 'css.ease',
          clearProps: 'all'
        }, '>-0.42')
      }
    }

    tl.add(() => {
      this.$store.app.setReady()
    }, '>-0.2')
  },
  leaveToDefault () {
    const tl = gsap.timeline({
      defaults: {
        yPercent: 100,
        force3D: true,
        ease: '0.68,0.01,0.25,1'
      }
    })
    tl
      .to(this.$refs.bgBlack, {
        duration: 0.6
      }, 0)
      .to(this.$refs.bgPrimary, {
        duration: 0.5
      }, 0.25)

    return tl
  },
  leaveToHomepage () {
    // specific leave animation for homepage after intro
    if (!(this.showIntro && this.isHomepage)) {
      return
    }

    const bannerNews = document.querySelector(':not(.AppMenu__BannerNews) > [x-data^="BannerNews"]')
    if (!bannerNews) {
      return
    }

    const { y, height } = bannerNews.getBoundingClientRect()

    const tl = gsap.timeline({
      defaults: {
        force3D: true,
        duration: 1,
        ease: '0.68,0.01,0.25,1',
      }
    })
    tl
      .set(this.$refs.bgPrimary, { opacity: 0 })
      .to(bannerNews.children, { y: 0 }, 0)
      .to(this.$refs.bgBlack, { y, height }, 0)
      .set(bannerNews.children, { clearProps: 'all' })
      .set(this.$refs.bgBlack, { opacity: 0 })

    return tl
  },
  afterLeave () {
    this.isVisible = false
    enableBodyScroll(this.$el)

    this.$store.app.setReady()
  }
})

Alpine.data('PageReveal', PageReveal)
