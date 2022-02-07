<template>
  <section>
    <Header />
    <div class="profile">
      <h1>Mon Profil</h1>
      <div class="py-3">
        <img :src="user.avatar" class="img-fluid rounded-circle mb-3" alt="Photo de profil" width="260" />
        <div class="container col-lg-6 mx-auto">
          <form @submit.prevent="modifyAvatar" enctype="multipart/form-data">
            <input type="file" ref="file" @change="onSelect" class="form-control form-floating mb-3" required />
            <button class="w-50 btn btn-lg btn-primary text-white" type="submit" value="submit">Uploader l'avatar</button>
          </form>
        </div>
        <h3 class="my-5 fw-bold">Pseudo : {{ user.username }}</h3>
        <p class="text-muted">Date de création : {{ getDate(user.createdAt) }}</p>
      </div>
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

<style>
  .rounded-circle {
    border-radius: 50%;
    border: black solid 2px;
  }
</style>
