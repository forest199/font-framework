import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import $ from 'jquery';

import i18n from './i18n/'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/style.css'

Vue.config.productionTip = false

Vue.prototype.$ = $

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')