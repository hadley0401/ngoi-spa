<template>
  <section class="about">
    <div class="container">
      <h2 class="animate-fade-in">{{ $t('about.title') }}</h2>
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
export default {
  name: "About",
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
  font-size: 28px;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.description {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 50px;
  line-height: 1.6;
  color: var(--text-color);
}

.features {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.feature {
  flex: 1;
  min-width: 250px;
  text-align: center;
  /* padding: 20px; */
}

.feature-icon {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  transition: transform 0.3s ease;
  /* border: 3px solid var(--secondary-color); */
}

.feature:hover .feature-icon {
  transform: scale(1.05);
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature h3 {
  color: var(--primary-color);
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
  transition: color 0.3s ease;
}

.feature:hover h3 {
  color: var(--secondary-color);
}

.feature p {
  color: var(--text-color);
  font-size: 14px;
  line-height: 1.5;
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
</style>
