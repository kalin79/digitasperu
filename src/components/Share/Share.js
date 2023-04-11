import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import copyToClipboard from '@/utilities/copy-to-clipboard'
import './Share.css'

const SHARERS = {
  facebook: 'https://www.facebook.com/share.php?u=%URL%',
  twitter: 'https://twitter.com/intent/tweet?url=%URL%&text=%TEXT%',
  linkedin: 'https://www.linkedin.com/cws/share?url=%URL%',
  link: '',
}

const Share = (settings = {}) => ({
  // props
  shareUrl: '',
  shareText: '',
  copyConfirmationMsg: '',
  // data
  sharers: null,
  isOpen: false,
  isOpened: false,
  isLinkCopied: false,

  get shareUrlFinal () {
    return this.shareUrl || window.location.href
  },

  ...settings,

  init () {
    this.$watch('isOpen', isOpen => isOpen ? this.enter() : this.leave())
    this.$watch('$store.scroll.progress', () => this.close())

    this.sharers = {
      ...SHARERS,
      link: this.copyToClipboard.bind(this),
    }

    this.staggerItems = this.$isDesktop
      ? this.$refs.list.children
      : [
        this.$refs.title,
        this.$refs.list
      ]

    gsap.set(this.$refs.container, {
      y: this.$isDesktop ? 8 : '100%',
      autoAlpha: this.$isDesktop ? 0 : 1,
    })
    gsap.set(this.staggerItems, {
      autoAlpha: 0,
      y: this.$isDesktop ? 0 : 8,
    })
    gsap.set(this.$refs.close, { autoAlpha: 0, scale: 0 })
    gsap.set(this.$refs.backdrop, { autoAlpha: 0 })
  },

  open () {
    this.isOpen = true
  },
  close () {
    this.isOpen = false
  },
  toggle () {
    if (this.isOpen) {
      return this.close()
    }

    return this.open()
  },
  share (sharer) {
    if (!this.sharers.hasOwnProperty(sharer)) {
      return
    }

    const action = this.sharers[sharer]
    if (typeof action === 'function') {
      action()
    } else if (action) {
      const url = action.replace('%URL%', this.shareUrlFinal).replace('%TEXT%', encodeURI(this.shareText))
      if (this.$isDesktop) {
        const width = 650
        const height = 350
        const top = window.screen.height / 2 - height / 2
        const left = window.screen.width / 2 - width / 2
        window.open(url, 'sharer', `top=${top},left=${left},toolbar=0,status=0,width=${width},height=${height}`)
      } else {
        window.open(url, '_blank')
      }

      this.close()
    }
  },
  copyToClipboard () {
    copyToClipboard(this.shareUrlFinal)

    this.isLinkCopied = true
    setTimeout(() => {
      this.isLinkCopied = false
      this.close()
    }, 2000)
  },
  beforeEnter () {
    this.$dispatch('share:open')
  },
  enter () {
    this.beforeEnter()

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: this.$isDesktop ? 'css.ease' : 'quart.inOut'
      },
      onComplete: this.afterEnter.bind(this)
    })
    tl
      .to(this.$refs.container, {
        y: 0,
        autoAlpha: 1,
        duration: this.$isDesktop ? 0.3 : 0.5,
      }, 0)
      .to(this.staggerItems, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.06,
        clearProps: 'all'
      }, this.$isDesktop ? 0 : '>-0.08')
      .to(this.$refs.close, {
        autoAlpha: 1,
        scale: 1,
        ease: 'css.ease'
      }, '<0.18')
      .to(this.$refs.backdrop, {
        autoAlpha: 1,
        ease: 'linear'
      }, 0)

    return tl
  },
  afterEnter () {
    this.isOpened = true
    this.$dispatch('share:opened')
  },
  beforeLeave () {
    this.$dispatch('share:close')
  },
  leave () {
    this.beforeLeave()

    const tl = gsap.timeline({
      defaults: {
        ease: 'quart.inOut',
        duration: 0.3
      },
      onComplete: this.afterLeave.bind(this)
    })
    tl
      .to(this.$refs.close, {
        autoAlpha: 0,
        scale: 0,
        ease: 'css.ease'
      }, 0)
      .to(this.staggerItems, {
        autoAlpha: 0,
        y: this.$isDesktop ? 0 : 8,
        clearProps: 'transform'
      }, 0)
      .to(this.$refs.container, {
        y: this.$isDesktop ? 8 : '100%',
        autoAlpha: this.$isDesktop ? 0 : 1,
        duration: this.$isDesktop ? 0.3 : 0.5,
        ease: this.$isDesktop ? 'css.ease' : 'quart.inOut'
      }, this.$isDesktop ? 0 : 0.2)
      .to(this.$refs.backdrop, {
        autoAlpha: 0,
        ease: 'linear'
      }, '>-0.3')

    return tl
  },
  afterLeave () {
    this.isOpened = false
    this.$dispatch('share:closed')
  }
})

Alpine.data('Share', Share)
