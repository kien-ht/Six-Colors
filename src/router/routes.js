// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import newsPage from '../pages/news/NewsPage.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'
import ListItem from '../components/cuc/ListItem.vue'
import List from '../components/cuc/List.vue'
import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'
import Checkout from '../components/ngoc/checkout.vue'
import Cart from '../components/ngoc/cart.vue'
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
    component: ListItem,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },
  {
    path: '/list',
    component: List,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },

  { path: '/Checkout', name: 'Checkout', component: Checkout, meta: { title: `${DOMAIN_TITLE} | Checkout` } },
  { path: '/cart', name: 'Cart', component: Cart, meta: { title: `${DOMAIN_TITLE} | Cart` } }
]
