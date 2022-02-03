<template>
  <Header />
  <div class="profile">
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(userInfo, index) in user" :key="index">
        <img src="../assets/profile/default-profile.jpg" alt="Photo de profil" width="260" />{{ userInfo.avatar }}
        <h1 class="h1 my-5 fw-bold">Pseudo : {{ userInfo.username }}</h1>
        <p class="text-muted">Email: {{ userInfo.email }}</p>
        <p class="text-muted">Date de création: {{ userInfo.createdAt }}</p>
      </li>
    </ul>
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

<style></style>
