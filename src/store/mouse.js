import { gsap } from 'gsap'
import lerp from '@/utilities/lerp'
import { isTouch } from '@/utilities/snif'

export default {
  // state
  x: 0,
  y: 0,
  lerpX: 0,
  lerpY: 0,
  inertia: 0.2,

  // getters
  get position () {
    return { x: this.x, y: this.y }
  },

  init () {
    !isTouch && gsap.ticker.add(this.update.bind(this))
  },

  // mutations
  setPosition ({ x, y }) {
    this.x = x
    this.y = y
  },
  setInertia (inertia) {
    this.inertia = inertia
  },
  update () {
    this.lerpX = lerp(this.lerpX, this.x, this.inertia)
    this.lerpY = lerp(this.lerpY, this.y, this.inertia)

    // store as CSS variable
    // document.documentElement.style.setProperty('--mouse-x', `${this.lerpX}px`)
    // document.documentElement.style.setProperty('--mouse-y', `${this.lerpY}px`)
  }
}
