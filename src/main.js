import Vue from 'vue'

import localforage from 'localforage'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { App } from './app'
import router from './router'
import store from './vuex'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

require('localforage-startswith')
/* test local db creation */
localforage.config({
  name: 'testServer'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
