import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './PageNavbar.css'

const PageNavbar = () => ({
  isVisible: false,
  allowOverflow: false,
  $listeners: {
    ['@app-header:change.window']({ detail }) {
      this.isVisible = detail.isSticky
    },
    ['@share:open']() {
      this.allowOverflow = true
    },
    ['@share:closed']() {
      this.allowOverflow = false
    }
  },

  init () {
    this.$watch('$store.scroll.direction', (direction) => {
      const vars = {
        yPercent: direction < 0 ? -100 : 0,
        duration: 0.15,
        ease: 'css.inOut'
      }

      if (this.$isDesktop) {
        vars.opacity = direction < 0 ? 0 : 1
      }

      gsap.to(this.$refs.inner, vars)
    })
  }
})

Alpine.data('PageNavbar', PageNavbar)
