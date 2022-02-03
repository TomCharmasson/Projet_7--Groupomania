<template>
  <form class="d-flex justify-content-center" @submit.prevent="updatePost">
    <input type="textarea" class="form-control form-floating mx-1" placeholder="Modifié ici..." v-model="message" required />
    <button class="btn btn-primary text-white mx-1" type="submit" value="submit">Modifier</button>
  </form>
</template>

<script>
  export default {
    name: "PostModify",

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

    // TODO : Ajouter la possibilté de modifier l'image

    methods: {
      updatePost() {
        this.post.message = this.message;
        this.axios
          .put(`/api/post/${this.post.id}`, this.post)
          .then((response) => {
            this.$emit("post-modified", response.data);
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>
