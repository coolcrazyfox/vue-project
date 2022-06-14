<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>VUE.JS App</h2>
    <character-block @initialized="handler"/>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          About
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import CharacterBlock from './CharacterBlock'

export default {
  name: 'rick-and-morty-list',
  components: {
    CharacterBlock
  },
  created () {
    this.$store.dispatch('fetchCharacters', 1)
  },
  data () {
    return {
      msg: 'Rick and Morty'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
