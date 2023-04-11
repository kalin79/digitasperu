import Alpine from 'alpinejs'
import { isTouch } from '@/utilities/snif'

const cursor = (el, { value, modifiers, expression }, { Alpine, evaluate, cleanup }) => {
  if (isTouch) {
    return
  }

  const cursor = Alpine.store('cursor')
  const icon = value || 'move'

  let label = 'view'
  let backgroundColor = null
  let iconColor = modifiers.includes('white') ? 'white' : modifiers.includes('black') ? 'black' : null
  const withProgress = modifiers.includes('progress')

  const options = expression.startsWith('{') ? evaluate(expression) : expression
  if (typeof options === 'object') {
    ({ backgroundColor, iconColor, label } = options)
  } else if (icon === 'label') {
    label = options || 'view'
  } else {
    backgroundColor = options
  }

  const onMouseMove = (e) => {
    if (!e.defaultPrevented) {
      e.preventDefault()
      cursor.setStyle({ icon, label, backgroundColor, iconColor, withProgress })
      // hide native cursor
      // el.style.cursor = 'none'
    }
  }
  const onMouseLeave = () => {
    cursor.clear()
    // restore native cursor
    // el.style.cursor = ''
  }

  el.addEventListener('mousemove', onMouseMove)
  el.addEventListener('mouseleave', onMouseLeave)

  cleanup(() => {
    el.removeEventListener('mousemove', onMouseMove)
    el.removeEventListener('mouseleave', onMouseLeave)
  })
}

Alpine.directive('cursor', cursor)
