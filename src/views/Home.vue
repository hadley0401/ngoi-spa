<template>
  <div>
    <Hero />
    <About />
    <Services />
    <SpaceGallery />
    <VideoSection />
    <Review />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import SpaceGallery from "@/components/SpaceGallery.vue";
import VideoSection from "@/components/VideoSection.vue";
import Review from "@/components/Review.vue";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Services,
    SpaceGallery,
    VideoSection,
    Review
  },
};
</script>

<style></style>
