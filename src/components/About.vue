<template>
  <section class="about">
    <div class="container">
      <h2 class="animate-fade-in">{{ $t('about.title') }}</h2>
      <RiceDivider :centered="true" />
      <p class="description animate-slide-up">
        {{ $t('about.description') }}
      </p>

      <div class="features">
        <div v-for="(feature, index) in features" :key="index" class="feature" 
             :class="{'animate-slide-in-left': index % 2 === 0, 'animate-slide-in-right': index % 2 !== 0}"
             :style="{ animationDelay: `${0.2 * index}s` }">
          <div class="feature-icon">
            <img :src="feature.icon" :alt="feature.alt" />
          </div>
          <h3>{{ $t(feature.title) }}</h3>
          <p>{{ $t(feature.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RiceDivider from './RiceDivider.vue';

export default {
  name: "About",
  components: {
    RiceDivider
  },
  data() {
    return {
      features: [
        {
          icon: require('@/assets/anh-2.png'),
          alt: 'KTV chuyên nghiệp',
          title: 'about.features.professional.title',
          description: 'about.features.professional.description'
        },
        {
          icon: require('@/assets/anh-3.png'),
          alt: 'Không gian thư giãn',
          title: 'about.features.relaxing.title',
          description: 'about.features.relaxing.description'
        },
        {
          icon: require('@/assets/anh-4.png'),
          alt: 'Dịch vụ đa dạng',
          title: 'about.features.diverse.title',
          description: 'about.features.diverse.description'
        },
        {
          icon: require('@/assets/anh-5.png'),
          alt: 'Phục vụ chu đáo',
          title: 'about.features.attentive.title',
          description: 'about.features.attentive.description'
        }
      ]
    }
  }
};
</script>

<style scoped>
.about {
  padding: 60px 0;
  background-color: var(--white);
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 15px;
}

h2 {
  text-align: center;
  color: var(--primary-color);
  font-size: var(--font-size-xxl);
  margin-bottom: 10px;
  text-transform: uppercase;
}

.description {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 50px;
  line-height: 1.7;
  color: var(--text-color);
  font-size: var(--font-size-base);
}

.features {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: clamp(15px, 2vw, 30px);
  margin-top: clamp(30px, 4vw, 50px);
}

.feature {
  flex: 1 1 calc(50% - 20px);
  min-width: 250px;
  max-width: 100%;
  background: none;
  border: 1px solid var(--divider-color, var(--primary-color));
  border-radius: clamp(30px, 10vw, 300px);
  box-shadow: none;
  padding: clamp(20px, 3vw, 30px);
  margin-bottom: clamp(15px, 2vw, 30px);
  transition: border-color 0.3s;
  text-align: center;
}

.feature h3,
.feature p {
  text-align: center;
}

.feature:hover {
  border-color: var(--secondary-color);
  box-shadow: none;
}

.feature:hover .feature-icon {
  transform: scale(1.05);
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 16px;
}

.feature h3 {
  color: var(--primary-color);
  font-size: var(--font-size-lg);
  margin-bottom: 5px;
  margin-top: 0;
  transition: color 0.3s ease;
}

.feature:hover h3 {
  color: var(--secondary-color);
}

.feature p {
  color: var(--text-color);
  font-size: var(--font-size-base);
  line-height: 1.6;
}

.animate-fade-in {
  animation: fade-in 1s;
}

.animate-slide-up {
  animation: slide-up 1s;
}

.animate-slide-in-left {
  animation: slide-in-left 1s;
}

.animate-slide-in-right {
  animation: slide-in-right 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .feature {
    flex: 1 1 100%;
    max-width: 100%;
    margin: 0 0 20px;
  }
  
  .feature-icon img {
    max-width: 80px;
    margin: 0 auto 12px;
  }
  
  .about {
    padding: 40px 0;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .feature {
    flex: 1 1 calc(50% - 15px);
    max-width: calc(50% - 15px);
  }
}

@media (min-width: 992px) {
  .features {
    flex-wrap: nowrap;
  }
  
  .feature {
    max-width: 25%;
    margin: 0 10px;
  }
}
</style>
