<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="onSubmit">
      <h1 class="h3 my-5 fw-bold">Share a Post</h1>
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Bla Bla ici..." id="post" v-model="post" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Share your Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Post",

  data() {
    return {
      post: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.post === "") {
        alert("Un post vide ? Vraiment ?");
        return;
      }

      let ShareAPost = {
        post: this.post,
      };
      this.$emit("post-submitted", ShareAPost);

      // Reset the field
      this.post = "";
    },
  },
};
</script>
