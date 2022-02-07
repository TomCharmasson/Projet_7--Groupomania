<template>
  <button class="btn btn-primary text-white mx-1" @click="hideModifyPost = !hideModifyPost">Modifier ➡️</button>
  <form v-if="!hideModifyPost" class="d-flex justify-content-center" @submit.prevent="updatePost">
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
        hideModifyPost: true,
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
      hidePostModify() {
        this.hideModifyPost = true;
        this.$emit("hide-modify-post");
      },
    },
  };
</script>
