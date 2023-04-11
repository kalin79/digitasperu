import Alpine from 'alpinejs'

const DIRECTION = {
  'ArrowLeft': -1,
  'ArrowUp': -1,
  'ArrowRight': 1,
  'ArrowDown': 1,
}

const Tabs = () => ({
  tabs: [],
  activeTab: '',
  tabProps: {
    '@keydown.arrow-up': 'determineFocusOrientation',
    '@keydown.arrow-down': 'determineFocusOrientation',
    '@keydown.arrow-left': 'determineFocusOrientation',
    '@keydown.arrow-right': 'determineFocusOrientation',
    ['@keydown.home.prevent']() { this.focusTab(0) },
    ['@keydown.end.prevent']() { this.focusTab(this.tabs.length - 1) },
  },

  get isVertical () {
    return this.$refs.tablist.getAttribute('aria-orientation') === 'vertical'
  },

  init () {
    this.$watch('activeTab', this.onTabChange.bind(this))

    this.tabs = Array.from(this.$refs.tablist.querySelectorAll('[x-ref="tab"]'))

    this.activateTab(this.tabs[0].id)
  },
  onTabChange (tabId, prevTabId) {
    if (!prevTabId) {
      return
    }

    if (this.$isDesktop) {
      this.$refs.body && this.$scrollTo(this.$refs.body)
    } else {
      this.scrollCurrentTabIntoView()
    }
  },
  scrollCurrentTabIntoView () {
    const button = this.$el.querySelector(`#${this.activeTab}`)
    if (!button) {
      return
    }

    // scroll current tab into view if needed
    const padding = this.$refs.tablist.getBoundingClientRect().left + this.$refs.scroller.scrollLeft

    let xMin = 0
    let { width: xMax } = this.$refs.scroller.getBoundingClientRect()
    xMin += padding
    xMax -= padding

    const { left: x1, right: x2 } = button.getBoundingClientRect()

    let offsetX = 0
    if (x1 < xMin) {
      offsetX = xMin
    } else if (x2 > xMax) {
      offsetX = xMax - (x2 - x1)
    }

    offsetX && this.$scrollTo(0, {
      container: this.$refs.scroller,
      x: button,
      duration: 0.5,
      ease: 'quart.out',
      offsetX
    })
  },
  activateTab (tabId) {
    this.activeTab = tabId
  },
  isTabActive (tabId) {
    return this.activeTab === tabId
  },
  determineFocusOrientation (e) {
    const { key } = e
    let proceed = false
    if (this.isVertical) {
      if (['ArrowUp', 'ArrowDown'].includes(key)) {
        e.preventDefault()
        proceed = true
      }
    } else if (['ArrowLeft', 'ArrowRight'].includes(key)) {
      proceed = true
    }

    proceed &&
    DIRECTION[key] &&
    this.focusNextTab(DIRECTION[key])
  },
  focusNextTab (direction = 0) {
    const currentTabIndex = this.tabs.findIndex(tab => tab.id === this.$el.id)
    currentTabIndex !== -1 && this.focusTab(currentTabIndex + direction)
  },
  focusTab (index) {
    index = Math.max(0, Math.min(this.tabs.length - 1, index))

    this.tabs[index] && this.tabs[index].focus()
  }
})

Alpine.data('Tabs', Tabs)

export default Tabs
