import Alpine from 'alpinejs'
import { ScrollTrigger } from 'gsap'
import './AppFooter.css'

const AppFooter = () => ({
  init () {
    ScrollTrigger.create({
      trigger: this.$el,
      onToggle: ({ isActive }) => this.$store.app.setBackgroundVisibility(isActive)
    })
  }
})

Alpine.data('AppFooter', AppFooter)
