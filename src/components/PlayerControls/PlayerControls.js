import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './PlayerControls.css'

const readableTime = t => `${String(Math.floor((t / 60)))}:${String(Math.floor((t % 60))).padStart(2, '0')}`

const PlayerControls = () => ({
  player: null,
  time: 0,
  duration: 0,
  paused: true,
  ended: true,
  seeking: false,
  seekTime: 0,
  _seekwidth: 0,
  play: null,
  pause: null,

  playerProps: {
    'x-ref': 'player',
    '@loadedmetadata': 'onDurationChange',
    '@durationchange': 'onDurationChange',
    '@timeupdate': 'onTimeUpdate',
    '@play': 'onStateChange',
    '@playing': 'onStateChange',
    '@pause': 'onStateChange',
    '@ended': 'onStateChange',
    '@click': 'togglePlay',
  },

  get uiClasses () {
    return {
      'is-playing': this.playing,
      'is-paused': this.paused,
      'is-muted': this.muted,
    }
  },
  get readableCurrentTime () {
    return readableTime(this.time)
  },
  get readableDuration () {
    return readableTime(this.duration)
  },
  get playing () {
    return !(this.paused || this.ended)
  },
  get muted () {
    return this.player && this.player.muted
  },
  set muted (muted) {
    this.player && (this.player.muted = muted)
  },

  init () {
    this.$watch('playing', (playing) => {
      gsap.ticker[playing && !this.seeking ? 'add' : 'remove'](this.renderProgress.bind(this))
    })
    this.$watch('seekTime', (seekTime) => {
      this.time = seekTime
      this.updateSeekbar(seekTime / this.duration)
      this.player && (this.player.currentTime = seekTime)
    })

    this.$nextTick(() => {
      this.player = this.$refs.player
      // // bind native methods
      this.play = this.player.play.bind(this.player)
      this.pause = this.player.pause.bind(this.player)

      this.updateSeekbar = gsap.quickSetter(this.$refs.seekbarinner, 'scaleX')
    })
  },
  onDurationChange () {
    this.duration = this.player.duration
  },
  onTimeUpdate () {
    this.time = this.player.currentTime
  },
  onStateChange () {
    this.paused = this.player.paused
    this.ended = this.player.ended
  },
  onEnded () {
    this.seekTime = 0
  },
  renderProgress () {
    const progress = this.player && this.duration ? this.player.currentTime / this.duration : 0
    this.updateSeekbar(progress)
  },
  stop () {
    this.pause()
    this.time = 0
  },
  togglePlay () {
    this.playing ? this.pause() : this.play()
  },
  toggleVolume () {
    this.muted = !this.muted
  },
  onSeekPtrDown (e) {
    document.addEventListener('pointerup', this.onSeekPtrUp.bind(this, this.playing), { once: true })
    this.pause()

    this._seekwidth = this.$refs.seekbar.clientWidth
    this.seeking = true
    this.seekTime = Math.max(0, Math.min(1, e.offsetX / this._seekwidth)) * this.duration
  },
  onSeekPtrMove (e) {
    if (!this.seeking) {
      return
    }

    this.seekTime = Math.max(0, Math.min(1, e.offsetX / this._seekwidth)) * this.duration
  },
  onSeekPtrUp (wasPlaying = false) {
    // document.removeEventListener("pointerup", this.onSeekPtrUp)
    this.seeking = false
    // this.time = this.seekTime
    wasPlaying && this.play()
  },
})

Alpine.data('PlayerControls', PlayerControls)

export default PlayerControls
