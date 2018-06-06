import Vue from 'vue'
/*global Vue*/
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import dynamic from '@/views/dynamic.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'dynamic',
      component: dynamic
    }
  ]
})
