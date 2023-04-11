const INTRO_SS_KEY = 'intro'

export default {
  // state
  isReady: false,
  showIntro: false,
  isBackgroundVisible: false,
  // mutations
  setBackgroundVisibility (isVisible) {
    this.isBackgroundVisible = isVisible
  },
  setReady () {
    this.isReady = true
    window.sessionStorage.setItem(INTRO_SS_KEY, 'false')
  },

  init () {
    this.showIntro = !window.sessionStorage.getItem(INTRO_SS_KEY)
  }
}
