import Alpine from 'alpinejs'
import { mix } from '@/utilities/object.utils'
import PlayerControls from '@Components/PlayerControls/PlayerControls'
import './VideoPlayer.css'

const VideoPlayer = () => mix(PlayerControls.call(this), {
  isPlayerVisible: false,
  isUIVisible: false,
  isUIActive: false,
  idleTimeout: 0,
  idleDelay: 3000, // in milliseconds

  $listeners: {
    '@mouseenter': 'onMouseEnter',
    '@mousemove': 'onMouseMove',
    '@mouseleave': 'onMouseLeave',
  },
  playerUI: {
    ['@mouseenter']() {
      this.isUIVisible && (this.isUIActive = true)
    },
    ['@mouseleave']() {
      this.isUIActive = false
    },
    ['@focusin']() {
      this.isUIActive = true
    },
    ['@focusout']() {
      this.isUIActive = false
    },
  },

  show () {
    this.isPlayerVisible = true
    this.showUI()
  },
  hide () {
    this.isPlayerVisible = false
    this.hideUI()
  },
  toggle () {
    if (this.isPlayerVisible) {
      return this.hide()
    }

    return this.show()
  },
  showAndPlay () {
    this.show()
    this.play()
    this.watchIdle()
  },
  showUI () {
    this.isUIVisible = true
  },
  hideUI () {
    this.isUIVisible = false
  },
  onMouseEnter () {
    this.onMouseMove()
  },
  onMouseMove () {
    this.clearIdle()
    if (this.isPlayerVisible) {
      this.showUI()
      this.watchIdle()
    }
  },
  onMouseLeave () {
    this.clearIdle()
    this.isPlayerVisible
    && this.playing
    && !this.isUIActive
    && this.hideUI()
  },
  onMouseIdle () {
    this.isPlayerVisible
    && this.playing
    && !this.isUIActive
    && this.hideUI()
  },
  watchIdle () {
    this.clearIdle()
    this.idleTimeout = setTimeout(this.onMouseIdle.bind(this), this.idleDelay)
  },
  clearIdle () {
    clearTimeout(this.idleTimeout)
  }
})

Alpine.data('VideoPlayer', VideoPlayer)
