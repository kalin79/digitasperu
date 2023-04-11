import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './Button.css'

const Button = (settings = {}) => ({
  prop: 'label',
  isHover: false,
  isFocused: false,
  $listeners: {
    '@mouseenter': 'onMouseEnter',
    '@mouseleave': 'onMouseLeave',
    '@focus': 'onFocus',
    '@blur': 'onBlur',
  },

  ...settings,

  onMouseEnter () {
    this.isHover = true
    !this.isFocused && this.animate()
  },
  onMouseLeave () {
    this.isHover = false
    !this.isFocused && this.animate(true)
  },
  onFocus () {
    this.isFocused = true
    !this.isHover && this.animate()
  },
  onBlur () {
    this.isFocused = false
    !this.isHover && this.animate(true)
  },

  animate (reverse = false) {
    if (this.$isTouch || !this.$refs.icon) {
      return
    }

    let moveIcon = 0
    if (!reverse && this.$refs.icon) {
      const labelRect = this.$refs.label.getBoundingClientRect()
      const iconRect = this.$refs.icon.getBoundingClientRect()

      moveIcon = labelRect.right - iconRect.right
    }

    gsap.to(this.$refs.icon, {
      x: moveIcon,
      duration: 0.3,
      ease: 'css.ease'
    })
  }
})

Alpine.data('Button', Button)
