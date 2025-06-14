<template>
  <div>
    <PageHero 
      :page-title="$t('nav.contact')"
      :hero-image="require('@/assets/HAIR-SALON-SPa-1024x314.png')"
    />
    <div class="page-inner content">
      <h1>{{ $t('nav.contact') }}</h1>
      <RiceDivider :centered="true" />
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-item">
            <h3>{{ $t('footer.address') }}</h3>
            <p>353/11A Nguyễn Trọng Tuyển, Phường 1, Tân Bình, TP.HCM</p>
          </div>
          
          <div class="info-item">
            <h3>{{ $t('footer.phone') }}</h3>
            <p>0773 222 558</p>
          </div>
          
          <div class="info-item">
            <h3>{{ $t('footer.email') }}</h3>
            <p>ngoispa@gmail.com</p>
          </div>
          
          <div class="info-item">
            <h3>{{ $t('footer.openingHours') }}</h3>
            <p>9:30 - 20:00</p>
          </div>
        </div>
      </div>
      
      <!-- Google Map Section -->
      <div class="map-container">
        <h2>{{ $t('contact.findUs') }}</h2>
        <div class="google-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1702043265072!2d106.66451961246436!3d10.79827278930738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293bdd3d9e57%3A0x286f860ba25730ee!2zTmfDs2kgU3Bh!5e0!3m2!1svi!2s!4v1744738970682!5m2!1svi!2s" 
            width="100%"
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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
    }
  },
}
</script>

<style scoped>
.page-inner {
  padding: 40px 0;
}

h1 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 40px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto 60px;
}

.contact-info, .contact-form {
  flex: 1;
  min-width: 300px;
}

.info-item {
  margin-bottom: 25px;
}

.info-item h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 18px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.submit-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: var(--secondary-color);
}

/* Google Map Styles */
.map-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 15px;
}

.map-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.google-map {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }
  
  .google-map iframe {
    height: 350px;
  }
}
</style>
