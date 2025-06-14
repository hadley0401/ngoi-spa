<template>
  <div>
    <PageHero 
      :page-title="$t('nav.about')"
      :hero-image="require('@/assets/HAIR-SALON-SPa-2-1024x314.png')"
    />
    <div class="page-inner content about-art-layout">
      <div class="about-img-col">
        <div v-for="img in aboutImages" :key="img" class="about-img-container">
          <img
            class="about-img"
            :src="img"
            alt="Spa image"
          />
        </div>
      </div>
      <div class="about-art-main">
        <blockquote>
          <p>
            {{ $t('about.description') }}
          </p>
        </blockquote>
        <p>
          {{ $t('about.services') }}
        </p>
        <p>
          {{ $t('about.spa') }}
        </p>
        <p>
          {{ $t('about.nail') }}
        </p>
        <p>
          {{ $t('about.contact') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue';

const aboutImages = [
  require('@/assets/2023-04-26_165802.png'),
  require('@/assets/2023-04-26_170141.png'),
  require('@/assets/2023-04-26_170404.png'),
  require('@/assets/2023-04-27_155244.png'),
];
</script>

<style>
blockquote {
  border-left: 2px solid #446084;
  color: #333;
  font-size: 1.2em;
  font-style: italic;
  margin: 0 0 1.25em;
  padding: 0 1.25em 0 1.875em;
  position: relative;
  border-color: #dd9933;
}

.about-art-layout {
  display: flex;
  flex-direction: row;
  gap: 32px;
  position: relative;
}

.about-img-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 220px;
  max-width: 240px;
  position: relative;
}

.about-img-container {
  position: relative;
  border-radius: clamp(20px, 5vw, 30px);
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.about-img-container:hover {
  transform: translateY(-5px);
}

.about-img {
  width: 220px;
  height: 150px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.about-img-container:hover .about-img {
  transform: scale(1.05);
}

.about-img-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--divider-color, var(--primary-color));
  border-radius: clamp(20px, 5vw, 30px);
  pointer-events: none;
}

.about-art-main {
  flex: 1;
  padding-top: 10px;
}

@media (max-width: 900px) {
  .about-art-layout {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .about-img-col {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    min-width: 0;
    justify-content: center;
    gap: 15px;
  }
  .about-img {
    width: 160px;
    height: 120px;
  }
  .about-img-container {
    width: 160px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .about-img-col {
    gap: 10px;
  }
  .about-img-container, .about-img {
    width: 140px;
    height: 100px;
  }
}
</style>
