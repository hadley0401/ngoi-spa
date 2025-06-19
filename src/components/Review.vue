<template>
  <section class="reviews-section">
    <div class="container">
      <div class="section-header fade-in">
        <div class="section-subtitle">{{ $t('reviews.subtitle') }}</div>
        <h2 class="section-title">{{ $t('reviews.title') }}</h2>
        <p class="section-description">{{ $t('reviews.description') }}</p>
      </div>

      <div class="reviews-grid">
        <div
            v-for="(review, index) in reviews"
            :key="index"
            :style="{ animationDelay: `${index * 0.2}s` }"
            class="review-card fade-in"
        >
          <div class="quote-icon">
            <i class="fas fa-quote-left"></i>
          </div>
          <p class="review-text">{{ $t(`reviews.items.${review.key}.text`) }}</p>
          <div class="review-author">
            <span :class="['fi', review.flagClass, 'fis', 'author-flag']"></span>
            <div class="author-info">
              <h4>{{ $t(`reviews.items.${review.key}.name`) }}</h4>
              <p>{{ $t(`reviews.items.${review.key}.title`) }}</p>
            </div>
          </div>
          <div class="rating">
            <i v-for="star in 5" :key="star" class="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      reviews: [
        {
          key: 'review1',
          flagClass: 'fi-vn'
        },
        {
          key: 'review2',
          flagClass: 'fi-tw'
        },
        {
          key: 'review3',
          flagClass: 'fi-us'
        }
      ]
    }
  },
  mounted() {
    // Initialize scroll animations
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observe all fade-in elements
      this.$el.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
</script>

<style scoped>
.reviews-section {
  padding: 120px 0;
  background: var(--white, #FFFFFF);
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.section-subtitle {
  color: var(--primary-gold, #C4A461);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.section-title {
  font-size: 3.2rem;
  color: var(--text-dark, #4A4A4A);
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Georgia', serif;
}

.section-description {
  font-size: 1.2rem;
  color: var(--text-light, #777777);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 80px;
}

.review-card {
  background: var(--cream, #F5F2E9);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(196, 164, 97, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.review-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  position: absolute;
  top: -15px;
  left: 30px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-gold, #C4A461), var(--dark-gold, #B8954A));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(196, 164, 97, 0.3);
}

.review-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-dark, #4A4A4A);
  margin: 25px 0;
  font-style: italic;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.review-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: auto;
}

.author-flag {
  width: 50px !important;
  height: 50px !important;
  border-radius: 50% !important;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.8);
  overflow: hidden;
}

/* Cờ emoji styles */
.review-card:hover .author-flag {
  transform: scale(1.1);
}

.author-info {
  text-align: left;
}

.author-info h4 {
  color: var(--text-dark, #4A4A4A);
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: 600;
}

.author-info p {
  color: var(--text-light, #777777);
  font-size: 0.9rem;
  margin: 0;
}

.rating {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
}

.rating .fas.fa-star {
  color: #FFD700;
  font-size: 1.1rem;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .reviews-section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 60px;
  }

  .review-card {
    padding: 30px 25px;
  }

  .review-text {
    font-size: 1rem;
  }

  .author-flag {
    width: 45px !important;
    height: 45px !important;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .review-card {
    padding: 25px 20px;
  }

  .author-info h4 {
    font-size: 1rem;
  }

  .author-info p {
    font-size: 0.8rem;
  }

  .author-flag {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>