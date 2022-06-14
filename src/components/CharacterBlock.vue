<template>
  <div>
    Block info:
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'character-block',
  data () {
    return {
      message: 'Title character block'
    }
  },
  created () {
    this.$emit('initialized')
  }
}
</script>
