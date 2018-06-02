/*global Vue*/
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import dynamic from '@/views/dynamic.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    }
  ]
})
