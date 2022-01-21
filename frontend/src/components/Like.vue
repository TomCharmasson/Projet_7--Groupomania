<template>
  <div class="likes">
    <p v-if="likes === 0"> Aucun like 😥</p>
    <p v-else-if="likes === 1">{{ likes }} like</p>
    <p v-else>{{ likes }} likes</p>
    <button @click="likeIt">J'aime</button>
  </div>
</template>

<script>
export default {
  name: "Like",
  data() {
    return {
      likes: "",
    };
  },
  methods: {
    addAlike() {
    const token = this.$store.getters.getToken;
    const header = {
      headers: { Authorization: `Bearer ${token}` },
    };
    this.axios
      .post("/api/like", header)
      .then((response) => {
        this.likes = response.data.likes;
      });
    },
  },
};
</script>

<style></style>
