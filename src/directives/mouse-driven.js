import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { isTouch } from '@/utilities/snif'

const mouseDriven = (el, { expression }, { evaluateLater, effect, cleanup }) => {
  if (isTouch) {
    return
  }

  const mouse = Alpine.store('mouse')
  const setPosition = gsap.quickSetter(el, 'css')

  const tick = () => {
    setPosition({
      x: mouse.lerpX,
      y: mouse.lerpY,
    })
  }

  if (expression) {
    const shouldUpdate = evaluateLater(expression)

    effect(() => {
      shouldUpdate((enable) => {
        gsap.ticker[enable ? 'add' : 'remove'](tick)
      })
    })
  } else {
    gsap.ticker.add(tick)
  }

  cleanup(() => {
    gsap.ticker.remove(tick)
  })
}

Alpine.directive('mouse-driven', mouseDriven)
