import Checkout from './checkout.vue'
import Cart from './cart.vue'
import Error from './error.vue'
import Home from './home.vue'
// import Item from '../components/Item.vue'
const routers = [{ path: '/', name: 'Home', component: Home }, { path: '/Checkout', name: 'Checkout', component: Checkout }, { path: '/cart', name: 'about', component: Cart }, { path: '/:matchpatch(.*)*', name: 'error', component: Error }
]

export default routers
