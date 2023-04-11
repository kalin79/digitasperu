import { gsap } from 'gsap/index.js'
import CustomEase from 'gsap/CustomEase.js'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
// import Flip from 'gsap/Flip.js'
import ScrollToPlugin from 'gsap/ScrollToPlugin.js'
import SplitText from 'gsap/SplitText.js'

const plugins = [
  CustomEase,
  // Flip,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
]

const gsapWithPlugins = gsap.registerPlugin.apply(gsap, plugins) || gsap // to protect from tree shaking

// CustomEase.create('material.standard', '.4,0,.2,1')
CustomEase.create('css.ease', '.25,.1,.25,1')
CustomEase.create('css.inOut', '.42,0,.58,1')
// CustomEase.create('css.in', '.42,0,1,1')
// CustomEase.create('css.out', '0,0,.58,1')

// Register Robert Penner's Easing Functions from AE Flow plugin (slightly different than GSAP ones)
// CustomEase.create('quad.inOut', '0.48, 0.04, 0.52, 0.96')
// CustomEase.create('quad.in', '0.26, 0.00, 0.60, 0.20')
// CustomEase.create('quad.out', '0.40, 0.80, 0.74, 1.00')

// CustomEase.create('cubic.inOut', '0.66, 0.00, 0.34, 1.00')
// CustomEase.create('cubic.in', '0.40, 0.00, 0.68, 0.06')
// CustomEase.create('cubic.out', '0.32, 0.94, 0.60, 1.00')

CustomEase.create('quart.inOut', '0.76, 0.00, 0.24, 1.00')
// CustomEase.create('quart.in', '0.52, 0.00, 0.74, 0.00')
// CustomEase.create('quart.out', '0.26, 1.00, 0.48, 1.00')

// CustomEase.create('quint.inOut', '0.84, 0.00, 0.16, 1.00')
// CustomEase.create('quint.in', '0.64, 0.00, 0.78, 0.00')
// CustomEase.create('quint.out', '0.22, 1.00, 0.36, 1.00')

// CustomEase.create('expo.inOut', '0.90, 0.00, 0.10, 1.00')
// CustomEase.create('expo.in', '0.66, 0.00, 0.86, 0.00')
// CustomEase.create('expo.out', '0.14, 1.00, 0.34, 1.00')

// CustomEase.create('circ.inOut', '0.88, 0.14, 0.12, 0.86')
// CustomEase.create('circ.in', '0.54, 0.00, 1.00, 0.44')
// CustomEase.create('circ.out', '0.00, 0.56, 0.46, 1.00')

// CustomEase.create('back.inOut', '0.68, -0.55, 0.27, 1.55')
// CustomEase.create('back.in', '0.60, -0.28, 0.73, 0.04')
// CustomEase.create('back.out', '0.17, 0.89, 0.32, 1.27')

gsap.defaults({ ease: 'linear' })
gsap.config({ nullTargetWarn: process.env.NODE_ENV === 'development' })

export {
  gsapWithPlugins as gsap,
  gsapWithPlugins as default,
  CustomEase,
  // Flip,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
}
