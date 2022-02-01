<template>
    <form @submit.prevent="deletePost">
      <button class="btn btn-secondary text-white" type="submit" value="submit">❌</button>
    </form>
</template>

<script>
export default {
  name: "PostDelete",

  props: {
    postParent: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    deletePost() {
      let postId = this.postParent.id;
      this.axios
        .delete(`/api/post/${postId}`)
        .then((response) => {
          this.$emit("post-deleted", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
