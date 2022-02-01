<template>
    <form class="d-flex justify-content-center" @submit.prevent="updatePost">
      <input type="textarea" class="form-control form-floating mx-1" placeholder="Modifié ici..." v-model="post" required />
      <button class="btn btn-primary text-white mx-1" type="submit" value="submit">Modifier</button>
    </form>
</template>

<script>
export default {
  name: "PostModify",
  
  data() {
    return {
      post: "",
    };
  },

  props: {
    postParent: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    updatePost() {
      let postId = this.postParent.id;
      let post = {
        message: this.post,
      };
      this.axios
        .put(`/api/post/${postId}`, post)
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
