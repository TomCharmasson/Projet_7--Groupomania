<template>
  <div class="likes d-flex align-items-center">
    <button class="btn border" @click="addAlike">👍</button>
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
