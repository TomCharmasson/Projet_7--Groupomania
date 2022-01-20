<template>
  <div class="comment" v-for="(comment, i) in comments" v-bind:key="i">
    <p>{{ comment.author }}</p>
    <p>{{ comment.content }}</p>
    <p>Créé le : {{ comment.created_at }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comments: [
        {
          author: "Bebert",
          content: "C'est un commentaire",
          created_at: "2022-01-01",
        },
        {
          author: "Jeanne",
          content: "Ou sommes nous ?",
          created_at: "2022-01-02",
        },
      ],
    };
  },
};
</script>

<style></style>
