import Alpine from 'alpinejs'
import { gsap, ScrollTrigger } from 'gsap'
import './InsightContent.css'

const InsightContent = () => ({
  isAudioCursorVisible: true,
  scrollTrigger: null,

  init () {
    this.$nextTick(() => {
      if (this.$refs.audio) {
        const audioCursorWrapper = this.$refs.audio.querySelector('[x-ref="cursorWrapper"]')
        const audioCursor = this.$refs.audio.querySelector('[x-ref="cursor"]')

        // move cursor to bottom-right of the screen
        const magnetTween = gsap.fromTo(audioCursor, {
          y: 0
        }, {
          y: () => {
            const { height, right } = audioCursor.getBoundingClientRect()
            return window.innerHeight - height / 2 - (window.innerWidth - right) - this.$el.offsetTop
          },
          duration: 0.5,
          ease: 'quart.inOut',
          paused: true
        })

        // fade out cursor at the end
        const fadeTween = gsap.fromTo(audioCursor, {
          opacity: 1
        }, {
          opacity: 0,
          duration: 0.3,
          ease: 'css.ease',
          paused: true
        })

        this.scrollTrigger = ScrollTrigger.create({
          trigger: this.$el,
          start: 1,
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
          pin: audioCursorWrapper,
          pinSpacing: false,
          onEnter: () => magnetTween.play(),
          onLeave: () => {
            this.isAudioCursorVisible = false
            fadeTween.play()
          },
          onEnterBack: () => {
            this.isAudioCursorVisible = true
            fadeTween.reverse()
          },
          onLeaveBack: () => magnetTween.reverse(),
          onRefresh: ({ isActive }) => {
            const updateTween = (tween) => {
              const progress = tween.progress()
              return tween.invalidate().restart().progress(progress).pause()
            }

            updateTween(magnetTween)
            updateTween(fadeTween)
          }
        })
      }

      if (this.$refs.img) {
        const contentBody = this.$el.querySelector('.InsightContent__Body')
        contentBody && contentBody.prepend(this.$refs.img)
      }
    })
  },
  onAudioFocus () {
    if (!this.isAudioCursorVisible) {
      // scroll up enough to make audio cursor visible
      this.scrollTrigger && this.$scrollTo(this.scrollTrigger.end, { duration: 0 })
    }
  }
})

Alpine.data('InsightContent', InsightContent)
