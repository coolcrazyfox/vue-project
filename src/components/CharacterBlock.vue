<template>
  <div class="character-block">
    <div class="character-block__image">
      <img :src="character.image" :alt="character.name"/>
    </div>
    <div>
      <span>
        {{character.name}}
      </span>
      <span>
        {{character.status}} - {{character.species}}
      </span>
      <span>
        Last know location: {{character.location.name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'character-block',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
  // data () {
  //   return {
  //     message: 'Title character block'
  //   }
  // }
}
</script>
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

<!--span {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
