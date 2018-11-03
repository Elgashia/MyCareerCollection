import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { App } from './app'
import router from './router'
import store from './vuex'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueLocalStorage)

/* test local db creation */
Vue.use(VueLocalStorage, {
  name: 'test',
  version: 1.0,
  bind: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
