import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import PlayerControls from '@Components/PlayerControls/PlayerControls'
import './AudioPlayer.css'

const AudioPlayer = () => mix(PlayerControls.call(this), {
  isPlayerVisible: false,

  show () {
    this.isPlayerVisible = true
  },
  hide () {
    this.isPlayerVisible = false
  },
  toggle () {
    if (this.isPlayerVisible) {
      return this.hide()
    }

    return this.show
  },
  showAndPlay () {
    this.show()
    this.play()
  }
})

Alpine.data('AudioPlayer', AudioPlayer)
