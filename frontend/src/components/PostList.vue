<template>
  <div class="post-list container col-lg-6 mx-auto">
    <h3>Posts here 👇</h3>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
        {{ post.User.username}} à posté :<br>
        {{ post.message }} <br />
        écrit à : {{ post.createdAt }} <br />
        {{ post.image }} <br />
        <PostDelete/>
        <Like/>
        <CommentList/>
        <Comment />
      </li>
    </ul>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
import CommentList from "./CommentList.vue";
import PostDelete from "./PostDelete.vue";
export default {
    name: "PostList",
    data() {
        return {
            posts: null,
        };
    },
    methods: {
        getPosts() {
            const _this = this;
            console.log("aaa");
            const token = this.$store.getters.getToken;
            console.log(token);
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            this.axios.get("/api/post", config).then((response) => {
                _this.posts = response.data;
            });
        },
    },
    created() {
        this.getPosts();
    },
    components: { Comment, CommentList, PostDelete }
};
</script>

<style></style>
