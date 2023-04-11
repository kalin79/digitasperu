import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import Impetus from 'impetus'
import './PageNotFound.css'

const PageNotFound = () => ({
  zIndex: 0,
  imageProps: {
    ['@pointerdown']() {
      this.$el.classList.add('cursor-grabbing')
      gsap.set(this.$el, { zIndex: ++this.zIndex })
    },
    ['@pointerup']() {
      this.$el.classList.remove('cursor-grabbing')
    }
  },

  init () {
    const margin = 30
    const angleMax = 18

    // divide viewport into 9 cells, excluding the center one for the contents
    const vwmin = -margin
    const vwmax = window.innerWidth + margin
    const vhmin = -margin
    const vhmax = window.innerHeight + margin
    let { top, right, bottom, left } = this.$refs.contents.getBoundingClientRect()
    top += margin
    right -= margin
    bottom -= margin
    left += margin
    let cells = []
    if (this.$isMobile) {
      cells = [
        { xMin: vwmin, xMax: vwmax, yMin: vhmin, yMax: top },
        { xMin: vwmin, xMax: vwmax, yMin: bottom, yMax: vhmax },
      ]
    } else {
      cells = [
        { xMin: vwmin, xMax: left, yMin: vhmin, yMax: top },
        { xMin: left, xMax: right, yMin: vhmin, yMax: top },
        { xMin: right, xMax: vwmax, yMin: vhmin, yMax: top },
        { xMin: vwmin, xMax: left, yMin: top, yMax: bottom },
        { xMin: right, xMax: vwmax, yMin: top, yMax: bottom },
        { xMin: vwmin, xMax: left, yMin: bottom, yMax: vhmax },
        { xMin: left, xMax: right, yMin: bottom, yMax: vhmax },
        { xMin: right, xMax: vwmax, yMin: bottom, yMax: vhmax },
      ]
    }
    const preferCells = this.$isDesktop ? [1, 6] : [...cells.keys()]
    const pickCell = (index) => {
      const threshold = cells.length
      const i = index >= threshold ? gsap.utils.wrap(preferCells, index) : index
      return cells[i]
    }

    // randomize images position/rotation
    Array.from(this.$el.querySelectorAll('[x-ref="image"]'), (image, i) => {
      const img = image.querySelector('img')

      const cell = pickCell(i)

      const width = parseInt(img.getAttribute('width'))
      const height = parseInt(img.getAttribute('height'))

      const xMin = cell.xMin
      const xMax = cell.xMax - width
      const yMin = cell.yMin
      const yMax = cell.yMax - height

      const imageSet = gsap.quickSetter(image, 'css')
      const initialVars = {
        x: gsap.utils.random(xMin, xMax, 10),
        y: gsap.utils.random(yMin, yMax, 10),
        rotation: gsap.utils.random(-angleMax, angleMax),
      }

      imageSet(initialVars)

      new Impetus({
        source: image,
        friction: 0.95,
        boundX: [vwmin, vwmax - width],
        boundY: [vhmin, vhmax - height],
        initialValues: [initialVars.x, initialVars.y],
        update: (x, y) => imageSet({ x,y })
      })

      return image
    })
  }
})

Alpine.data('PageNotFound', PageNotFound)
