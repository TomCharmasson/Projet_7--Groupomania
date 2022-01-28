<template>
  <div class="post-list container col-lg-6 mx-auto">
    <h3>Posts here 👇</h3>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
        {{ post.User.username }} à posté :<br />
        {{ post.message }} <br />
        écrit à : {{ post.createdAt }} <br />
        {{ post.image }} <br />
        <PostModify />
        <PostDelete />
        <Like />
        {{ post.comments }} <br />
        <hr />
        <ul class="list-group">
          <li class="list-group-item py-3" v-for="(comment,index) in post.Comments" :key="index">
            {{ comment.avatar }} / {{ comment.User.username }} à commenté : {{ comment.message }}
          </li>
        </ul>
        <hr />
        <CommentCreate />
      </li>
    </ul>
  </div>
</template>

<script>
import PostModify from "./PostModify.vue";
import PostDelete from "./PostDelete.vue";
import CommentCreate from "./CommentCreate.vue";
import Like from "./Like.vue";

export default {
  components: {
    PostModify,
    PostDelete,
    CommentCreate,
    Like,
},

  name: "PostList",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
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
    },
  },
  
};
</script>

<style></style>
