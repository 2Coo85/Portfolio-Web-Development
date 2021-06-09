<template>
  <div id="app" class="container-fluid">
      <router-view/>
      <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
    name: 'app',
    components: {
        NavBar
    }
}
</script>

<style lang="scss">
    #app {
        background-color: lavender;
        color: blue;
    }
</style>