<template>
  <nav class="navbar navbar-expand-xl navbar-light bg-light mb-5 nav-bar-style">
    <div class="container-fluid">
      <div class="nav-item">
        <img src="../assets/logos/icon-left-font.png" class="img-fluid navbar-brand" alt="Logo Groupomania" width="240" />
      </div>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-navbar" aria-controls="my-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="my-navbar">
        <ul class="navbar-nav ms-auto mb-2 mb-xl-0 d-flex align-items-center">
          <li class="nav-item p-1">
            <img :src="user.avatar" alt="Image de profile" class="rounded-circle" width="40" height="40" />
          </li>
          <li class="nav-item px-1">
            <router-link class="nav-link" to="/profile">Mon Profil</router-link>
          </li>
          <li class="nav-item px-1">
            <router-link class="nav-link" to="/home">Fil d'actualité</router-link>
          </li>
          <li class="nav-item px-1">
            <router-link class="nav-link" @click="disconnect" to="/login">Se Déconnecter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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

    methods: {
      disconnect() {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
        this.$router.push({ name: "Login" });
      },
      // TODO: Method to upadte the avatar
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
    -webkit-box-shadow: 0px 1px 10px 0px rgb(100, 100, 100);
    box-shadow: 0px 1px 10px 0px rgb(100, 100, 100);
  }

  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
