<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ $t('footer.address') }}</h3>
        <p>123 Nguyễn Văn A, Quận Tân Bình, TP.HCM</p>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.contact') }}</h3>
        <p>{{ $t('footer.phone') }}: +84 123 456 789</p>
        <p>{{ $t('footer.email') }}: info@ngoispa.com</p>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.openingHours') }}</h3>
        <p>9:30 - 22:00</p>
        <p>{{ $t('footer.everyday') }}</p>
      </div>
      
      <div class="footer-section social">
        <h3>{{ $t('footer.followUs') }}</h3>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
    
    <div class="copyright">
      <p>{{ $t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding-right: 20px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-color);
}

.footer-section p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
}

.copyright {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 25px;
  }
}
</style>