import { gsap, ScrollTrigger } from 'gsap'
import { toColumns } from '@/utilities/array.utils'

export default {
  // props
  itemsPerPage: 10,
  nbColumns: 1,

  // data
  items: [],
  currentPage: 1,
  currentTabIndex: 0,
  gridProps: {
    ['@keydown.arrow-up.prevent']() { this.focusNextItem(0, -1) },
    ['@keydown.arrow-down.prevent']() { this.focusNextItem(0, 1) },
    ['@keydown.arrow-left.prevent']() { this.focusNextItem(-1, 0) },
    ['@keydown.arrow-right.prevent']() { this.focusNextItem(1, 0) },
    ['@keydown.page-up.prevent']() { this.focusNextItem(0, -Math.floor(this.itemsPerPage / this.nbColumns)) },
    ['@keydown.page-down.prevent']() { this.focusNextItem(0, Math.floor(this.itemsPerPage / this.nbColumns)) },
    ['@keydown.home.prevent']() { this.focusNextItem(-(this.currentTabIndex % this.nbColumns), 0) },
    ['@keydown.end.prevent']() { this.focusNextItem((this.nbColumns - 1) - (this.currentTabIndex % this.nbColumns), 0) },
    ['@keydown.home.ctrl.prevent']() { this.focusItem(0) },
    ['@keydown.end.ctrl.prevent']() { this.focusItem(this.filteredItems.length - 1) },
  },

  // computed
  get filteredItems () {
    return this.$store.filters.queries.length
      ? this.items.filter(item => this.isEntityVisible(item.terms))
      : this.items
  },
  get paginatedItems () {
    const items = this.filteredItems
    return items.length
      ? items.slice(0, this.currentPage * this.itemsPerPage)
      : []
  },
  get items2D () {
    // store original index and set tabindex
    const items = this.paginatedItems.map((item, index) => {
      item.index = index
      item.tabindex = index === this.currentTabIndex ? 0 : -1
      return item
    })
    return items.length
      ? this.$isDesktop
        ? toColumns(items, this.nbColumns)
        : [items]
      : []
  },
  get nbPages () {
    const nbItems = this.filteredItems.length
    return nbItems
      ? Math.ceil(nbItems / this.itemsPerPage)
      : 1
  },
  get isLastPage () {
    return this.currentPage === this.nbPages
  },

  // mounted
  init () {
    // collect items data from Cards in DOM
    typeof this.prepareItems === 'function' && this.prepareItems()

    // show all when items are filtered
    this.$watch('filteredItems', this.showAll.bind(this))

    this.$watch('currentPage', () => {
      ScrollTrigger.refresh()
    })

    // remove original items
    this.$refs.items && this.$refs.items.remove()

    this.$isDesktop &&
    this.$nextTick(() => {
      let scrollTrigger = null

      const parallax = gsap.to(this.$refs.grid.querySelectorAll(':scope > *:nth-of-type(even)'), {
        y: () => scrollTrigger ? (scrollTrigger.start - scrollTrigger.end) * 0.05 : 0,
        force3D: false,
        ease: 'none'
      })

      scrollTrigger = ScrollTrigger.create({
        trigger: this.$refs.grid,
        start: 'top bottom',
        end: 'bottom top',
        animation: parallax,
        scrub: true,
        invalidateOnRefresh: true,
      })
    })
  },

  // methods
  nextPage () {
    // load another batch of items
    this.currentPage = Math.min(++this.currentPage, this.nbPages)
  },
  showAll () {
    this.currentPage = this.nbPages
  },
  backToTop ($event = null) {
    if (!this.$parent) {
      return
    }

    const top = this.$parent.querySelector('[x-ref="top"]') || this.$parent
    const settings = {}
    const fromKeyboard = $event && $event.detail === 0
    this.$isMobile && (settings.duration = 0)
    top && this.$scrollTo(top, settings).then(() => fromKeyboard && top.focus())
  },
  focusNextItem (directionX = 0, directionY = 0) {
    const rowIndex = this.nbColumns * directionY
    const colIndex = directionX
    const nextIndex = this.currentTabIndex + rowIndex + colIndex
    this.focusItem(nextIndex)
  },
  focusItem (index) {
    this.currentTabIndex = Math.max(0, Math.min(this.filteredItems.length - 1, index))

    // change current page if needed
    this.currentPage = Math.max(this.currentPage, 1 + Math.floor(this.currentTabIndex / this.itemsPerPage))

    this.$nextTick(() => {
      const itemLink = this.$refs.grid.querySelector(`[aria-posinset="${(this.currentTabIndex + 1)}"] a`)
      itemLink && itemLink.focus()
    })
  }
}
