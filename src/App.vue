<template>
  <div class="app" id="app">
    <LoadingScreen :loading="isLoading" />
    <transition name="fade" mode="out-in">
      <Layout v-if="!isLoading" />
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
/* Remove Google Fonts import since we're using local fonts */
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
@import url("./assets/css/fonts.css");
@import url("./assets/css/main.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Using variables from main.css instead of hardcoded values */
html, body {
  height: 100%;
  font-size: 18px;
}

/* Main CSS file now handles most of these styles */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* We're keeping existing CSS variables for backward compatibility, 
   but they now reference our new design system variables */
:root {
  --primary-color: var(--color-primary);
  --secondary-color: var(--color-secondary);
  --text-color: var(--color-text);
  --background-color: var(--color-primary);
  --white: var(--color-white);
  --title-font: 'Marcellus', serif;
  --body-font: 'Roboto', sans-serif;
  
  /* Font sizes - responsive with clamp */
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-md: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-size-lg: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-size-xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  --font-size-xxl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);
  --font-size-xxxl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
  
  /* Spacing */
  --container-padding: clamp(15px, 3vw, 30px);
  --section-spacing: clamp(40px, 5vw, 80px);
}

/* Global responsive container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive utilities */
.hide-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hide-mobile {
    display: initial;
  }
  
  .hide-desktop {
    display: none;
  }
}

/* Apply Marcellus font to all headings */
h1, h2, h3, h4, h5, h6, .title, .page-title {
  font-family: var(--title-font);
  font-weight: normal;
}

h1, .h1 {
  font-size: var(--font-size-xxl);
  margin-bottom: 0.8em;
}

h2, .h2 {
  font-size: var(--font-size-xl);
  margin-bottom: 0.7em;
}

h3, .h3 {
  font-size: var(--font-size-lg);
  margin-bottom: 0.6em;
}

h4, .h4 {
  font-size: var(--font-size-md);
  margin-bottom: 0.5em;
}

h5, .h5 {
  font-size: var(--font-size-base);
  margin-bottom: 0.4em;
}

h6, .h6 {
  font-size: var(--font-size-sm);
  margin-bottom: 0.3em;
}

/* Apply Roboto font to all body text */
p, span, div, a, button, input, textarea, select, li {
  font-family: var(--body-font);
  font-weight: var(--font-weight-thin);
}

p, li {
  font-size: var(--font-size-base);
  margin-bottom: 1em;
}

.small-text {
  font-size: var(--font-size-sm);
}

.large-text {
  font-size: var(--font-size-md);
}

/* Text weight classes */
.text-thin {
  font-weight: var(--font-weight-thin);
}

.text-regular {
  font-weight: var(--font-weight-regular);
}

.text-medium {
  font-weight: var(--font-weight-medium);
}

.text-bold {
  font-weight: var(--font-weight-bold);
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
  line-height: 1.7;
  font-weight: var(--font-weight-thin);
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

/* Responsive font sizes */
@media (max-width: 768px) {
  html, body {
    font-size: 15px;
  }
  
  h1, .h1 {
    font-size: 2.2rem;
  }
  
  h2, .h2 {
    font-size: 1.8rem;
  }
  
  h3, .h3 {
    font-size: 1.5rem;
  }
}
</style>
