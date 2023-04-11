import Alpine from 'alpinejs'
import './ModuleVideo.css'

const ModuleVideo = (settings = {}) => ({
  embed: '',
  isVideoVisible: false,
  ...settings,
  init () {

  },
  showVideo () {
    this.isVideoVisible = !!this.embed
  }
})

Alpine.data('ModuleVideo', ModuleVideo)
