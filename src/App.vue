<template>
  <div id="app">
    <div id="nav">
<!--      <router-link to="/home">Home</router-link>-->
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebedf1;
  /*margin-top: 60px;*/
  height: 100vh;
  background:  #1f1b1b;
  border:2px solid #9f729d;
}
</style>
