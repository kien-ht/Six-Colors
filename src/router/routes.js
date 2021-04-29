// profile
// import profilePage from '../pages/profile/ProfilePage.vue'
// import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import newsPage from '../pages/news/NewsPage.vue'
import login from '@/components/dung/Login.vue'
import Register from '@/components/dung/Register.vue'
import notFoundPage from '../pages/NotFound.vue'
import UitemDetail from '@/components/item/UitemDetail'
import UpdateUser from '@/components/dung/UpdateUser.vue'
import CartPage from '../pages/cart'
import List from '@/components/cuc/List.vue'
import ListItem from '../components/cuc/ListItem.vue'
import OrderTracking from '../components/hang/OrderTracking.vue'
import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'
import Checkout from '../components/ngoc/checkout.vue'
export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/uitem-detail/:id',
    props: true,
    name: 'UitemDetail',
    component: UitemDetail,
    meta: { title: `${DOMAIN_TITLE} | UitemDetail` }
  },
  {
    path: '/news',
    name: 'news',
    component: newsPage,
    meta: { title: `${DOMAIN_TITLE} | news` },
    props: routePropResolver
  },
  {
    path: '/profile',
    component: UpdateUser,
    meta: { title: `${DOMAIN_TITLE} | profile` }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: `${DOMAIN_TITLE} | register` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {
    path: '/list-item',
    name: 'list-item',
    component: ListItem,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {

    component: List,
    path: '/order-tracking/:id',
    // eslint-disable-next-line no-dupe-keys
    component: OrderTracking,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },

  { path: '/Checkout', name: 'Checkout', component: Checkout, meta: { title: `${DOMAIN_TITLE} | Checkout` } },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: { title: `${DOMAIN_TITLE} | cart` }
  }]
