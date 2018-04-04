import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Search from '@/components/Search'
import SearchName from '@/components/SearchName'
import SearchRace from '@/components/SearchRace'
import Strain from '@/components/Strain'

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
    },
    {
      path: '/searchRace/',
      name: 'SearchRace',
      component: SearchRace
    },
    {
      path: '/searchName/',
      name: 'SearchName',
      component: SearchName
    },
    {
      path: '/strain/:id',
      name: 'Strain',
      component: Strain
    }
  ]
})
