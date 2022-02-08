<template>
  <div class="container col-lg-6 mx-auto mb-5 p-3">
    <form @submit.prevent="createPost" enctype="multipart/form-data">
      <div>
        <input type="textarea" class="form-control form-floating mb-3" placeholder="Votre Post ici..." id="post" v-model="message" required />
        <input type="file" ref="file" name="file" id="file" @change="onSelect" class="input-file form-control form-floating mb-3" />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <label for="file" class="btn btn-lg btn-primary text-white">📸</label>
        <button class="btn btn-lg btn-primary text-white" type="submit" value="submit">Partage un Post</button>
      </div>
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

<style lang="scss" scoped>
  .input-file {
    display: none;
  }

  .container {
    border-radius: 10px;
    box-shadow: 0px 3px 12px 0px darkgray;
  }
</style>
