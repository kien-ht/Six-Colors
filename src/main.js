import Vue from 'vue'

import AppLayout from './layout/index.vue'
// import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './mixins'
import './plugins'
import './thirdParty'

import './scss/style.scss'
import './assets/fonts/bebasneue.css'

import { BootstrapVue } from 'bootstrap-vue'
import VueSwal from 'vue-swal'
 
Vue.use(VueSwal)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  router,
  store,
  mounted () {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },

  beforeDestroy () {
    window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },
  render: h => h(AppLayout)
}).$mount('#app')
