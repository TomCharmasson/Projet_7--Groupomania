<template>
  <section>
    <div class="container col-lg-6 mx-auto">
      <img src="../assets/logos/icon-above-font.png" alt="" width="320" />

      <hr />

      <h1 class="h1 my-5 fw-bold">Connexion</h1>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required />
        <label for="floatingInput">Email</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required />
        <label for="floatingPassword">Mot de passe</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="button" @click="login">Se Connecter</button>

      <div class="form-group d-flex justify-content-evenly mb-3">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
          <label class="form-check-label" for="flexSwitchCheckChecked">Se souvenir de moi</label>
        </div>
        <div>
          <router-link to="/forgotten-password">Mot de passe oublié</router-link>
        </div>
      </div>

      <p class="text-center">Pas encore membre ? <router-link to="/signup">S'inscrire</router-link></p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        remindme: true,
      };
    },
    methods: {
      login() {
        this.axios
          .post("/api/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const token = response.data.token;
            this.$store.dispatch("setToken", token);
            this.$store.dispatch("setUser", response.data.user);
          })
          .then(async () => {
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>

<style lang="scss"></style>
