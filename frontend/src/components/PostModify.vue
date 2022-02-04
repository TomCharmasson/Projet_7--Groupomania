<template>
  <form class="d-flex justify-content-center" @submit.prevent="updatePost">
    <input type="textarea" class="form-control form-floating mx-1" placeholder="Modifié ici..." v-model="message" required />
    <input type="file" ref="file" @change="onSelect" class="form-control form-floating mx-1" />
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
        file: null,
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
      onSelect(event) {
        this.file = event.target.files[0];
      },

      async updatePost() {
        const formData = new FormData();
        formData.append("image", this.file);
        formData.append("message", this.message);
        this.axios
          .put(`/api/post/${this.post.id}`, formData)
          .then((response) => {
            this.$emit("post-modified", response.data);
            this.message = "";
            this.file = null;
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>
