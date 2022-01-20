<template>
  <div id="nav">
    <router-link to="/login">Se Connecter</router-link> | <router-link to="/signup">S'inscrire</router-link> | <router-link to="/">Home</router-link>
  </div>
  <router-view></router-view>
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
