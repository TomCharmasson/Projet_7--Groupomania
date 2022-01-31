<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="updateComment">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Commentaire modifié ici..." id="comment" v-model="comment" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Modifier le Commentaire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentModify",
  
  data() {
    return {
      comment: "",
    };
  },

  props: {
    commentParent: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    updateComment() {
      let commentId = this.commentParent.id;
      let comment = {
        message: this.comment,
      };
      this.axios
        .put(`/api/comment/${commentId}`, comment)
        .then((response) => {
          this.$emit("comment-modified", response.data);
          this.comment = "";
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
