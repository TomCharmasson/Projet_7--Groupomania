<template>
  <div class="likes">
    <button class="btn border" @click="addAlike">👍</button> 
    <p v-if="likes === 0"> Aucun like 😥</p>
    <p v-else-if="likes === 1">{{ likes }} like</p>
    <p v-else>{{ likes }} likes</p>
  </div>
</template>

<script>
export default {
  name: "Like",
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    addAlike() {
      this.likes++;
    },
  },
};
</script>

<style></style>
