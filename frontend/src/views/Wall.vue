<template>
  <div class="wall">
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Wall',
  components: {
    Header,
    Footer,
  }
}
</script>
