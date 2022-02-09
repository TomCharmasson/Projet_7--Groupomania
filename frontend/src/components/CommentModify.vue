<template>
  <div v-if="isCommentOwner" class="d-grid gap-2 d-md-flex justify-content-md-center">
    <form v-if="!hideModifyComment" class="d-flex justify-content-between" @submit.prevent="updateComment">
      <input type="textarea" class="form-control form-control-sm form-floating m-1" :placeholder="comment.message" v-model="message" required />
      <button class="btn btn-sm btn-primary text-white m-1" type="submit" value="submit">Modifier</button>
    </form>
    <button class="btn btn-sm btn-primary text-white m-1" @click="hideModifyComment = !hideModifyComment">Modifier...</button>
  </div>
</template>

<script>
  export default {
    name: "CommentModify",

    data() {
      return {
        comment: null,
        message: "",
        hideModifyComment: true,
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

    computed: {
      isCommentOwner() {
        return this.comment.UserId === this.$store.getters.getUser.id;
      },
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
      hideCommentModify() {
        this.hideModifyComment = true;
      },
    },
  };
</script>

<style></style>
