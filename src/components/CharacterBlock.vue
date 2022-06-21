<template>
  <div class="character-block">
    <div class="character-block__image">
      <img :src="character.image" :alt="character.name"/>
    </div>
    <div class="character-block__info">
      <span @click="detailedInfo" class="character-name-info">
        {{ character.name }}
      </span>
      <span>
        {{ character.status }} - {{ character.species }}
      </span>
      <span>
        Last know location:
      </span>
      <span class="character-location-name-info">
         {{ character.location.name }}
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
  },
  methods: {
    detailedInfo () {
      this.$router.push({name: 'CharacterDetails', params: {id: this.character.id}})
    }
  }
  // data () {
  //   return {
  //     message: 'Title character block'
  //   }
  // }
}
</script>
