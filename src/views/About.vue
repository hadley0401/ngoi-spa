<template>
  <div>
    <PageHero 
      :page-title="$t('nav.about')"
      :hero-image="require('@/assets/HAIR-SALON-SPa-2-1024x314.png')"
    />
    <div class="page-inner content">
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
</template>

<script setup>
import PageHero from '@/components/PageHero.vue';
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
</style>
