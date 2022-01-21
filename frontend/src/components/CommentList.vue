<template>
<p>Commentaires</p>
  <ul>
    <li v-for="(comment, index) in comments" :key="index">
      {{ comment.message }} <br />
      écrit à : {{ comment.createdAt }} <br />
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
      const _this = this;
      const token = this.$store.getters.getToken;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      this.axios.get("/api/comment", config).then((response) => {
        _this.comments = response.data;
      });
    },
  },
  created() {
    this.getComments();
  },
};
</script>

<style></style>
