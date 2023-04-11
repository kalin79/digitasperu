import Alpine from 'alpinejs'

const CaseModule = () => ({
  $listeners: {
    '@resize.window.debounce': 'onResize',
  },

  get hasBackground () {
    return this.$el.classList.contains('bg-muted')
  },

  init () {
    this.$nextTick(() => {
      this.computeBackground()
    })
  },
  onResize () {
    this.computeBackground()
  },
  computeBackground () {
    if (!this.hasBackground) {
      return
    }

    // compute size of direct siblings modules
    const prevModule = this.$el.previousElementSibling
    const nextModule = this.$el.nextElementSibling

    prevModule && this.$el.style.setProperty('--prev-module-height', `${prevModule.offsetHeight}px`)
    nextModule && this.$el.style.setProperty('--next-module-height', `${nextModule.offsetHeight}px`)
  }
})

Alpine.data('CaseModule', CaseModule)
