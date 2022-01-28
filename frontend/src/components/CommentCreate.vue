<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="createComment">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Ajouté un commentaire" v-model="comment" required />

      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Ajouté un commentaire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentCreate",

  data() {
    return {
      comment: "",
    };
  },

  created() {
    this.comment = this.postParent;
    console.log(this.comment);
  },

  props: {
    postParent: {
      type: Object,
    },
  },

  methods: {
    createComment() {
      const comment = {
        message: this.comment,
      };
      this.axios
      .post("/api/comment", comment)
      .then((response) => {
        this.$emit("comment-submitted", response.data); 
        this.comment = "";
      })
      .catch( error => console.log(error));
    },
  },
};
</script>

<style></style>
