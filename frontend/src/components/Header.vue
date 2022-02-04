<template>
  <header>
    <!-- <img src="../assets/logos/icon-left-font.png" class="img-fluid mx-auto mt-3" alt="Logo Groupomania" width="400" /> -->
    <ul class="nav justify-content-center align-items-center py-3 mb-5 nav-bar-style">
      <li class="nav-item px-1">
        <img :src="user.avatar" alt="Image de profile" class="rounded-circle" width="40" height="40" />
      </li>
      <li class="nav-item px-1">
        <router-link class="nav-link" to="/profile">Mon Profil</router-link>
      </li>
      <li class="nav-item px-1">
        <router-link class="nav-link" to="/home">Fil d'actualité</router-link>
      </li>
      <li class="nav-item px-1">
        <router-link class="nav-link" to="/login">Se Déconnecter</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",

    data() {
      return {
        user: null,
      };
    },

    created() {
      this.user = this.$store.getters.getUser;
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav {
    padding: 30px;
  }

  #nav a {
    color: rgb(100, 100, 100);
    text-decoration: none;
    border-radius: 4px;
  }

  #nav a.router-link-active {
    color: rgb(255, 255, 255);
    background-color: rgb(100, 100, 100);
  }

  .nav-bar-style {
    border-bottom: 2px solid black;
    border-radius: 0px 0px 10px 10px;
  }

  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
