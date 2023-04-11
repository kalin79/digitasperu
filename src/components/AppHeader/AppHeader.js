import Alpine from 'alpinejs'
import { gsap, ScrollTrigger } from 'gsap'
import './AppHeader.css'

const AppHeader = (settings = {}) => ({
  // props
  dark: '',
  withProgress: false,
  // data
  isSticky: false,
  isVisible: false,
  isAlwaysVisible: false,

  ...settings,

  // computed
  get isDark () {
    return this.dark === ''
      ? this.isPrimaryColorDark
      : this.dark === 'true'
  },
  get isPrimaryColorDark () {
    return ['white', '#ffffff', '#fff'].includes(gsap.getProperty(this.$el, '--primary-contrast-color'))
  },
  get isMenuDark () {
    if (this.$isDesktop) {
      return this.isSearchOpen || this.isDark
    }

    return this.isPrimaryColorDark
  },
  get isNavbarDark () {
    if (this.isMenuOpen) {
      return this.isMenuDark
    }
    if (this.isSearchOpen) {
      return true
    }

    return this.isDark
  },
  get isSearchOpen () {
    return this.$store.search.isOpen
  },
  get isMenuOpen () {
    return this.$store.menu.isOpen
  },
  get shouldTrap () {
    return this.$isDesktop && this.isSearchOpen
  },
  // mounted
  init () {
    this.isAlwaysVisible = !!document.querySelector('[x-data^="PageNavbar"]')

    // duplicate navbar
    this.cloneNavbar()

    this.$watch('isMenuOpen', (isOpen) => {
      if (isOpen) {
        this.$store.search.close()
        this.onDrawerOpen()
      }
    })
    this.$watch('isSearchOpen', (isOpen) => {
      if (isOpen) {
        this.$store.menu.close()
        this.onDrawerOpen()
      }
    })

    this.$watch('isSticky', (isSticky) => {
      !isSticky && (this.isVisible = false)
      this.$dispatch('app-header:change', { isSticky })
    })

    if (this.withProgress) {
      const setProgressBar = gsap.quickSetter(this.$refs.progress, 'xPercent')

      this.$watch('$store.scroll.progress', progress => setProgressBar(100 * progress - 100))
    }

    this.$nextTick(() => {
      this.scrollTrigger = ScrollTrigger.create({
        start: 'top -50%',
        onEnter: () => {
          this.isSticky = true
        },
        onLeaveBack: () => {
          this.isSticky = false
        },
        onUpdate: ({ direction, isActive }) => {
          this.isVisible = this.isAlwaysVisible || (isActive && direction < 0)
        },
      })
    })
  },
  // methods
  cloneNavbar () {
    const cloneClass = 'AppHeader__Navbar--fixed'
    if (this.$el.querySelector(`.${cloneClass}`)) {
      return
    }

    const clonedNavbar = this.$refs.navbar.cloneNode(true)
    clonedNavbar.removeAttribute('x-ref')
    clonedNavbar.classList.add(cloneClass)
    clonedNavbar.setAttribute('x-bind:class', `{
      'is-dark': isSearchOpen || isMenuOpen ? isMenuDark : false
    }`)
    clonedNavbar.removeAttribute('aria-label')
    if (this.$isDesktop) {
      const AppMenu = clonedNavbar.querySelector('[x-data^="AppMenu"]')
      AppMenu.setAttribute('x-ignore', '')
      if (AppMenu.hasAttributes()) {
        for (let i = AppMenu.attributes.length - 1, attr = ''; i >= 0; i--) {
          attr = AppMenu.attributes[i].name
          if (attr.indexOf('x-') === 0) {
            AppMenu.removeAttribute(attr)
          }
        }
      }

      clonedNavbar.querySelector('[x-ref="menuWrapper"]').setAttribute('x-bind:class', `{
        'is-dark': isSearchOpen
      }`)
    } else {
      clonedNavbar.querySelector('[x-ref="menuWrapper"]').remove()
    }
    Array.from(clonedNavbar.querySelectorAll('a, button'), el => el.setAttribute('tabindex', -1))

    this.$el.appendChild(clonedNavbar)

    const $ = gsap.utils.selector(clonedNavbar)
    this.$watch('$store.scroll.direction', (direction) => {
      const vars = {
        duration: 0.15,
        ease: 'css.inOut'
      }

      gsap.to($('[x-ref="menuInner"]'), {
        ...vars,
        yPercent: direction > 0 ? 100 : 0
      })

      const pageTitle = $('[x-ref="pageTitle"]')
      pageTitle && pageTitle.length && gsap.to(pageTitle, {
        ...vars,
        yPercent: direction < 0 ? -100 : 0,
      })
    })
  },
  toggleSearch () {
    this.$store.search.toggle()
    // iOS allow focus on input only with user interaction
    this.isSearchOpen && this.$root.querySelector('[x-ref="input"]').focus()
  },
  toggleMenu () {
    this.$store.menu.toggle()
  },
  onDrawerOpen () {
    // scroll to top to see close buttons from original navbar
    !this.isSticky && this.$scrollTo(0)
  }
})

Alpine.data('AppHeader', AppHeader)
