<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>VUE.JS App</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          About
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
export default {
  name: 'rick-and-morty-list',
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
