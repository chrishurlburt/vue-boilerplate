import Vue from 'vue'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'
import App from './App'
import store from './vuex'

require('../assets/scss/main.scss')

Vue.use(VueResource)
// Vue.use(VueRouter)

// const router = new VueRouter()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App),
})
