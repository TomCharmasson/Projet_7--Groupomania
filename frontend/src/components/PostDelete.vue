<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="deletePost">
      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Supprimer le Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostDelete",

  data() {
    return {
      post: "",
    };
  },
  methods: {
    deletePost() {
      const token = this.$store.getters.getToken; // get the token from store
      const headers = {
        headers: { Authorization: `Bearer ${token}` }, // add the token to the headers
      };
      const id = this.$route.params.id;
      this.axios
        .delete("/api/post/" + id, headers)
        .then((response) => {
        this.$emit("post-deleted", response.data); // On envoie le post à la vue parente
        this.post = "";
      });
    },
  },
};
</script>

<style></style>
