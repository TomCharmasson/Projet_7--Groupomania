<template>
  <div class="container col-lg-6 mx-auto">
    <form @submit.prevent="deletePost">
      <button class="w-100 btn btn-lg btn-primary mb-5 text-white" type="submit" value="submit">Supprimer le Post 🗑</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostDelete",

  data() {
    return {
      post: "",
    };
  },

  created() {
    this.post = this.postParent;
  },

  props: {
    postParent: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    deletePost() {
      this.axios
        .delete(`/api/post/${this.post.id}`)
        .then((response) => {
          this.$emit("post-deleted", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
