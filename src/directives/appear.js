import Alpine from 'alpinejs'
import { gsap, ScrollTrigger, SplitText } from 'gsap'

const appear = (el, { value, expression }, { evaluateLater, effect, cleanup }) => {
  const scrollTriggered = !expression
  const toggleClass = 'is-visible'
  const isImage = value === 'image'
  const isTitle = value === 'title'

  if (!scrollTriggered && isImage) {
    return
  }

  const vars = {
    trigger: el,
    // once: true,
    // toggleClass,
    toggleActions: 'play none none none',
    start: 'center bottom',
    onEnter: () => {
      el.classList.add(toggleClass)
    }
  }

  let splitTitle = null
  let splitWrap = null

  if (isTitle) {
    if (!el.classList.contains('is-split')) {
      // split twice for lines double wrapping
      splitTitle = new SplitText(el, { type: 'lines', reduceWhiteSpace: false, linesClass: 'Line' })
      splitWrap = new SplitText(el, { type: 'lines', reduceWhiteSpace: false, linesClass: 'Line__Wrapper' })

      el.classList.add('is-split')

      if (el.classList.contains('copyright')) {
        el.classList.remove('copyright')
        splitTitle.lines[splitTitle.lines.length - 1].classList.add('copyright')
      }
    }

    vars.animation = gsap.from(el.querySelectorAll('.Line'), {
      yPercent: 100,
      rotation: 5,
      force3D: true,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.2,
      paused: true
    })
  }

  let scrollTrigger = null
  if (scrollTriggered) {
    scrollTrigger = ScrollTrigger.create(vars)
  } else {
    const shouldAppear = evaluateLater(expression)

    effect(() => {
      shouldAppear((isVisible) => {
        if (!isVisible) {
          return
        }

        if (isImage) {
          el.classList.add(toggleClass)
        } else if (isTitle) {
          vars.animation && vars.animation.play()
        }
      })
    })
  }

  cleanup(() => {
    scrollTrigger && scrollTrigger.kill(false)
    splitTitle && splitTitle.revert()
    splitWrap && splitWrap.revert()
  })
}

Alpine.directive('appear', appear)
