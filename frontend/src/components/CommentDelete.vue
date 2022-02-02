<template>
  <form @submit.prevent="deleteComment">
    <button class="btn btn-sm btn-secondary text-white" type="submit" value="submit">❌</button>
  </form>
</template>

<script>
  export default {
    name: "CommentDelete",

    props: {
      commentParent: {
        type: Object,
        required: true,
      },
    },

    methods: {
      deleteComment() {
        this.axios
          .delete(`/api/comment/${this.commentParent.id}`)
          .then((response) => {
            this.$emit("comment-deleted", response.data);
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>

<style></style>
