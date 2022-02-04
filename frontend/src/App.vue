<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .router-link-active {
    font-weight: 900;
  }
</style>
