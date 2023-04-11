import Alpine from 'alpinejs'
import './CustomCursor.css'

/**
 * Add x-cursor directive with:
 * - icon name as directive value.
 *   e.g.: x-cursor:arrow
 * - background color as directive expression. Ddefault to global primary color.
 *   e.g. x-cursor:arrow="#7C00FF"
 * - icon color (black|white) as directive modifier (must be added after icon name). Default to global primary contrast color.
 *   e.g. x-cursor:arrow.white
 */

const CustomCursor = (settings = {}) => ({
  // computed
  get icon () {
    return this.$store.cursor.icon
  },
  set icon (name) {
    this.$store.cursor.setIcon(name)
  },
  get label () {
    return this.$store.cursor.label
  },
  set label (text) {
    this.$store.cursor.setLabel(text)
  },
  get hasLabel () {
    return this.icon === 'label' && this.label
  },
  get backgroundColor () {
    return this.$store.cursor.backgroundColor
  },
  set backgroundColor (color) {
    this.$store.cursor.setBackgroundColor(color)
  },
  get iconColor () {
    return this.$store.cursor.iconColor
  },
  set iconColor (color) {
    this.$store.cursor.setIconColor(color)
  },
  get withProgress () {
    return this.$store.cursor.withProgress
  },
  set withProgress (enable) {
    this.$store.cursor[enable ? 'showProgress' : 'hideProgress']()
  },
  get progress () {
    return this.$store.cursor.progress
  },
  set progress (progress) {
    this.$store.cursor.setProgress(progress)
  },
  get styles () {
    return {
      'background-color': this.backgroundColor,
      'color': this.iconColor,
    }
  },
  get isVisible () {
    return !!this.icon
  },
  // mounted
  init () {
    for (const [key, value] of Object.entries(settings)) {
      this[key] = value
    }

    // remove itself on touch devices
    if (this.$isTouch) {
      return this.$el.remove()
    }
  },
})

Alpine.data('CustomCursor', CustomCursor)
