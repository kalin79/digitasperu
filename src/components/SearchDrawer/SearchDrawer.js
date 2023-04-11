import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import './SearchDrawer.css'

const SearchDrawer = (settings= {}) => ({
  // props
  apiUrl: '',
  // data
  query: '',
  isOpened: false,
  isPending: false,
  results: null,

  ...settings,

  // computed
  get isOpen () {
    return this.$store.search.isOpen
  },
  get minLength () {
    return parseInt(this.$refs.input.getAttribute('minlength'))
  },
  get hasQuery () {
    return this.$store.search.hasQuery
  },
  get hasAnyResults () {
    return Array.isArray(this.results)
  },
  get hasResults () {
    return this.hasAnyResults && this.results.length > 0
  },
  get resultsLabel () {
    const label = [
      '%d result', // singular
      '%d results' // plural
    ]
    const count = this.hasAnyResults
      ? this.results.reduce((count, group) => count + group.items.length, 0)
      : 0

    return label[+(count > 1)].replace('%d', count)
  },
  // mounted
  init () {
    this.$watch('isOpen', isOpen => isOpen ? this.enter() : this.leave())
    this.$watch('$store.search.query', this.search.bind(this))
    this.$watch('query', (query) => {
      query = query.length >= this.minLength ? query : ''
      this.$store.search.setQuery(query)
    })

    gsap.set(this.$el.querySelectorAll('[x-ref="background"]'), { y: -25, opacity: 0 })
    gsap.set(this.$el.querySelectorAll('[x-ref="content"]'), { opacity: 0 })
  },
  // methods
  open () {
    this.$store.search.open()
  },
  close () {
    this.$store.search.close()
  },
  search (query = this.query) {
    if (!query) {
      return (this.results = null)
    }

    this.isPending = true

    let results = []
    fetch(`${this.apiUrl}?${new URLSearchParams({ query })}`)
      .then(response => response.json())
      .then((data) => {
        this.isPending = false
        results = data
      })
      .finally(() => {
        this.isPending = false
        this.results = results
      })
  },
  submit () {
    this.$refs.input && this.$refs.input.blur()
    this.search()
  },
  enter () {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.15,
        ease: 'css.inOut'
      },
      onComplete: this.afterEnter.bind(this),
    })
    tl
      .to(this.$el.querySelectorAll('[x-ref="background"]'), {
        y: 0,
        opacity: 1
      }, 0)
      .to(this.$el.querySelectorAll('[x-ref="content"]'), {
        opacity: 1,
        ease: 'css.ease'
      }, 0.075)

    return tl
  },
  afterEnter () {
    this.$el && disableBodyScroll(this.$refs.inner)
    this.isOpened = true
    this.$refs.input && this.$refs.input.focus()
  },
  beforeLeave () {
    this.$refs.input && this.$refs.input.blur()
  },
  leave () {
    this.beforeLeave()

    const tl = gsap.timeline({
      defaults: {
        duration: 0.15,
        ease: 'css.inOut'
      },
      onComplete: this.afterLeave.bind(this)
    })
    tl
      .to(this.$el.querySelectorAll('[x-ref="background"]'), {
        y: -25,
        opacity: 0
      }, 0.075)
      .to(this.$el.querySelectorAll('[x-ref="content"]'), {
        opacity: 0,
        ease: 'css.ease'
      }, 0)

    return tl
  },
  afterLeave () {
    this.$el && enableBodyScroll(this.$refs.inner)
    this.isOpened = false
  }
})

Alpine.data('SearchDrawer', SearchDrawer)
