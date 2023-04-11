export default {
  // state
  isOpen: false,
  autofocus: false,
  taxonomies: [],
  queries: [],

  // getters
  get count () {
    return this.queries.length
  },
  get activeFilters () {
    const activeFilters = []
    this.queries.forEach((query) => {
      const [taxonomy, value] = query.split(':')
      const terms = this.taxonomies[taxonomy]
      if (terms) {
        const term = terms.find(term => term.id === value)
        term && activeFilters.push({...term, taxonomy })
      }
    })

    return activeFilters
  },
  get taxQuery () {
    return this.queries.reduce((acc, query) => {
      const [taxonomy, value] = query.split(':')
      acc[taxonomy] = [ ...(acc[taxonomy] || []), value ]
      return acc
    }, {})
  },

  // mutations
  open (autofocus = false) {
    this.isOpen = true
    this.autofocus = autofocus
  },
  close () {
    this.isOpen = false
    this.autofocus = false
  },
  toggle () {
    this.isOpen = !this.isOpen
  },
  setTaxonomies (taxonomies) {
    this.taxonomies = taxonomies
  },
  setQueries (queries) {
    this.queries = queries
  },
  clearFilter ({ taxonomy, id }) {
    this.queries = this.queries.filter(query => query !== `${taxonomy}:${id}`)
  },
  clear () {
    this.queries = []
  },
  reset () {
    this.close()
    this.clear()
  }
}
