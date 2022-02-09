<template>
  <form class="d-flex justify-content-center" @submit.prevent="createComment">
    <input type="textarea" class="form-control form-floating mx-1" placeholder="Ajouter un commentaire" v-model="message" required />
    <button class="btn btn-primary text-white mx-1" type="submit" value="submit">Ajouter un commentaire</button>
  </form>
</template>

<script>
  export default {
    name: "CommentCreate",

    data() {
      return {
        post: null,
        message: "",
      };
    },

    props: {
      postParent: {
        type: Object,
        required: true,
      },
    },

    created() {
      this.post = this.postParent;
    },

    methods: {
      createComment() {
        this.axios
          .post("/api/comment", {
            message: this.message,
            id: this.post.id,
          })
          .then((response) => {
            this.$emit("comment-submitted", response.data);
            this.message = "";
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>
