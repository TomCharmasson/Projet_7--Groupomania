<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="createPost">
      <h1 class="h3 my-5 fw-bold">Share a Post</h1>
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Bla Bla ici..." id="post" v-model="post" required />

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
      const token = this.$store.getters.getToken;
      const header = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.axios
      .post("/api/post", post, header)
      .then((response) => {
        this.$emit("post-submitted", response.data); 
        this.post = "";
      })
      .catch((error) => console.log(error));
    },
  },
};
</script>
