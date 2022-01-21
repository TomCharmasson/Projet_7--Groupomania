<template>
  <div class="post-list container col-lg-6 mx-auto">
    <h3>Posts here 👇</h3>
    <ul class="list-group">
      <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
        {{ post.title }} <br>
        {{ post.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      posts: [
        {
          title: "Post 1",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "Post 2",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "Post 3",
          content: "Lorem ipsum dolor sit amet.",
        },
      ],
    };
  },
  methods: {
      getPosts() {
        this.axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            this.posts = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    // getAllPosts() {
    //   const token = this.$store.getters.getToken; // Récupère le token du store
    //   const config = {
    //     headers: { Authorization: `Bearer ${token}` }, // Ajoute le token dans les headers
    //   };
    //   this.axios
    //     .get("/api/post", config)
    //     .then((response) => { this.posts = response.data });
    // },
  },
};
</script>

<style></style>
