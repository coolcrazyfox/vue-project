<template>
  <div>
    <CharacterBlock :character="character"/>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import CharacterBlock from './../components/CharacterBlock'

export default {
  name: 'rick-and-morty-character',
  components: {
    CharacterBlock
  },
  data () {
    return {
      character: null
    }
  },
  async created () {
    const {id} = this.$route.params
    if (id) {
      this.character = await this.$store.dispatch('fetchSingleCharacter', id)
    }
  },
  methods: {
    goBack () {
      this.$router.push({name: 'RickAndMortyList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h1, h2 {-->
<!--  font-weight: normal;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
