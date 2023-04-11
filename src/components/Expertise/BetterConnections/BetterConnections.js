import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import Tabs from '@/mixins/tabs'
import './BetterConnections.css'

const TabsComponent = Tabs()

const BetterConnections = () => mix(TabsComponent, {
  autoplay: 0, // in seconds, 0 to disable

  sliderEl: null,
  tickTimeout: null,

  init () {
    TabsComponent.init.call(this)

    // disable autoplay on mobile
    this.autoplay = !this.$isTouch && this.autoplay

    this.sliderEl = this.$el.querySelector('[x-ref="slider"]')

    this.onSlideChange = this.onSlideChange.bind(this)
    this.pause = this.pause.bind(this)
    this.restart = this.restart.bind(this)

    this.$nextTick(() => {
      this.autoplay && this.tick()
    })
  },

  onSlideChange ({ detail }) {
    const index = parseInt(detail.el.dataset.index)
    this.tabs[index] && this.activateTab(this.tabs[index].id)
  },

  onTagClick () {
    this.clearTick()
    this.tick()
    const index = this.tabs.findIndex(tab => tab.id === this.$el.id)
    index !== -1 &&
    this.sliderEl.dispatchEvent(new CustomEvent("goto", {
      detail: { index }
    }))
    this.activateTab(this.$el.id)
  },

  pause () {
    this.clearTick()
  },

  restart () {
    this.tick()
  },

  clearTick () {
    window.clearTimeout(this.tickTimeout)
  },

  tick () {
    if (!this.autoplay) {
      return
    }

    this.clearTick()
    this.tickTimeout = window.setTimeout(() => {
      this.sliderEl.dispatchEvent(new CustomEvent("gotonext"))
      this.tick()
    }, (+this.autoplay) * 1000)
  }
})

Alpine.data('BetterConnections', BetterConnections)
