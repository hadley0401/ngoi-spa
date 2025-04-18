<!-- src/components/Layout.vue -->
<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
