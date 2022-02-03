<template>
  <div class="likes d-flex align-items-center">
    <button class="btn border" @click="likeDislikeThis">👍</button>
    <div class="mx-2" v-if="likes === 0">Aucun like 😥</div>
    <div class="mx-2" v-else-if="likes === 1">{{ likes }} like</div>
    <div class="mx-2" v-else>{{ likes }} likes</div>
  </div>
</template>

<script>
  export default {
    name: "Like",

    data() {
      return {
        likes: 0,
        post: null,
      };
    },

    props: {
      // Objet post
      postParent: {
        type: Object,
        required: true,
      },
    },

    created() {
      this.likes = this.postParent.Likes.length;
      this.post = this.postParent;
    },

    methods: {
      likeDislikeThis() {
        this.axios
          .post("/api/like", {
            id: this.post.id,
          })
          .then((response) => {
            this.likes = response.data.likes;
          });
      },
    },
  };
</script>
