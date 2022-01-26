<template>
<div class="container col-lg-6 mx-auto">
    <form @submit.prevent="createComment">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Ajouté un commentaire" id="post" v-model="post" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Ajouté un commentaire</button>
      <p></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    createComment() {
      const comment = {
        message: this.comment,
      };
      const token = this.$store.getters.getToken;
      const header = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.axios
      .post("/api/comment", comment, header)
      .then((response) => {
        this.$emit("comment-submitted", response.data); // On envoie le post à la vue parente
        this.post = "";
      });
    },
  },
};
</script>

<style></style>
