<template>
  <section class="hero">
    <div class="sliders">
      <img
          v-for="(image, index) in images"
          :key="index"
          :alt="'hero-' + (index + 1)"
          :class="{ active: currentSlide === index }"
          :src="image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      images: [
        require("@/assets/HAIR-SALON-SPa-2-1024x314.png"),
        require("@/assets/HAIR-SALON-SPa-1024x314.png"),
        // require("@/assets/HAIR-SALON-SPA-3-1024x314.png"),
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    // Set initial height based on first image
    this.setSliderHeight();
    this.startSlider();
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }, 3000);
    },
    setSliderHeight() {
      // Optional: Dynamically set slider height based on image dimensions
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.height / img.width;
        const sliderEl = this.$el.querySelector(".sliders");
        if (sliderEl) {
          sliderEl.style.height = `${sliderEl.offsetWidth * aspectRatio}px`;
        }
      };
      img.src = this.images[0];
    },
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
  overflow: hidden;
}

.sliders {
  display: flex;
  overflow: hidden;
  position: relative;
  height: 400px; /* Increased height for better visual impact */
  width: 100%;
}

.sliders img {
  width: 100%;
  transition: opacity 1s ease;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  object-fit: cover; /* This ensures the image covers the area properly */
}

.sliders img.active {
  opacity: 1;
  width: 100%;
  height: 100%;
  display: block;
}

/* Responsive height for mobile */
@media (max-width: 768px) {
  .sliders {
    height: 250px; /* Adjust height for smaller screens */
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
