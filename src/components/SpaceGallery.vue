<template>
  <div class="gallery-section">
    <h2 class="gallery-title">{{ $t('gallery.title') }}</h2>
    <RiceDivider />
    <p class="gallery-description">{{ $t('gallery.description') }}</p>

    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="`item-${index + 1}`"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import RiceDivider from './RiceDivider.vue';

export default {
  name: "SpaceGallery",
  components: {
    RiceDivider
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/2023-04-26_165802.png"),
          alt: "Không gian tiếp đón",
        },
        {
          src: require("@/assets/2023-04-26_170141.png"),
          alt: "Cây xanh trong spa",
        },
        { src: require("@/assets/2023-04-26_170404.png"), alt: "Góc thư giãn" },
        { src: require("@/assets/2023-04-27_155244.png"), alt: "Phòng tắm" },
        {
          src: require("@/assets/2023-04-27_155445.png"),
          alt: "Hoa hồng thư giãn",
        },
        { src: require("@/assets/2023-04-27_155554.png"), alt: "Tinh dầu spa" },
        {
          src: require("@/assets/2023-04-27_155836.png"),
          alt: "Khu vực đón khách",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-section {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--container-padding);
  background-color: var(--color-bg-alt);
  position: relative;
  overflow: hidden;
}

.gallery-section::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  opacity: 0.05;
  border-radius: 50%;
  top: -100px;
  left: -100px;
  z-index: 0;
}

.gallery-section::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  background: var(--color-primary);
  opacity: 0.05;
  border-radius: 50%;
  bottom: -50px;
  right: -50px;
  z-index: 0;
}

.gallery-title {
  text-align: center;
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary-dark);
  font-size: var(--text-2xl);
  font-weight: normal;
  font-family: var(--font-heading);
  position: relative;
  z-index: 1;
}

.gallery-description {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-light);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: var(--text-base);
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 7px;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.gallery-item {
  overflow: hidden;
  border-radius: 0;
  box-shadow: var(--shadow-md);
  position: relative;
  cursor: pointer;
}

.gallery-item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover::after {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

.item-2 {
  grid-column: 3 / span 2;
  grid-row: 1 / span 1;
}

.item-3 {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
}

.item-4 {
  grid-column: 4 / span 1;
  grid-row: 2 / span 2;
}

.item-5 {
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
}

.item-6 {
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
}

.item-7 {
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 160px);
    gap: 5px;
  }
  .item-1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  .item-2 {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
  .item-3 {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }
  .item-4, .item-5, .item-6, .item-7 {
    grid-column: auto;
    grid-row: auto;
  }
}

@media (max-width: 600px) {
  .gallery-section {
    padding: var(--spacing-xl) var(--container-padding);
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 120px);
    gap: 4px;
  }
  
  .gallery-item {
    box-shadow: var(--shadow-sm);
  }
  
  .item-1 {
    grid-column: 1;
    grid-row: span 1;
  }
}
</style>
