import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './ScrollHint.css'

const ScrollHint = () => ({
  init () {
    gsap.set(this.$el, { yPercent: -100 })
    gsap.to(this.$el, {
      keyframes: [
        { yPercent: 0, duration: 0.6, ease: 'cubic.out' },
        { yPercent: 100, duration: 0.6, ease: 'cubic.in', delay: 1.2 },
      ],
      repeat: -1
    })
  }
})

Alpine.data('ScrollHint', ScrollHint)
