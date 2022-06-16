<template>
  <div class="character-block">
    <div class="character-block__image">
      <img :src="character.image" :alt="character.name"/>
    </div>
    <div class="character-block__info">
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
<style scoped>
.character-block {
  display: flex;
  flex-direction: row;
  width: 24%;
  margin: 20px;
}
.character-block__image{
   width: 250px;
   height: auto;
 }
.character-block__info{
   display: flex;
   flex-direction: column;
 }
</style>
