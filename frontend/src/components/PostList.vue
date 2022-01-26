<template>
  <div class="post-list container col-lg-6 mx-auto">
    <h3>Posts here 👇</h3>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
        {{ post.User.username }} à posté :<br />
        {{ post.message }} <br />
        écrit à : {{ post.createdAt }} <br />
        {{ post.image }} <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      const token = this.$store.getters.getToken; // get the token from store
      const headers = {
        headers: { Authorization: `Bearer ${token}` }, // add the token to the header
      };
      this.axios
        .get("/api/post", headers)
        .then((response) => (this.posts = response.data))
        .catch((error) => console.log(error));
      console.log(this.posts);
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style></style>
