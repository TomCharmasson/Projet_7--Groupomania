<template>
<p>Commentaires</p>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(comment, index) in comments" :key="index">
        {{ comment.Comments}} à commenté :<br />
      </li>
    </ul>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    getComments() {
      const token = this.$store.getters.getToken; // get the token from store
      const headers = {
        headers: { Authorization: `Bearer ${token}` }, // add the token to the header
      };
      this.axios
        .get("/api/post", headers)
        .then((response) => (this.comments = response.data))
        .catch((error) => console.log(error));
      console.log(this.comments);
    },
  },
  mounted() {
    this.getComments();
  },
};
</script>

<style scoped>
.list-group-item {
  border-radius: 25px;
  background-color: #f5f5f5;
}
</style>
