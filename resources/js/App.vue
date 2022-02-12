<template>
  <div id="main-wrapper">
    <router-view :brand="$store.state.brand"/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
