<template>
  <form class="d-flex justify-content-between" @submit.prevent="updateComment">
    <input type="textarea" class="form-control form-control-sm form-floating mx-1" placeholder="Modif. ici..." v-model="message" required />
    <button class="btn btn-sm btn-primary text-white mx-1" type="submit" value="submit">Modifier</button>
  </form>
</template>

<script>
  export default {
    name: "CommentModify",

    data() {
      return {
        comment: null,
        message: "",
      };
    },

    props: {
      commentParent: {
        type: Object,
        required: true,
      },
    },

    created() {
      this.comment = this.commentParent;
    },

    methods: {
      updateComment() {
        this.comment.message = this.message;
        this.axios
          .put(`/api/comment/${this.comment.id}`, this.comment)
          .then((response) => {
            this.$emit("comment-modified", response.data);
            this.message = "";
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>

<style></style>
