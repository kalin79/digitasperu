export default {
  // state
  direction: 0,
  progress: 0,

  // mutations
  setDirection (direction) {
    this.direction = direction

    // store as CSS variable
    // document.documentElement.style.setProperty('--scroll-direction', direction)
  },
  setProgress (progress) {
    this.progress = progress

    // store as CSS variable
    // document.documentElement.style.setProperty('--scroll-progress', progress)
  }
}
