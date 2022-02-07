<template>
  <header>
    <ul class="nav justify-content-between align-items-center p-3 mb-5 nav-bar-style">
      <div>
        <img src="../assets/logos/icon-left-font.png" alt="Logo Groupomania" width="300" />
      </div>
      <div class="d-flex align-items-center">
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
      </div>
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
    -webkit-box-shadow: 0px 5px 10px 0px #ffd7d7;
    box-shadow: 0px 5px 10px 0px #ffd7d7;
  }

  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
