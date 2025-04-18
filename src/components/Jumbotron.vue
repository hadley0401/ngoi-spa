<template>
  <div class="jumbotron" :style="backgroundStyle">
    <div class="jumbotron-overlay"></div>
    <div class="jumbotron-content">
      <div class="content-container">
        <h1>{{ title }}</h1>
        <div class="breadcrumbs" v-if="showBreadcrumbs">
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    title: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      default: require('@/assets/jumbotron-bg.jpg')
    },
    showBreadcrumbs: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      };
    }
  }
};
</script>

<style scoped>
.jumbotron {
  position: relative;
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
}

.jumbotron-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100%;
}

.jumbotron-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.content-container {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
}

.jumbotron h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.breadcrumbs {
  font-size: 1.1rem;
}

.breadcrumbs a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumbs a:hover {
  color: white;
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
}

.current {
  color: white;
}

@media (max-width: 768px) {
  .jumbotron {
    height: 200px;
  }
  
  .jumbotron h1 {
    font-size: 2.2rem;
  }
  
  .breadcrumbs {
    font-size: 1rem;
  }
}
</style>
