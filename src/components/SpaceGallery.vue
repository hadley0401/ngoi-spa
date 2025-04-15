<template>
  <div class="gallery-section">
    <h2 class="gallery-title">{{ $t('gallery.title') }}</h2>
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
export default {
  name: "SpaceGallery",
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
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f4eb;
}

.gallery-title {
  text-align: center;
  margin-bottom: 15px;
  color: #8b4513;
  font-size: 24px;
  font-weight: bold;
}

.gallery-description {
  text-align: center;
  margin-bottom: 30px;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 110px);
  gap: 15px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Cấu hình vị trí cho từng ảnh - dựa trên bố cục trong hình của bạn */
.item-1 {
  grid-column: 1 / 4; /* Chiếm 3 cột */
  grid-row: 1 / 3; /* Chiếm 2 hàng */
}

.item-2 {
  grid-column: 4 / 6; /* Chiếm 2 cột */
  grid-row: 1 / 2; /* Chiếm 1 hàng */
}

.item-3 {
  grid-column: 6 / 7; /* Chiếm 1 cột */
  grid-row: 1 / 2; /* Chiếm 1 hàng */
}

.item-4 {
  grid-column: 1 / 3; /* Chiếm 2 cột */
  grid-row: 3 / 5; /* Chiếm 2 hàng */
}

.item-5 {
  grid-column: 3 / 4; /* Chiếm 1 cột */
  grid-row: 3 / 4; /* Chiếm 1 hàng */
}

.item-6 {
  grid-column: 3 / 4; /* Chiếm 1 cột */
  grid-row: 4 / 5; /* Chiếm 1 hàng */
}

.item-7 {
  grid-column: 4 / 7; /* Chiếm 3 cột */
  grid-row: 2 / 5; /* Chiếm 3 hàng */
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 150px);
  }

  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6,
  .item-7 {
    grid-column: auto;
    grid-row: auto;
  }

  .item-1 {
    grid-column: 1 / 3;
    grid-row: span 1;
  }

  .item-7 {
    grid-column: 1 / 3;
    grid-row: span 1;
  }
}
</style>
