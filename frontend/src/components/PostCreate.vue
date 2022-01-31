<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="createPost">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Votre Post ici..." id="post" v-model="post" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Partage un Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostCreate",

  data() {
    return {
      post: "",
    };
  },

  methods: {
    createPost() {
      const post = {
        message: this.post,
      };
      this.axios
        .post("/api/post", post)
        .then((response) => {
          this.$emit("post-submitted", response.data);
          this.post = "";
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
