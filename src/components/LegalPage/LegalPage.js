import Alpine from 'alpinejs'
import { slugify } from '@/utilities/string.utils'
import './LegalPage.css'

const LegalPage = (settings = {}) => ({
  // props
  headingsSelector: 'h3',
  ...settings,
  // data
  toc: [],
  // mounted
  init () {
    Array.from(this.$el.querySelectorAll(this.headingsSelector), (heading) => {
      const title = heading.textContent
      // const id = slugify(title.replace(/^\d+\.\s+/, ''))
      this.toc.push({
        title,
        link: `#${heading.getAttribute('id')}`
      })
    })
  }
})

Alpine.data('LegalPage', LegalPage)
