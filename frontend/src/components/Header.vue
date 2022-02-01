<template>
  <header>
    <ul class="nav justify-content-center align-items-center py-3 my-5 nav-bar-style">
    <!-- <img src="../assets/logos/icon.png" class="img-fluid mx-auto" alt="Logo Groupomania" width="50" /> -->
      <li class="nav-item d-flex">
        <img src="../assets/profile/default-profile.jpg" alt="mdo" class="rounded-circle" width="32" height="32" />
        <router-link class="nav-link" to="/profile">Mon Profil</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/home">Fil d'actualité</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Se Déconnecter</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar-style {
  border-bottom: 5px double darkgray;
  border-radius: 0px 0px 10px 10px;
}
</style>
