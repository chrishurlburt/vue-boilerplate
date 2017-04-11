import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import store from './vuex'
import router from './router'

require('../assets/scss/main.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
