<template>
  <footer class="footer">
    <!-- Main footer content -->
    <div class="footer-main">
      <div class="footer-content">
        <!-- Brand section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="logo-icon">
              <img alt="Ngói Spa Logo" src="@/assets/logo-ngoi.png"/>
            </div>
            <div class="brand-text">
              <h2 class="brand-name">Ngói Spa</h2>
              <p class="brand-tagline">{{ $t('footer.tagline') }}</p>
            </div>
          </div>
          <p class="brand-description">
            {{ $t('footer.description') }}
          </p>
          <div class="social-links">
            <a class="social-link facebook" href="https://www.facebook.com/ngoispa" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="social-link instagram" href="https://www.instagram.com/ngoispa/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="social-link tiktok" href="https://www.tiktok.com/@ngoispa" target="_blank">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        <!-- Contact info -->
        <div class="footer-section contact-section">
          <h3>{{ $t('footer.contact') }}</h3>
          <div class="contact-items">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div class="contact-details">
                <strong>{{ $t('footer.address') }}</strong>
                <span>353/11A Nguyễn Trọng Tuyển<br>Phường 1, Tân Bình, TP.HCM</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div class="contact-details">
                <strong>{{ $t('footer.phone') }}</strong>
                <span>0773 222 558</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div class="contact-details">
                <strong>{{ $t('footer.email') }}</strong>
                <span>ngoispa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Opening hours -->
        <div class="footer-section hours-section">
          <h3>{{ $t('footer.openingHours') }}</h3>
          <div class="hours-grid">
            <div class="hours-item">
              <span class="day">{{ $t('footer.everyday') }}</span>
              <span class="time">9:30 - 20:00</span>
            </div>
            <div class="hours-note">
              <i class="fas fa-info-circle"></i>
              <span>{{ $t('footer.appointmentNote') }}</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="footer-section services-section">
          <h3>{{ $t('footer.services') }}</h3>
          <ul class="services-list">
            <li><a href="#services">{{ $t('footer.servicesItems.massage') }}</a></li>
            <li><a href="#services">{{ $t('footer.servicesItems.facial') }}</a></li>
            <li><a href="#services">{{ $t('footer.servicesItems.nail') }}</a></li>
            <li><a href="#services">{{ $t('footer.servicesItems.herbal') }}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright section -->
    <div class="footer-bottom">
      <div class="copyright-content">
        <div class="copyright-left">
          <p>{{ $t('footer.copyright') }}</p>
        </div>
        <div class="copyright-right">
          <!--          <p>{{ $t('footer.designedBy') }}</p>-->
        </div>
      </div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #F5F2EC;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="rgba(255,255,255,0.03)" cx="20" cy="20" r="3"/><circle fill="rgba(255,255,255,0.02)" cx="80" cy="80" r="4"/><circle fill="rgba(255,255,255,0.025)" cx="50" cy="10" r="2"/><circle fill="rgba(255,255,255,0.03)" cx="10" cy="60" r="2"/></svg>');
  animation: subtleFloat 30s infinite ease-in-out;
}

.footer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
  radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
  pointer-events: none;
}

/* Decorative border - REMOVED */

/* Main footer */
.footer-main {
  padding: 80px 0 40px;
  position: relative;
  z-index: 2;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  gap: 60px;
}

/* Brand section */
.footer-brand {
  max-width: 400px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: #764908;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 400;
  margin: 0 0 5px 0;
  color: #FAF8F5;
}

.brand-tagline {
  font-size: 0.9rem;
  color: rgba(245, 242, 236, 0.8);
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.brand-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(245, 242, 236, 0.9);
  margin-bottom: 30px;
}

/* Social links */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #F5F2EC;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(118, 73, 9, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  background: rgba(118, 73, 9, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: -1;
}

.social-link.facebook::before {
  background: #1877F2;
}

.social-link.instagram::before {
  background: linear-gradient(45deg, #F56040, #E1306C, #833AB4);
}

.social-link.tiktok::before {
  background: #000000;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  border-color: rgba(168, 113, 26, 0.6);
  color: #FFFFFF;
}

.social-link:hover::before {
  opacity: 1;
}

/* Footer sections */
.footer-section {
  position: relative;
}

.footer-section h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: #c49e12;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #c49e12;
  border-radius: 1px;
}

/* Contact section */
.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 12px 0;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(3px);
}

.contact-item i {
  width: 20px;
  color: #c49e12;
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-details strong {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  color: #FAF8F5;
}

.contact-details span {
  color: rgba(245, 242, 236, 0.9);
  line-height: 1.6;
}

/* Hours section */
.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(118, 73, 9, 0.3);
}

.hours-item .day {
  font-weight: 500;
  color: #FAF8F5;
}

.hours-item .time {
  color: #c49e12;
  font-weight: 400;
}

.hours-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 0;
  font-size: 0.9rem;
  color: rgba(245, 242, 236, 0.8);
}

.hours-note i {
  color: #c49e12;
}

/* Services section */
.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-list li {
  margin-bottom: 12px;
}

.services-list a {
  color: rgba(245, 242, 236, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  padding: 8px 0;
  position: relative;
  padding-left: 20px;
}

.services-list a::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #c49e12;
  transition: all 0.3s ease;
  font-weight: normal;
}

.services-list a:hover {
  color: #FAF8F5;
  transform: translateX(5px);
}

.services-list a:hover::before {
  transform: translateX(5px);
  color: #FAF8F5;
}

/* Footer bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.6);
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.copyright-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright-left p,
.copyright-right p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(245, 242, 236, 0.7);
}

/* Animations */
@keyframes subtleFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.6;
  }
  25% {
    transform: translate(8px, -8px) rotate(1deg);
    opacity: 0.8;
  }
  50% {
    transform: translate(-5px, 5px) rotate(-1deg);
    opacity: 0.7;
  }
  75% {
    transform: translate(5px, -3px) rotate(0.5deg);
    opacity: 0.9;
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: none;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }

  .footer-main {
    padding: 60px 0 30px;
  }

  .brand-logo {
    justify-content: center;
    text-align: center;
  }

  .brand-description {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-item {
    justify-content: center;
    text-align: left;
  }

  .copyright-content {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .brand-logo {
    flex-direction: column;
    gap: 15px;
  }

  .logo-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .brand-name {
    font-size: 1.8rem;
  }

  .social-links {
    gap: 12px;
  }

  .social-link {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>