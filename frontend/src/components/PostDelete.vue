<template>
  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
    <form @submit.prevent="deletePost">
      <button class="btn btn-secondary text-white m-1" type="submit" value="submit">❌</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "PostDelete",

    props: {
      postParent: {
        type: Object,
        required: true,
      },
    },

    methods: {
      deletePost() {
        this.axios
          .delete(`/api/post/${this.postParent.id}`)
          .then((response) => {
            this.$emit("post-deleted", response.data);
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>

<style></style>
