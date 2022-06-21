import Vue from 'vue'
import VueRouter from 'vue-router'
import RickAndMortyCharacter from '../views/RickAndMortyCharacter'
// import About from '../views/About'
import RickAndMortyList from '../views/RickAndMortyList'
import process from 'shelljs'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'rick-and-morty-list',
    component: RickAndMortyList
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: RickAndMortyCharacter
  }
]
process.env.BASE_URL = undefined
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'rick-and-morty-list',
//       component: RickAndMortyList
//     },
//     {
//       path: '/character',
//       name: 'rick-and-morty-character',
//       component: RickAndMortyCharacter
//     },
//     {
//       path: '/about',
//       name: 'About',
//       component: About
//     },
//     {
//       path: '/home',
//       name: 'About',
//       component: Home
//     }
//
//   ]
// })
