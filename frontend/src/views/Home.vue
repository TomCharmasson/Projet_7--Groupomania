<template>
  <div>
    <Header />
    <PostList />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import PostList from "@/components/PostList.vue";

  export default {
    name: "Home",
    components: {
      Header,
      Footer,
      PostList,
    },
  };
</script>
