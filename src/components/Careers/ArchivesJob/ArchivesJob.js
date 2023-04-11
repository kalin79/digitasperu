import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import Filterable from '@/mixins/filterable'
import Tabs from '@/mixins/tabs'
import './ArchivesJob.css'

const ArchivesJob = () => mix(Tabs(), Filterable, {
  isJobVisible ({ city, terms }) {
    return city === this.activeTab && this.isEntityVisible(terms)
  }
})

Alpine.data('ArchivesJob', ArchivesJob)
