<template>
  <div class="post-list container col-lg-6 mx-auto">
    <h3>Posts ici 👇</h3>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
        <p>
          <span class="nom">{{ post.User.username }}</span> à posté :
        </p>
        <p class="h3">{{ post.message }}</p>
        <p>écrit à : {{ post.createdAt }}</p>
        {{ post.image }} <br />
        <PostModify :postParent="post" />
        <PostDelete :postParent="post" />
        <Like :postParent="post" />
        {{ post.comments }} <br />
        <hr />
        <h4>Commentaires :</h4>
        <ul class="list-group">
          <li class="list-group-item py-3" v-for="(comment, index) in post.Comments" :key="index">
            {{ comment.avatar }} / {{ comment.User.username }} à commenté : {{ comment.message }}
            <CommentModify :commentParent="comment" />
            <CommentDelete :commentParent="comment" />
          </li>
        </ul>
        <hr />
        <CommentCreate :postParent="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostModify from "./PostModify.vue";
import PostDelete from "./PostDelete.vue";
import CommentCreate from "./CommentCreate.vue";
import CommentModify from "./CommentModify.vue";
import CommentDelete from "./CommentDelete.vue";
import Like from "./Like.vue";

export default {
  name: "PostList",

  components: {
    PostModify,
    PostDelete,
    CommentCreate,
    CommentModify,
    CommentDelete,
    Like,
  },

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
      this.axios
        .get("/api/post")
        .then((response) => (this.posts = response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.nom {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
