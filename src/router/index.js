import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/search/',
      name: 'Search',
      component: Search
    }
  ]
})
