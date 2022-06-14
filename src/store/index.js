import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from './../api/index'
import {CHARACTER_BY_PAGE} from './../api/routes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: {},
    pages: 0
  },
  mutations: {
    setCharacters (state, {page, characters}) {
      state.characters[page] = characters
    },
    setPages (state, pages) {
      state.pages = pages
    }
  },
  actions: {
    fetchCharacters ({commit}, page) {
      return axiosInstance.get(CHARACTER_BY_PAGE(page))
        .then(({data}) => {
          const {info, results} = data
          commit('setCharacters', {page, characters: results})
          commit('setPages', info.pages)
        })
        .catch(err => console.log(err))
    }
  }
  // modules: {}
})
