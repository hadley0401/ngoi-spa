<template>
  <section class="page-hero">
    <div class="hero-image">
      <img :alt="pageTitle" :src="heroImage"/>
      <div class="hero-overlay">
        <div class="content-container">
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
  width: 100%;
}

.hero-image {
  position: relative;
  height: 400px;
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
  width: 100%;
}

.content-container {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
}

.hero-overlay h1 {
  color: white;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Responsive height for mobile */
@media (max-width: 768px) {
  .hero-image {
    height: 250px;
  }

  .hero-overlay h1 {
    font-size: 2.2rem;
  }
}

/* Thêm vào CSS của Hero component để tránh bị header che */

.hero {
  width: 100%;
  overflow: hidden;
  margin-top: 80px; /* Adjust based on header height */
}

/* Hoặc thêm vào body/main container */
body {
  padding-top: 80px; /* Space for fixed header */
}

/* Alternative: Sử dụng CSS variable để flexible hơn */
:root {
  --header-height: 80px;
}

.hero {
  margin-top: var(--header-height);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  :root {
    --header-height: 75px;
  }
}

@media (max-width: 480px) {
  :root {
    --header-height: 70px;
  }
}
</style>
