import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import Filterable from '@/mixins/filterable'
import Paginatable from '@/mixins/paginatable'
import './ArchivesInsight.css'

const ArchivesInsight = (settings = {}) => mix(Paginatable, Filterable, {
  nbColumns: 3,

  ...settings,

  prepareItems () {
    // collect items data from Cards in DOM
    this.items = Array.from(this.$el.querySelectorAll('[data-terms]'), (card) => {
      const id = card.dataset.id
      const title = card.querySelector('[x-text="entity.title"]').textContent
      const date = card.querySelector('[x-text="entity.date"]').textContent
      const authors = card.querySelector('[x-text="entity.authors"]').textContent
      const terms = JSON.parse(card.dataset.terms)
      let thumbnail = card.querySelector('img')
      thumbnail && (thumbnail = thumbnail.outerHTML)
      let link = card.querySelector('a')
      link && (link = link.getAttribute('href'))
      const color = card.dataset.color
      const contrastColor = card.dataset.contrastColor

      return { id, title, date, authors, terms, link, thumbnail, color, contrastColor }
    })
  }
})

Alpine.data('ArchivesInsight', ArchivesInsight)
