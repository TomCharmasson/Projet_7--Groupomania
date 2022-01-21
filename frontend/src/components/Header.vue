<template>
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 bg-dark border-bottom">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src="../assets/logos/icon-left-font-monochrome-white.svg" class="img-fluid mx-auto" alt="Logo Groupomania" width="200" />
        </a>

        <form class="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Rechercher un Coworker..." aria-label="Search" />
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/profile/default-profile.jpg" alt="mdo" class="rounded-circle" width="32" height="32" />
          </a>
          <ul class="dropdown-menu text-small dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownUser1" style="">
            <li><router-link class="dropdown-item" to="/home">Fil d'actualité</router-link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><router-link class="dropdown-item" to="/profile">Mon Profile</router-link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><router-link class="dropdown-item" to="/login">Se Deconnecter</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
