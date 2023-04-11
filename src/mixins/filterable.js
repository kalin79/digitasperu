export default {
  // computed
  get taxonomies () {
    return this.$store.filters.taxonomies
  },
  get queries () {
    return this.$store.filters.queries
  },
  get activeFilters () {
    return this.$store.filters.activeFilters
  },
  get taxQuery () {
    return this.$store.filters.taxQuery
  },

  // methods
  openDrawer ($event = null) {
    // check if called from a keyboard event
    const fromKeyboard = $event && $event.detail === 0
    this.$store.filters.open(fromKeyboard)
  },
  closeDrawer () {
    this.$store.filters.close()
  },
  clearFilter (filter) {
    this.$store.filters.clearFilter(filter)
  },
  isEntityVisible (terms) {
    if (!this.queries.length) {
      return true
    }

    let matches = true
    for (let taxonomy in this.taxQuery) {
      const values = this.taxQuery[taxonomy]
      matches = matches && values.some(value => terms.some(term => term.taxonomy === taxonomy && term.id === value))
    }

    return matches
  },
}
