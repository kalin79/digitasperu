import Alpine from 'alpinejs'
import { ScrollTrigger } from 'gsap'
import './Hero.css'

const Hero = () => ({
  init () {
    ScrollTrigger.create({
      trigger: this.$el,
      onToggle: ({ isActive }) => this.$store.app.setBackgroundVisibility(isActive)
    })
  }
})

Alpine.data('Hero', Hero)
