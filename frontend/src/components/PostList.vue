<template>
  <section>
    <div class="card col-lg-8 mx-auto mb-5" v-for="post in posts" :key="post.id">
      <div class="card-header d-flex justify-content-between">
        <div>
          <span class="nom">{{ post.User.username }}</span> à posté :
        </div>
        <div>{{ getDate(post.createdAt) }}</div>
      </div>
      <div class="card-body">
        <img class="card-img-top" :src="post.image" alt="Image du post" />
        <h3 class="card-title my-5">{{ post.message }}</h3>
        <hr />
        <div class="d-flex justify-content-center mb-5">
          <Like :postParent="post" />
          <PostModify :postParent="post" />
          <PostDelete :postParent="post" />
        </div>
        <div class="list-group">
          <div class="d-flex list-group-item justify-content-between align-items-center" v-for="(comment, index) in post.Comments" :key="index">
            <div class="text-start">
              <span>{{ comment.User.username }} : </span>
              <h5>{{ comment.message }}</h5>
            </div>
            <div class="d-flex">
              <CommentModify :commentParent="comment" />
              <CommentDelete :commentParent="comment" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        <CommentCreate :postParent="post" />
      </div>
    </div>
  </section>
</template>

<script>
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
        return moment(date).format("MMMM Do YYYY, h:mm:ss a");
      },
    },
  };
</script>

<style>
  .nom {
    font-weight: 800;
  }
  .date {
    font-style: italic;
  }
</style>
