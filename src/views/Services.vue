<template>
  <div>
    <PageHero
        :hero-image="require('@/assets/HAIR-SALON-SPa-1024x314.png')"
        :page-title="$t('nav.services')"
    />
    <div class="page-inner content">
      <h1>{{ $t('services.title') }}</h1>
      <RiceDivider :centered="true"/>
      <p class="description">{{ $t('services.description') }}</p>

      <div class="promotion-banner">
        <p>{{ $t('services.note') }}</p>
      </div>

      <div class="menu-section">
        <h2>Our Menu</h2>
        <div class="menu-images">
          <div v-for="img in menuImages" :key="img.src" class="menu-image-container">
            <img :alt="img.alt" :src="img.src" class="menu-image" style="cursor: zoom-in;"
                 @click="openMenuModal(img.src)"/>
          </div>
        </div>
      </div>
      <div v-if="showMenuModal" class="menu-modal" @click.self="closeMenuModal">
        <button class="modal-close" @click="closeMenuModal">&times;</button>
        <div class="modal-zoom-controls">
          <button :disabled="zoomLevel <= 1" @click="zoomOut">-</button>
          <span>{{ Math.round(zoomLevel * 100) }}%</span>
          <button @click="zoomIn">+</button>
        </div>
        <img :src="modalMenuImg" :style="{ transform: `scale(${zoomLevel})` }" class="modal-img"
             @wheel.prevent="onWheelZoom"/>
      </div>

      <div class="services-section">
        <h2>Nail Art Designs</h2>
        <p class="service-description">Explore our beautiful nail art designs, created by our professional nail artists.
          Choose from a variety of styles and colors to match your personality.</p>
        <div class="service-images">
          <div v-for="(image, index) in nailImages" :key="`nail-${index}`" class="service-image-container">
            <img :alt="image.alt" :src="image.url" class="service-image"/>
          </div>
        </div>
      </div>

      <div class="services-section">
        <h2>Eyelash Extensions</h2>
        <p class="service-description">Our eyelash extensions are designed to enhance your natural beauty. We use
          premium materials for a comfortable, long-lasting result.</p>
        <div class="eyelash-images">
          <div v-for="(image, index) in eyelashImages" :key="`eyelash-${index}`" class="service-image-container">
            <img :alt="image.alt" :src="image.url" class="service-image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHero from '@/components/PageHero.vue';
import RiceDivider from '@/components/RiceDivider.vue';

export default {
  components: {
    PageHero,
    RiceDivider
  },
  data() {
    return {
      menuImages: [
        {src: require('@/assets/menu/menu-front.png'), alt: 'Menu Front'},
        {src: require('@/assets/menu/menu-back.png'), alt: 'Menu Back'}
      ],
      showMenuModal: false,
      modalMenuImg: '',
      zoomLevel: 1,
      nailImages: [
        {url: 'https://www.lookme.vn/blog/wp-content/uploads/2021/01/unnamed-file-11.png', alt: 'Nail design 1'},
        {url: 'https://www.lookme.vn/blog/wp-content/uploads/2021/01/unnamed-file-269.jpg', alt: 'Nail design 2'},
        {url: 'https://www.lookme.vn/blog/wp-content/uploads/2021/01/unnamed-file-278.jpg', alt: 'Nail design 3'},
        {url: 'https://www.lookme.vn/blog/wp-content/uploads/2021/01/unnamed-file-195.jpg', alt: 'Nail design 4'},
        {url: 'https://www.lookme.vn/blog/wp-content/uploads/2021/01/unnamed-file-212.jpg', alt: 'Nail design 5'}
      ],
      eyelashImages: [
        {
          url: 'https://www.micropigmentation.academy/wp-content/uploads/2020/10/122224564_375782766800323_4181425100806826705_n-scaled.jpg',
          alt: 'Eyelash extensions 1'
        },
        {
          url: 'https://img.grouponcdn.com/metro_draft_service/2MSm9d6MMj513d3SNypgMoNEa5YY/2M-1079x647/v1/c600x362.webp',
          alt: 'Eyelash extensions 2'
        },
        {
          url: 'https://img.grouponcdn.com/deal/4KpfGvso9WqJxRFirQ2EvMvd6WjZ/4K-3956x2369/v1/sc600x600.webp',
          alt: 'Eyelash extensions 3'
        },
        {
          url: 'https://img.grouponcdn.com/metro_draft_service/3GysVBQCPG1HqqJEWW9pTD148yJg/3G-1221x1029/v1/c600x362.webp',
          alt: 'Eyelash extensions 4'
        },
        {url: 'https://ubeauty.vn/wp-content/uploads/2024/07/noi-mi-sole-thai-5.jpg', alt: 'Eyelash extensions 5'},
        {url: 'https://media.loveitopcdn.com/3804/203714-nhung-kieu-noi-mi-ms-hani-1.jpg', alt: 'Eyelash extensions 6'}
      ]
    };
  },
  computed: {
    currentMonth() {
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      const date = new Date();
      return months[date.getMonth()];
    }
  },
  methods: {
    openMenuModal(img) {
      this.modalMenuImg = img;
      this.zoomLevel = 1;
      this.showMenuModal = true;
    },
    closeMenuModal() {
      this.showMenuModal = false;
      this.zoomLevel = 1;
    },
    zoomIn() {
      this.zoomLevel = Math.min(this.zoomLevel + 0.2, 3);
    },
    zoomOut() {
      this.zoomLevel = Math.max(this.zoomLevel - 0.2, 1);
    },
    onWheelZoom(e) {
      if (e.deltaY < 0) this.zoomIn();
      else this.zoomOut();
    }
  }
};
</script>

<style scoped>
.page-inner {
  padding: 40px 0;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2 {
  text-align: center;
  color: var(--primary-color);
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin: 40px 0 20px;
  font-size: 1.8rem;
}

.description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.promotion-banner {
  background-color: var(--accent-color, #f8e3c5);
  border: 1px solid var(--primary-color, #8b5a00);
  border-radius: 8px;
  padding: 15px 20px;
  margin: 20px auto 40px;
  text-align: center;
  max-width: 800px;
  font-size: 1.1rem;
  color: var(--primary-color, #8b5a00);
  font-weight: 500;
}

.menu-section, .services-section {
  margin-bottom: 60px;
}

.service-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.menu-images {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.menu-image-container {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  max-width: 500px;
}

.menu-image-container:hover {
  transform: translateY(-5px);
}

.menu-image {
  width: 100%;
  height: auto;
  display: block;
}

.service-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.service-image-container {
  width: 220px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--divider-color, var(--primary-color));
}

.service-image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-image-container:hover .service-image {
  transform: scale(1.05);
}

.eyelash-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.eyelash-images .service-image-container {
  width: 220px;
}

.menu-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  background: #fff;
  transition: transform 0.3s;
}

.modal-close {
  position: absolute;
  top: 24px;
  right: 36px;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 10001;
}

.modal-zoom-controls {
  position: absolute;
  left: 50%;
  bottom: 36px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 18px;
  z-index: 10001;
}

.modal-zoom-controls button {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.2s;
}

.modal-zoom-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-zoom-controls span {
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0 1px 3px #000;
}

@media (max-width: 768px) {
  .menu-images {
    gap: 20px;
  }

  .menu-image-container {
    max-width: 90%;
  }

  .service-image-container {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .service-image-container {
    width: 140px;
    height: 140px;
  }

  .service-images {
    gap: 10px;
  }
}
</style>
