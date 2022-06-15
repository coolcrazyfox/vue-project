<template>
  <div class="home">
    <RickAndMortyList/>
    <rick-and-morty-character/>
  </div>
</template>

<script>
import RickAndMortyList from './components/RickAndMortyList'
import RickAndMortyCharacter from './components/RickAndMortyCharacter'
export default{
  name: 'home',
  components: {RickAndMortyCharacter, RickAndMortyList}
}
</script>
