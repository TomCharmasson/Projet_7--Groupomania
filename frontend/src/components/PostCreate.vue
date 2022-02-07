<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="createPost" enctype="multipart/form-data">
      <input type="textarea" class="form-control form-floating mb-3" placeholder="Votre Post ici..." id="post" v-model="message" required />
      <input type="file" ref="file" @change="onSelect" class="form-control form-floating mb-3" />
      <button class="w-75 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Partage un Post</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "PostCreate",

    data() {
      return {
        message: "",
        file: null,
      };
    },

    methods: {
      onSelect(event) {
        this.file = event.target.files[0];
      },

      async createPost() {
        const formData = new FormData();
        formData.append("image", this.file);
        formData.append("message", this.message);
        this.axios
          .post("/api/post", formData)
          .then((response) => {
            this.$emit("post-submitted", response.data);
            this.message = "";
            this.file = null;
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>
