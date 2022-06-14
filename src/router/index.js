import Vue from 'vue'
import Router from 'vue-router'
import RickAndMortyCharacter from '../components/RickAndMortyCharacter'
import RickAndMortyList from '../components/RickAndMortyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rick-and-morty-list',
      component: RickAndMortyList
    },
    {
      path: '/character',
      name: 'rick-and-morty-character',
      component: RickAndMortyCharacter
    }
  ]
})
