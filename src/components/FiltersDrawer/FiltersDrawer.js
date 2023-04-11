import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './FiltersDrawer.css'

const FiltersDrawer = () => ({
  isOutside: false,
  isOpened: false,
  $listeners: {
    '@breakpoint:change.window': 'setup',
    '@keyup.escape.window': 'close',
  },
  filterProps: {
    ['@keydown.arrow-up.prevent']() { this.focusNextCheckbox(0, -1) },
    ['@keydown.arrow-down.prevent']() { this.focusNextCheckbox(0, 1) },
    ['@keydown.arrow-left.prevent']() { this.focusNextCheckbox(-1, 0) },
    ['@keydown.arrow-right.prevent']() { this.focusNextCheckbox(1, 0) },
    ['@keydown.page-up.prevent']() { this.focusNextCheckbox(0, -Number.MAX_SAFE_INTEGER) },
    ['@keydown.page-down.prevent']() { this.focusNextCheckbox(0, Number.MAX_SAFE_INTEGER) },
  },
  get isOpen () {
    return this.$store.filters.isOpen
  },
  get queries () {
    return this.$store.filters.queries
  },
  set queries (queries) {
    this.$store.filters.setQueries(queries)
  },
  get hasQueries () {
    return this.$store.filters.count > 0
  },
  get submitLabel () {
    const label = [
      'Apply %d filter', // singular
      'Apply %d filters' // plural
    ]
    const count = this.$store.filters.count

    return label[+(count > 1)].replace('%d', count)
  },

  init () {
    this.setupTaxonomies()

    this.$watch('isOpen', isOpen => isOpen ? this.enter() : this.leave())
    this.$watch('isOutside', isOutside => isOutside ? this.$dispatch('magnetic-cursor:enter') : this.$dispatch('magnetic-cursor:leave'))

    this.staggerItems = [
      this.$refs.title,
      this.$el.querySelectorAll('[x-ref="filter"]'),
      this.$refs.submit
    ]

    this.setup()
  },
  setup () {
    gsap.set(this.$refs.background, {
      xPercent: this.$isDesktop ? 100 : 0,
      yPercent: this.$isDesktop ? 0 : 100
    })
    gsap.set(this.staggerItems, { autoAlpha: 0, y: 8 })
    gsap.set(this.$el.querySelector('[x-ref="close"]'), { opacity: 0, scale: 0 })
    gsap.set(this.$refs.backdrop, { autoAlpha: 0 })
  },
  setupTaxonomies () {
    // create taxonomies collection from terms in DOM
    const taxonomies = []
    Array.from(this.$refs.container.querySelectorAll('[data-taxonomy]'), (group) => {
      const taxonomy = group.dataset.taxonomy
      if (taxonomy && !taxonomies[taxonomy]) {
        taxonomies[taxonomy] = []
      }

      Array.from(group.querySelectorAll('[data-term-id]'), (el) => {
        taxonomies[taxonomy].push({ id: el.dataset.termId, title: el.dataset.termTitle })
      })
    })

    this.$store.filters.setTaxonomies(taxonomies)
  },
  open () {
    this.$store.filters.open()
  },
  close () {
    this.$store.filters.close()
  },
  beforeEnter () {
    this.isOutside = false

    // reset tabindex inside filters
    Array.from(this.$el.querySelectorAll('[x-ref="filter"]'), (filter) => {
      let resetTabIndex = Number.MAX_SAFE_INTEGER
      const checkboxes = Array.from(filter.querySelectorAll('input[type="checkbox"]'), (checkbox, i) => {
        checkbox.setAttribute('tabindex', -1)
        checkbox.checked && (resetTabIndex = Math.min(resetTabIndex, i))
        return checkbox
      })

      if (resetTabIndex > checkboxes.length - 1) {
        resetTabIndex = 0
      }

      // first active one is default, first one otherwise
      checkboxes[resetTabIndex] && checkboxes[resetTabIndex].setAttribute('tabindex', 0)
    })
  },
  enter () {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: 'quart.inOut'
      },
      onStart: this.beforeEnter.bind(this),
      onComplete: this.afterEnter.bind(this),
    })
    tl
      .to(this.$refs.background, {
        xPercent: 0,
        yPercent: 0,
        duration: 0.5,
      })
      .to(this.staggerItems, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.06,
        clearProps: 'all'
      }, '>-0.08')
      .to(this.$el.querySelector('[x-ref="close"]'), {
        opacity: 1,
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
    this.$el && this.$isDesktop && disableBodyScroll(this.$el)
    this.isOpened = true
    // focus the first available filter (only on keyboard navigation)
    this.$store.filters.autofocus &&
    this.$el.querySelector('input[type="checkbox"][tabindex="0"]').focus()
  },
  leave () {
    const tl = gsap.timeline({
      defaults: {
        ease: 'quart.inOut',
        duration: 0.3
      },
      onComplete: this.afterLeave.bind(this)
    })
    tl
      .to(this.$el.querySelector('[x-ref="close"]'), {
        opacity: 0,
        scale: 0,
        ease: 'css.ease'
      }, 0)
      .to(this.staggerItems, {
        autoAlpha: 0,
        y: 8,
        clearProps: 'transform'
      }, 0)
      .to(this.$refs.background, {
        xPercent: this.$isDesktop ? 100 : 0,
        yPercent: this.$isDesktop ? 0 : 100,
        duration: 0.5
      }, 0.2)
      .to(this.$refs.backdrop, {
        autoAlpha: 0,
        ease: 'linear'
      }, '>-0.3')

    return tl
  },
  afterLeave () {
    this.$el && this.$isDesktop && enableBodyScroll(this.$el)
    this.isOpened = false
  },
  focusNextCheckbox (directionX = 0, directionY = 0) {
    let currentIndex = -1
    const checkboxes = Array.from(this.$el.querySelectorAll('input[type="checkbox"]'), (checkbox, i) => {
      if (checkbox.getAttribute('tabindex') == 0) {
        currentIndex = i
      }

      checkbox.setAttribute('tabindex', -1)

      return checkbox
    })

    const nbColumns = 2
    const itemsPerColumn = Math.ceil(checkboxes.length / 2)
    const currentRow = currentIndex % itemsPerColumn
    const currentCol = Math.floor(currentIndex / itemsPerColumn)

    if (currentCol + directionX > nbColumns - 1) {
      directionX = -(nbColumns - 1)
      directionY++
    } else if (currentCol + directionX < 0) {
      directionX = nbColumns - 1
      directionY--
    } else if (Math.abs(directionY) === 1 && currentCol < nbColumns - 1 && currentRow + directionY > itemsPerColumn - 1) {
      directionX++
      directionY = -itemsPerColumn
    } else if (Math.abs(directionY) === 1 && currentCol > 0 && currentRow + directionY < 0) {
      directionX--
      directionY = itemsPerColumn
    }

    const rowIndex = Math.max(0, Math.min(itemsPerColumn - 1, currentRow + directionY))
    const colIndex = itemsPerColumn * Math.max(-(nbColumns - 1), Math.min((nbColumns - 1), currentCol + directionX))
    const nextIndex = Math.max(0, Math.min(checkboxes.length - 1, rowIndex + colIndex))
    if (checkboxes[nextIndex]) {
      checkboxes[nextIndex].setAttribute('tabindex', 0)
      checkboxes[nextIndex].focus()
    }
  }
})

Alpine.data('FiltersDrawer', FiltersDrawer)
