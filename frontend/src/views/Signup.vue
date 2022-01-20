<template>
  <section>
    <div class="container col-lg-6 mx-auto">
      <img src="../assets/logos/icon-above-font.png" alt="Logo Groupomania" width="320" />

      <hr />

      <h1 class="h1 my-5 fw-bold">Inscription</h1>

      <form @submit.prevent="signUpSubmit">
        <div class="form-floating mb-3">
          <input type="username" class="form-control" id="floatingInput" placeholder="Be inspired" v-model="username" required />
          <label for="floatingInput">Pseudo</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required />
          <label for="floatingInput">Adresse Email</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required />
          <label for="floatingPassword">Mot de passe</label>
        </div>

        <button type="submit" class="w-100 btn btn-lg btn-primary mb-5 text-white">S'inscrire</button>

        <p class="text-center">Déjà membre ? <router-link to="/login">Se Connecter</router-link></p>
      </form>
      <p>Pseudo : {{ username }}</p>
      <p>Email : {{ email }}</p>
      <p>Password : {{ password }}</p>
    </div>
  </section>
</template>

<script>
import store from "../store";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      this.axios
        .post("/api/auth/signup", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const token = response.data.token;
          store.dispatch("setToken", token);
        })
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>
