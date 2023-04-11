import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import Filterable from '@/mixins/filterable'
import Paginatable from '@/mixins/paginatable'
import './ArchivesProject.css'

const ArchivesProject = (settings = {}) => mix(Paginatable, Filterable, {
  nbColumns: 2,

  ...settings,

  prepareItems () {
    // collect items data from Cards in DOM
    this.items = Array.from(this.$el.querySelectorAll('[data-terms]'), (card) => {
      const id = card.dataset.id
      const title = card.querySelector('[x-text="entity.title"]').textContent
      const excerpt = card.querySelector('[x-html="entity.excerpt"]').innerHTML
      const tags = Array.from(card.querySelectorAll('[x-text="tag"]'), tag => tag.textContent)
      const terms = JSON.parse(card.dataset.terms)
      let thumbnail = card.querySelector('img')
      thumbnail && (thumbnail = thumbnail.outerHTML)
      let link = card.querySelector('a')
      link && (link = link.getAttribute('href'))
      const color = card.dataset.color
      const contrastColor = card.dataset.contrastColor

      return { id, title, excerpt, tags, terms, link, thumbnail, color, contrastColor }
    })
  }
})

Alpine.data('ArchivesProject', ArchivesProject)
