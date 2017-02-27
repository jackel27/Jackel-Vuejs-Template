import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import routes from './routes'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(Router)
Vue.use(VueResource)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
