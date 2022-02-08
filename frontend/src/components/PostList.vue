<template>
  <section>
    <PostCreate @post-submitted="getPosts" />
    <div class="card col-lg-8 mx-auto mb-5" v-for="post in posts" :key="post.id">
      <div class="card-header d-flex justify-content-between align-items-center">
        <div>
          <img :src="post.User.avatar" class="rounded-circle mr-3" alt="Photo de profil" width="50" />
          <span class="nom mx-2">{{ post.User.username }}</span
          >à posté :
        </div>
        <div>{{ getDate(post.createdAt) }}</div>
      </div>
      <div class="card-body">
        <img class="card-img-top" :src="post.image" alt="Image du post" />
        <div class="d-flex justify-content-between mb-2">
          <h3 class="card-title my-5">{{ post.message }}</h3>
          <Like @update-likes="getPosts" :postParent="post" />
        </div>
        <div class="d-flex justify-content-start mb-2">
          <PostModify @post-modified="getPosts" :postParent="post" />
          <PostDelete @post-deleted="getPosts" :postParent="post" />
        </div>
        <div class="list-group">
          <h4>Commentaires :</h4>
          <div class="d-flex list-group-item justify-content-between align-items-center" v-for="(comment, index) in post.Comments" :key="index">
            <div class="text-start">
              <span>{{ comment.User.username }} : </span>
              <h5>{{ comment.message }}</h5>
            </div>
            <div class="d-flex">
              <CommentModify @comment-modified="getPosts" :commentParent="comment" />
              <CommentDelete @comment-deleted="getPosts" :commentParent="comment" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        <CommentCreate @comment-submitted="getPosts" :postParent="post" />
      </div>
    </div>
  </section>
</template>

<script>
  import PostCreate from "./PostCreate.vue";
  import PostModify from "./PostModify.vue";
  import PostDelete from "./PostDelete.vue";
  import CommentCreate from "./CommentCreate.vue";
  import CommentModify from "./CommentModify.vue";
  import CommentDelete from "./CommentDelete.vue";
  import Like from "./Like.vue";
  import moment from "moment";

  export default {
    name: "PostList",

    components: {
      PostCreate,
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
      getDate(date) {
        // check if the date of the post is today
        if (moment(date).isSame(new Date(), "day")) {
          return moment(date).locale("fr").fromNow();
        } else {
          return moment(date).locale("fr").format("llll");
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .nom {
    font-weight: 800;
  }
  .date {
    font-style: italic;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0px 3px 12px 0px darkgray;
  }
  .list-group-item {
    box-shadow: 0px 1px 2px 0px darkgray;
  }
</style>
