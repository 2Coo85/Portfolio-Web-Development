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
    html {
        background-image: url('img/waterfall-cave.jpg');
    }
</style>