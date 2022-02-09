<template>
  <div v-if="isCommentOwner" class="d-grid gap-2 d-md-flex justify-content-md-center">
    <form @submit.prevent="deleteComment" class="d-flex justify-content-between">
      <button class="btn btn-sm btn-secondary text-white m-1" type="submit" value="submit">❌</button>
    </form>
  </div>
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

    computed: {
      isCommentOwner() {
        return this.commentParent.UserId === this.$store.getters.getUser.id;
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
