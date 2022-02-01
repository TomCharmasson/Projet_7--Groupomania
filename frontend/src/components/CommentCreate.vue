<template>
    <form class="d-flex justify-content-center" @submit.prevent="createComment">
      <input type="textarea" class="form-control form-floating mx-1" placeholder="Ajouté un commentaire" v-model="comment" required />
      <button class="btn btn-primary text-white mx-1" type="submit" value="submit">Ajouté un commentaire</button>
    </form>
</template>

<script>
export default {
  name: "CommentCreate",

  data() {
    return {
      comment: "",
    };
  },

  props: {
    postParent: {
      type: Object,
      required: true,
    },
  },

  methods: {
    createComment() {
      const comment = {
        message: this.comment,
        id: this.postParent.id,
      };
      this.axios
        .post("/api/comment", comment)
        .then((response) => {
          this.$emit("comment-submitted", response.data);
          this.comment = "";
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
