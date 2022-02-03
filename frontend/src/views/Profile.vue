<template>
  <Header />
  <div class="profile">
    <div class="py-3" v-for="(userInfo, index) in user" :key="index">
      <img src="../assets/profile/default-profile.jpg" class="rounded-circle mb-3" alt="Photo de profil" width="260" />
      <div>
        <label for="avatar">Changer l'avatar : </label>
      </div>
      <div>
        <input type="file" id="avatar" name="avatar" />
      </div>
      <h1 class="h1 my-5 fw-bold">Pseudo : {{ userInfo.username }}</h1>
      <p class="text-muted">Email: {{ userInfo.email }}</p>
      <p class="text-muted">Date de création: {{ userInfo.createdAt }}</p>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  export default {
    name: "Profile",

    components: {
      Header,
      Footer,
    },

    data() {
      return {
        user: [],
      };
    },

    mounted() {
      this.axios
        .get(`/api/auth/user/me`)
        .then((response) => (this.user = response.data))
        .catch((error) => console.log(error));
    },
  };
</script>

<style>
  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
