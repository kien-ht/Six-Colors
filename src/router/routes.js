// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import newsPage from '../pages/news/NewsPage.vue'
import login from '@/components/dung/Login.vue'
import Register from '@/components/dung/Register.vue'
import notFoundPage from '../pages/NotFound.vue'
import UpdateUser from '@/components/dung/UpdateUser.vue'

import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

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
    component: UpdateUser,
    meta: { title: `${DOMAIN_TITLE} | profile` },
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
  }
]
