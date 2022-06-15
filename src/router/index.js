import Vue from 'vue'
import Router from 'vue-router'
import RickAndMortyCharacter from '../components/RickAndMortyCharacter'
import RickAndMortyList from '../components/RickAndMortyList'
import About from '../About'
import Home from '../Home'

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
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'About',
      component: Home
    }

  ]
})
