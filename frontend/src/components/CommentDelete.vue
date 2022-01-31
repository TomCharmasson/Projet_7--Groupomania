<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="deleteComment">
      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Supprimer le Commentaire</button>
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
  
  methods: {
    deleteComment() {
      let commentId = this.commentParent.id;
      this.axios
        .delete(`/api/comment/${commentId}`)
        .then((response) => {
          this.$emit("comment-deleted", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
