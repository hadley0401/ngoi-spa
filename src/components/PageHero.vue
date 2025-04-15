<template>
  <section class="page-hero">
    <div class="container">
      <div class="hero-image">
        <img :src="heroImage" :alt="pageTitle" />
        <div class="hero-overlay">
          <h1>{{ pageTitle }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHero",
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    heroImage: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.page-hero {
  margin-bottom: 40px;
}

.hero-image {
  position: relative;
  height: 314px;
  overflow: hidden;
  width: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-overlay h1 {
  color: white;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  padding: 0 20px;
}

/* Responsive height for mobile */
@media (max-width: 768px) {
  .hero-image {
    height: 200px;
  }
  
  .hero-overlay h1 {
    font-size: 28px;
  }
}
</style>
