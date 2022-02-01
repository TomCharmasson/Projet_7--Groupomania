<template>
    <form class="d-flex justify-content-between" @submit.prevent="updateComment">
      <input type="textarea" class="form-control form-control-sm form-floating mx-1" placeholder="Modif. ici..." v-model="comment" required />
      <button class="btn btn-sm btn-primary text-white mx-1" type="submit" value="submit">Modifier</button>
    </form>
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
