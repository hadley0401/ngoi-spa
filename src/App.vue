<template>
  <div class="app" id="app">
    <LoadingScreen :loading="isLoading" />
    <transition name="fade" mode="out-in">
      <Layout v-if="!isLoading">
        <router-view />
      </Layout>
    </transition>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  components: {
    Layout,
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f5f1ec;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

:root {
  --primary-color: #8b5a00;
  --secondary-color: #d4a84e;
  --text-color: #333;
  --background-color: #8b5a00;
  --white: #fff;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

/* Animation Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.container,
.container-width,
.full-width .ubermenu-nav,
.row,
body {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.flex-row {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}

.container-width,
.full-width .ubermenu-nav,
.container,
.row {
  max-width: 1170px;
}

.accordion-title.active,
.has-icon-bg .icon .icon-inner,
.logo a,
.primary.is-underline,
.primary.is-link,
.badge-outline .badge-inner,
.nav-outline > li.active > a,
.nav-outline > li.active > a,
.cart-icon strong,
[data-color="primary"],
.is-outline.primary {
  color: #dd9933;
}

.content {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
}

.page-inner p,
.article-inner p {
  line-height: 28px;
}

blockquote,
dl,
figure,
form,
ol,
p,
pre,
ul {
  margin-bottom: 1.3em;
}

.header-logo-dark,
.header-logo-sticky,
.nav-dark .header-logo,
.sticky .dark .header-logo-dark,
.sticky .has-sticky-logo .header-logo {
  display: none !important;
}
</style>
