// import innerHeight from 'ios-inner-height'

/**
 * The trick to viewport units on mobile.
 * @see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 * @author Louis Hoebregts
 */
const fixViewportHeight = (fixIOS = true) => {
  // set CSS var --vh to fix viewport-height unit on mobile
  const vh = ((fixIOS ? innerHeight() : window.innerHeight) * 0.01)
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

/**
 * Compute viewport width without scrollbar.
 * @author Julien Vasseur <julien@poigneedemainvirile.com>
 */
const fixViewportWidth = () => {
  const vw = document.documentElement.clientWidth / 100
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

const fixViewport = (fixIOS = true) => {
  // fixViewportHeight(fixIOS)
  fixViewportWidth()
}

export {
  fixViewport as default,
  fixViewport,
  // fixViewportHeight,
  fixViewportWidth
}
