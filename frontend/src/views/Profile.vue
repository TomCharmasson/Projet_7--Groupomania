<template>
  <section>
    <Header />
    <div class="container col-lg-6 mx-auto mb-5">
      <h1>Mon Profil</h1>
      <img :src="user.avatar" class="img-fluid rounded-circle mb-3" alt="Photo de profil" width="260" />
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
        <form @submit.prevent="modifyAvatar" enctype="multipart/form-data">
          <input type="file" ref="file" name="file" id="file" @change="onSelect" class="input-file form-control form-floating mb-3" required />
          <label for="file" class="m-1 btn btn btn-primary text-white">📸</label>
          <button class="m-1 btn btn btn-primary text-white" type="submit" value="submit">Uploader l'avatar</button>
        </form>
      </div>
      <h3 class="fw-bold">Pseudo : {{ user.username }}</h3>
      <p class="text-muted">Date de création : {{ getDate(user.createdAt) }}</p>
    </div>
    <Footer />
  </section>
</template>

<script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  import moment from "moment";

  export default {
    name: "ProfileMe",

    components: {
      Header,
      Footer,
    },

    data() {
      return {
        user: null,
        file: null,
      };
    },

    created() {
      this.getProfile();
    },

    methods: {
      getProfile() {
        this.axios
          .get(`/api/auth/user/me`)
          .then((response) => (this.user = response.data.user))
          .catch((error) => console.log(error));
      },

      onSelect(event) {
        this.file = event.target.files[0];
      },

      modifyAvatar() {
        const formData = new FormData();
        formData.append("image", this.file);
        this.axios
          .put(`/api/auth/user/me`, formData)
          .then((response) => {
            this.$store.dispatch("setUser", response.data.user);
            this.file = null;
            this.user = response.data.user;
          })
          .catch((error) => console.log(error));
      },

      getDate(date) {
        return moment(date).locale("fr").format("llll");
      },
    },
  };
</script>

<style scoped>
  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }

  .input-file {
    display: none;
  }
</style>
