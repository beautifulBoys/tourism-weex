/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('@/route/index.js')
const App = require('@/App.vue')
/* eslint-disable no-new */
new Vue(
  Vue.util.extend({
    el: '#app',
    router
  }, App)
)
router.push('/')
