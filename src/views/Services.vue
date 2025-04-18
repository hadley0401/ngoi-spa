<template>
  <div>
    <PageHero 
      :page-title="$t('nav.services')"
      :hero-image="require('@/assets/HAIR-SALON-SPA-3-1024x314.png')"
    />
    <div class="page-inner content">
      <h1>{{ $t('services.title') }}</h1>
      <RiceDivider :centered="true" />
      <p class="description">{{ $t('services.description') }}</p>
      
      <div class="services-list">
        <!-- This is a placeholder for the services content -->
        <p>{{ $t('common.comingSoon') }}</p>
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
  }
};
</script>

<style scoped>
.page-inner {
  padding: 40px 0;
}

h1 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.services-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
</style>
