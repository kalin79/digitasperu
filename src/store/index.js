import Alpine from 'alpinejs'

import App from './app'
import Cursor from './cursor'
import Filters from './filters'
import Menu from './menu'
import Mouse from './mouse'
import Scroll from './scroll'
import Search from './search'

// register stores
Alpine.store('app', App)
Alpine.store('cursor', Cursor)
Alpine.store('filters', Filters)
Alpine.store('menu', Menu)
Alpine.store('mouse', Mouse)
Alpine.store('scroll', Scroll)
Alpine.store('search', Search)
