<template>
  <div class="gallery-section">
    <h2 class="gallery-title">{{ $t('gallery.title') }}</h2>
    <RiceDivider/>
    <p class="gallery-description">{{ $t('gallery.description') }}</p>

    <div ref="galleryGrid" class="gallery-grid">
      <div
          v-for="(image, index) in images"
          :key="index"
          :class="[`item-${index + 1}`, { 'is-visible': image.isVisible }]"
          class="gallery-item"
          @click="openLightbox(index)"
          @mouseenter="onItemHover(index)"
          @mouseleave="onItemLeave(index)"
      >
        <img
            :alt="image.alt"
            :loading="index > 2 ? 'lazy' : 'eager'"
            :src="image.src"
        />
        <div class="gallery-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">{{ $t(`gallery.images.image${index + 1}.title`) }}</h3>
            <p class="overlay-description">{{ $t(`gallery.images.image${index + 1}.description`) }}</p>
            <div class="overlay-actions">
              <button class="action-btn zoom">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="image-number">{{ String(index + 1).padStart(2, '0') }}</div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>

        <button :disabled="currentImageIndex === 0" class="lightbox-nav prev" @click="previousImage">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="lightbox-content">
          <img
              :alt="currentImage.alt"
              :src="currentImage.src"
              class="lightbox-image"
          />
          <div class="lightbox-info">
            <h3>{{ $t(`gallery.images.image${currentImageIndex + 1}.title`) }}</h3>
            <p>{{ $t(`gallery.images.image${currentImageIndex + 1}.description`) }}</p>
            <div class="lightbox-meta">
              <span>{{ currentImageIndex + 1 }} / {{ images.length }}</span>
            </div>
          </div>
        </div>

        <button :disabled="currentImageIndex === images.length - 1" class="lightbox-nav next" @click="nextImage">
          <i class="fas fa-chevron-right"></i>
        </button>
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
      lightboxOpen: false,
      currentImageIndex: 0,
      images: [
        {
          src: require("@/assets/2023-04-26_165802.png"),
          alt: "Không gian tiếp đón",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-26_170141.png"),
          alt: "Cây xanh trong spa",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-26_170404.png"),
          alt: "Góc thư giãn",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-27_155244.png"),
          alt: "Phòng tắm",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-27_155445.png"),
          alt: "Hoa hồng thư giãn",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-27_155554.png"),
          alt: "Tinh dầu spa",
          isVisible: false
        },
        {
          src: require("@/assets/2023-04-27_155836.png"),
          alt: "Khu vực đón khách",
          isVisible: false
        },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex] || {};
    }
  },
  mounted() {
    this.initScrollAnimations();
    this.handleKeyboardEvents();
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = '';
    },

    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
      }
    },

    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },

    onItemHover(index) {
      const item = this.$refs.galleryGrid.children[index];
      if (item) {
        item.style.transform = 'translateY(-5px)';
      }
    },

    onItemLeave(index) {
      const item = this.$refs.galleryGrid.children[index];
      if (item) {
        item.style.transform = 'translateY(0)';
      }
    },

    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            setTimeout(() => {
              if (this.images[index]) {
                this.images[index].isVisible = true;
              }
            }, index * 100);
          }
        });
      }, observerOptions);

      this.$nextTick(() => {
        if (this.$refs.galleryGrid) {
          const items = this.$refs.galleryGrid.querySelectorAll('.gallery-item');
          items.forEach(item => observer.observe(item));
        }
      });
    },

    handleKeyboardEvents() {
      document.addEventListener('keydown', this.handleKeydown);
    },

    handleKeydown(e) {
      if (!this.lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
      }
    }
  }
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

/* Filter Buttons - REMOVED */

/* Gallery Grid */
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
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.gallery-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 25px;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  width: 100%;
}

.overlay-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
}

.overlay-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 18px;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.overlay-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.action-btn:hover {
  background: white;
  color: var(--color-primary);
  transform: scale(1.1);
}

/* Image Number */
.image-number {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

/* Grid Layout Variations */
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

/* View Controls - REMOVED */

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.lightbox-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  gap: 20px;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.lightbox-info {
  color: white;
  text-align: center;
  padding: 20px;
}

.lightbox-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.lightbox-info p {
  opacity: 0.8;
  margin-bottom: 15px;
}

.lightbox-meta {
  opacity: 0.6;
  font-size: 0.9rem;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.lightbox-nav {
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.lightbox-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Responsive */
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

  .item-2, .item-3 {
    grid-column: auto;
    grid-row: 3;
  }

  .item-4, .item-5, .item-6, .item-7 {
    grid-column: auto;
    grid-row: auto;
  }

  .lightbox-container {
    flex-direction: column;
    gap: 10px;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox-nav.prev {
    left: 20px;
  }

  .lightbox-nav.next {
    right: 20px;
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

  .filter-buttons {
    gap: 8px;
  }

  .filter-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .overlay-title {
    font-size: 1rem;
  }

  .overlay-description {
    font-size: 0.8rem;
  }

  .lightbox-image {
    max-height: 60vh;
  }
}
</style>