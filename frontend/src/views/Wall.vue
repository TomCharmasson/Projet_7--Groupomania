<template>
  <div class="wall ">
    <Header />
    <Post @post-submitted="addPost" />
    <PostList v-if="posts.length" :posts="posts" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";
import PostList from "@/components/PostList.vue";

export default {
  name: "Wall",
  components: {
    Header,
    Footer,
    Post,
    PostList,
  },

  data() {
    return {
      posts: [],
    };
  },
  created() {
    const token = this.$store.getters.getToken;
    console.log(token)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    this.axios.get("/api/post", config).then((response) => {
      console.log(response.data);
   });
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
    },
  },
};
</script>
