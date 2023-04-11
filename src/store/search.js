export default {
  // state
  isOpen: false,
  query: '',

  // getters
  get hasQuery () {
    return this.query.length > 0
  },

  // mutations
  open () {
    this.isOpen = true
  },
  close () {
    this.isOpen = false
  },
  toggle () {
    this.isOpen = !this.isOpen
  },
  setQuery (query) {
    this.query = query
  },
  clear () {
    this.query = ''
  },
  reset () {
    this.close()
    this.clear()
  }
}
