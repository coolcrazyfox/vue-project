<template>
  <div class="home">
<!--        <h1>{{ msg }}</h1>-->
    VUE.JS App
    <div class="characters-list">
      <character-block v-for="character in characters"  :key="character.id"  :character="character" />
      <!--    v-for === map-->
    </div>
    <!--    {{ firstCharacter }}-->
  </div>
</template>

<script>
import CharacterBlock from './../components/CharacterBlock'

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock
  },
  data () {
    return {
      currentPage: 1,
      msg: 'Rick and Morty'
    }
  },
  created () {
    this.$store.dispatch('fetchCharacters', this.currentPage)
  },
  computed: {
    characters () {
      return this.$store.getters['getCharactersByPage'](this.currentPage)
    },
    firstCharacter () {
      return this.$store.getters['getCharacterById']({id: 1, page: 1})
    }
  }
}
</script>
