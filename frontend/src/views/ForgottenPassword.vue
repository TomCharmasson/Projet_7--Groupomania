<template>
  <section>
    <div class="container col-lg-6 mx-auto">
      <form>
        <img src="../assets/logos/icon-above-font.png" alt="" width="320" />

        <hr />

        <h1 class="h1 my-5 fw-bold">Mot de passe oublié 😩</h1>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required/>
          <label for="floatingInput">Email</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit">Envoyer</button>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ForgottenPassword",
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss">
</style>
