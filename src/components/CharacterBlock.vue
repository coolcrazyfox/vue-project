<template>
  <div>
    <div>
      <img :src="character.image" alt=""/>
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

    <!--    {{ message }}-->
  </div>
</template>
<script>
export default {
  name: 'character-block',
  props: {
    character: {
      type: Object,
      require: true,
    }
  }
  data () {
    return {
      // message: 'Title character block'
    }
  }
}
</script>
