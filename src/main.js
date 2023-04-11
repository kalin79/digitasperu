import Alpine from 'alpinejs'
import trap from '@alpinejs/trap'
import debounce from 'lodash.debounce'
import { gsap, ScrollTrigger } from 'gsap'
import { isTouch } from '@/utilities/snif'
import { fixViewportWidth } from '@/utilities/fix-viewport'
import BREAKPOINTS from '@/config/breakpoints'
import '@/directives/appear'
import '@/directives/cursor'
import '@/directives/mouse-driven'
import '@/mixins/accordions'
import '@/mixins/tabs'
import '@/store'

import '@/assets/scripts/CaseModule'
import '@/assets/styles/global.css'

const requireAll = r => r.keys().forEach(r)

// import all components
requireAll(require.context('@Components', true, /^(?!.*(?:stories.js$)).*\.js|ts$/))

// build main sprite icons
requireAll(require.context('@/assets/svg/icons', false, /\.svg$/))

// store touch information for CSS usage
document.documentElement.classList.add(isTouch ? 'touch' : 'no-touch')

// fix viewport size for mobile and MS Windows devices
window.addEventListener('resize', debounce(() => {
  fixViewportWidth()
}, 150))

Alpine.plugin(trap)

Alpine.magic('parent', (el, { Alpine }) => {
  const root = Alpine.closestRoot(el)
  const parent = root.parentElement
  if (!parent) {
    return null
  }

  return Alpine.closestRoot(parent)
})

Alpine.magic('isDesktop', () => window.matchMedia(`(min-width: ${BREAKPOINTS.lg})`).matches)
Alpine.magic('isMobile', () => !window.matchMedia(`(min-width: ${BREAKPOINTS.lg})`).matches)

Alpine.magic('isTouch', () => isTouch)

Alpine.magic('scrollTo', () => (target, settings = {}) => {
  const offsetX = parseFloat(gsap.getProperty(document.documentElement, '--scroll-offset-x', 'px')) || 0
  const offsetY = parseFloat(gsap.getProperty(document.documentElement, '--scroll-offset-y', 'px')) || 0

  const defaults = {
    container: window,
    duration: 0.8,
    ease: 'cubic.out',
    x: 0,
    offsetX,
    offsetY,
    onStart: () => {},
    onComplete: () => {},
    onAutoKill: () => {},
  }

  const params = { ...defaults, ...settings }

  return gsap.to(params.container, {
    scrollTo: {
      y: target,
      x: params.x,
      offsetY: params.offsetY,
      offsetX: params.offsetX,
      autoKill: true,
      onAutoKill: params.onAutoKill
    },
    duration: params.duration,
    ease: params.ease,
    onStart: params.onStart,
    onComplete: params.onComplete,
  })
})

if (!isTouch) {
  const mouse = Alpine.store('mouse')
  // watch mouse position
  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    // store mouse coordinates
    mouse.setPosition({ x: clientX, y: clientY })
  })
}

// watch scroll state
const scroll = Alpine.store('scroll')
ScrollTrigger.create({
  start: 0,
  onUpdate: ({ direction, progress }) => {
    scroll.setDirection(direction)
    scroll.setProgress(progress)
  }
})

// watch breakpoint change
window.matchMedia(`(min-width: ${BREAKPOINTS.lg})`).onchange = (e) => {
  window.dispatchEvent(new Event('breakpoint:change'))
}

// MUST BE KEPT ON FINAL LINE!
Alpine.start()
