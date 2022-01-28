<template>
  <Header />
  <section class="profile">
    <div class="profile-info">
      <img src="../assets/profile/default-profile.jpg" alt="Photo de profil" width="260" />
      <h1 class="h1 my-5 fw-bold">Pseudo : {{ user.username }}</h1>
      <p class="text-muted">Email: {{ user.email }}</p>
    </div>
  </section>
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
      user: {},
    };
  },
  methods: {
    getAUser() {
      const token = this.$store.getters.getToken;
      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.axios
        .get("/api/users", headers)
        .then((response) => (this.user = response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getAUser();
    console.log(this.user);
  },
};
</script>

<style></style>
