<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="updatePost">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Post ici..." id="post" v-model="post.message" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Modifier le Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostModify",
  
  data() {
    return {
      post: "",
    };
  },

  created() {
    this.post = this.postParent;
  },

  props: {
    postParent: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    updatePost() {
      this.axios
        .put(`/api/post/${this.post.id}`, this.post)
        .then((response) => {
          this.$emit("post-modified", response.data);
          this.post = "";
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
