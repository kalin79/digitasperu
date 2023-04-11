import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './HomeNews.css'

const HomeNews = () => ({

  tags: [],
  speed: 800, // in pixels per seconds
  activeTag: '',
  cardProps: {
    '@mouseenter': 'onCardEnter',
    '@mouseleave': 'onCardLeave',
    '@focusin': 'onCardEnter',
    '@focusout': 'onCardLeave',
  },

  init() {
    Array.from(this.$el.querySelectorAll('[x-ref="card"]'), (card) => {
      this.tags.push(card.dataset.tag)
    })

    this.$nextTick(() => {
      const duration = window.innerWidth / this.speed

      Array.from(this.$el.querySelectorAll('[x-ref="banner"]'), (banner) => {
        gsap.to(banner.querySelectorAll('[x-ref="tag"]'), {
          xPercent: -100,
          duration,
          ease: 'none',
          repeat: -1,
        })
      })
    })
  },
  onCardEnter () {
    this.activeTag = this.$el.dataset.tag
  },
  onCardLeave () {
    this.activeTag = ''
  },
  isTagActive (tag = '') {
    return this.activeTag === tag
  }
})

Alpine.data('HomeNews', HomeNews)
