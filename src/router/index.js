import Vue from 'vue'
import Router from 'vue-router'
import Rick from '@/components/RickAndMortyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rick-and-morty-list',
      component: Rick
    }
  ]
})
