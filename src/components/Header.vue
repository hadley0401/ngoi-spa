<template>
  <header :class="{ 'scrolled': isScrolled }" class="header has-sticky sticky-jump">
    <div class="header-main">
      <div class="container">
        <div class="header-inner flex-row">
          <!-- Logo -->
          <div id="logo" class="flex-col logo">
            <a href="/" rel="home" title="Ngói Spa - Hair Salon &amp; Spa">
              <div class="logo-container">
                <img
                    alt="Ngói Spa"
                    class="header_logo"
                    height="120"
                    src="@/assets/logo-ngoi.png"
                    width="120"
                />
                <div class="logo-text">
                  <span class="logo-title">Ngói Spa</span>
                  <span class="logo-subtitle">Beauty & Wellness</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Mobile menu toggle -->
          <div class="mobile-menu-toggle" @click="toggleMobileMenu">
            <div :class="{ 'is-active': mobileMenuOpen }" class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <!-- Navigation -->
          <nav :class="{ 'mobile-active': mobileMenuOpen }" class="main-nav">
            <ul>
              <li>
                <router-link to="/" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'About' }" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Services' }" @click="closeMobileMenu">{{ $t('nav.services') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Contact' }" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link>
              </li>
              <li class="language-selector">
                <div class="lang-wrapper">
                  <i class="fas fa-globe"></i>
                  <select v-model="currentLang" class="lang-select" @change="changeLanguage">
                    <option value="vi">{{ $t('language.vietnamese') }}</option>
                    <option value="en">{{ $t('language.english') }}</option>
                  </select>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- Mobile menu overlay -->
    <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentLang: this.$i18n.locale,
      mobileMenuOpen: false,
      isScrolled: false,
      handleResize: null,
      handleScroll: null
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLang;
      localStorage.setItem("userLanguage", this.currentLang);
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.classList.toggle('menu-open', this.mobileMenuOpen);
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.classList.remove('menu-open');
    },
    onScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    // Close mobile menu on window resize to desktop size
    this.handleResize = () => {
      if (window.innerWidth >= 992 && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    };

    this.handleScroll = this.onScroll;

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.header {
  background-position: 50% 0;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  mask: linear-gradient(to bottom, black 75%, transparent 100%);
  -webkit-mask: linear-gradient(to bottom, black 75%, transparent 100%);
}

.header.scrolled {
  mask: none !important;
  -webkit-mask: none !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: #764908;
}

.header-main {
  background: transparent;
  position: relative;
  z-index: 10;
  padding: 0;
  transition: all 0.4s ease;
  box-shadow: none;
}

.header.scrolled .header-main {
  background: #764908;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  transition: padding 0.3s ease;
}

.header.scrolled .header-inner {
  padding: 12px 0;
}

/* Logo Styling */
#logo {
  margin-right: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.logo a:hover .logo-container {
  transform: translateY(-2px);
}

.logo a {
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
}

#logo img {
  width: 55px;
  height: 55px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.logo-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Navigation Styling */
.main-nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 35px;
}

.main-nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1.05rem;
  padding: 12px 6px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.main-nav ul li a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background: #e8b40a;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateX(-50%);
  border-radius: 1px;
}

.main-nav ul li a:hover::before,
.main-nav ul li a.router-link-active::before {
  width: 100%;
}

.main-nav ul li a:hover,
.main-nav ul li a.router-link-active {
  color: #e8b40a;
  transform: translateY(-1px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Language Selector */
.language-selector {
  margin-left: 20px;
}

.lang-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 8px 15px;
  backdrop-filter: blur(1px);
  transition: all 0.3s ease;
  gap: 8px;
}

.lang-wrapper:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.lang-wrapper i.fa-globe {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.lang-wrapper i.fa-chevron-down {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.lang-select {
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 500;
  appearance: none;
  outline: none;
}

.lang-select option {
  background: rgba(139, 119, 85, 0.95);
  color: #FFFFFF;
  padding: 8px;
}

/* Mobile Menu Styles */
.mobile-menu-toggle {
  display: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger {
  width: 28px;
  height: 22px;
  position: relative;
  margin: 0 15px;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #FFFFFF;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 1px;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.is-active span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
  left: -30px;
}

.hamburger.is-active span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  backdrop-filter: blur(8px);
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .main-nav ul {
    gap: 25px;
  }
}

@media (max-width: 992px) {
  .logo-text {
    display: none;
  }

  #logo img {
    width: 50px;
    height: 50px;
  }

  .main-nav {
    display: none;
  }

  .main-nav.mobile-active {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
    rgba(139, 119, 85, 0.98) 0%,
    rgba(160, 135, 76, 0.98) 100%);
    z-index: 1000;
    padding: 100px 30px 30px;
    text-align: center;
    backdrop-filter: blur(20px);
  }

  .main-nav.mobile-active ul {
    flex-direction: column;
    height: auto;
    justify-content: center;
    gap: 30px;
    margin-bottom: 0;
  }

  .main-nav.mobile-active ul li a {
    font-size: 1.3rem;
    padding: 15px 20px;
    display: block;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .language-selector {
    margin: 40px 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 20px;
  }

  .header-inner {
    padding: 15px 0;
  }

  .header.scrolled .header-inner {
    padding: 12px 0;
  }
}

/* Smooth animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-nav.mobile-active {
  animation: fadeInDown 0.3s ease;
}
</style>