<template>
  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
    <button class="btn btn-primary text-white m-1" @click="hideModifyPost = !hideModifyPost">Modifier ➡️</button>
    <form v-if="!hideModifyPost" class="d-flex justify-content-center" @submit.prevent="updatePost">
      <input type="textarea" class="form-control form-floating m-1" placeholder="Modifié ici..." v-model="message" required />
      <label for="file" class="m-1 btn btn-primary text-white">📸</label>
      <input type="file" ref="file" name="file" id="file" @change="onSelect" class="input-file form-control form-floating mx-1" />
      <button class="btn btn-primary text-white m-1" type="submit" value="submit">Modifier</button>
    </form>
  </div>
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
        if (this.file !== null) {
          formData.append("image", this.file);
        }
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

<style scoped>
  .input-file {
    display: none;
  }
</style>
