export default {
  // state
  isOpen: false,

  // getters

  // mutations
  open () {
    this.isOpen = true
  },
  close () {
    this.isOpen = false
  },
  toggle () {
    this.isOpen = !this.isOpen
  }
}
