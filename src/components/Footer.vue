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
        <ul>
          <li>{{ $t('footer.mondayToFriday') }}: 9:00 - 20:00</li>
          <li>{{ $t('footer.weekend') }}: 10:00 - 22:00</li>
        </ul>
      </div>
      
      <div class="footer-section">
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
  background-color: #8b5a00; /* Reverting to original primary-color */
  color: var(--color-white);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, 
    transparent, 
    var(--color-secondary) 15%, 
    var(--color-secondary) 85%, 
    transparent);
  opacity: 0.5;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 2;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

.footer-section h3 {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-sm);
  font-weight: 400;
  position: relative;
  padding-bottom: var(--spacing-xs);
}

.footer-section h3:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 1px;
  background-color: var(--color-secondary);
}

.footer-section p {
  font-size: var(--text-base);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
  opacity: 0.9;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-base);
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.social-icon {
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: var(--color-white);
  transition: all var(--transition-normal);
  font-size: var(--text-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.social-icon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-secondary);
  transform: translateY(100%);
  transition: transform var(--transition-normal);
  z-index: -1;
}

.social-icon:hover {
  color: var(--color-white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.social-icon:hover::before {
  transform: translateY(0);
}

.copyright {
  text-align: center;
  padding-top: var(--spacing-lg);
  margin-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: var(--text-sm);
  opacity: 0.8;
}

/* Responsive styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: var(--spacing-lg);
    padding-right: 0;
    text-align: center;
  }
  
  .footer-section h3:after {
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
  }
  
  .social-icons {
    justify-content: center;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .footer-content {
    flex-wrap: wrap;
  }
  
  .footer-section {
    flex: 0 0 50%;
    margin-bottom: var(--spacing-xl);
  }
}
</style>