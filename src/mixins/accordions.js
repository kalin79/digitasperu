import Alpine from 'alpinejs'

const Accordions = () => ({
  activeItemIndex: -1,
  toggleItem (index = -1) {
    const isActiveItem = this.activeItemIndex === index
    this.activeItemIndex = isActiveItem ? -1 : index
  },
  isActive (index = -1) {
    return index === -1
      ? this.activeItemIndex !== -1
      : this.activeItemIndex === index
  }
})

Alpine.data('Accordions', Accordions)

export default Accordions
