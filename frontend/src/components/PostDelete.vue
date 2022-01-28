<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="deletePost">
      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Supprimer le Post 🗑</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostDelete",

  methods: {
    deletePost() {
    // ! Adapter l'id au post en question !
      const post = {
        id: 16, // TODO Ici !
      };
      const token = this.$store.getters.getToken;
      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.axios
        .delete(`/api/post/${post.id}`, headers)
        .then((response) => {
          this.$emit("post-deleted", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
