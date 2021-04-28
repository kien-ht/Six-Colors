// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import newsPage from '../pages/news/NewsPage.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'
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
    path: '/news',
    name: 'news',
    component: newsPage,
    meta: { title: `${DOMAIN_TITLE} | news` },
    props: routePropResolver
  },
  {
    path: '/profile',
    component: profilePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
    children: [
      {
        path: '',
        name: 'profile',
        component: profilePostsPage
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {
    path: '/list-item',
    name:'list-item',
    component: ListItem,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {
    path: '/list',
    component: List,
    path: '/order-tracking/:id',
    component: OrderTracking,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },

  { path: '/Checkout', name: 'Checkout', component: Checkout, meta: { title: `${DOMAIN_TITLE} | Checkout` } },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: { title: `${DOMAIN_TITLE} | cart` }
  },]
