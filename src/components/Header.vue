<template>
  <header class="header has-sticky sticky-jump">
      <div class="header-main">
        <div class="container">
          <div class="header-inner flex-row">
            <!-- Logo -->
            <div id="logo" class="flex-col logo">
              <a href="/" title="Ngói Spa - Hair Salon &amp; Spa" rel="home">
                <img
                  width="120"
                  height="120"
                  src="@/assets/logo-ngoi.png"
                  class="header_logo"
                  alt="Ngói Spa"
                />
              </a>
            </div>
            
            <!-- Mobile menu toggle -->
            <div class="mobile-menu-toggle" @click="toggleMobileMenu">
              <div class="hamburger" :class="{ 'is-active': mobileMenuOpen }">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            
            <!-- Navigation -->
            <nav class="main-nav" :class="{ 'mobile-active': mobileMenuOpen }">
              <ul>
                <li><router-link to="/" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link></li>
                <li><router-link :to="{ name: 'About' }" @click="closeMobileMenu">{{ $t('nav.about') }}</router-link></li>
                <li><router-link :to="{ name: 'Services' }" @click="closeMobileMenu">{{ $t('nav.services') }}</router-link></li>
                <li><router-link :to="{ name: 'Contact' }" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link></li>
                <li class="language-selector">
                  <select v-model="currentLang" @change="changeLanguage" class="lang-select">
                    <option value="vi">{{ $t('language.vietnamese') }}</option>
                    <option value="en">{{ $t('language.english') }}</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <!-- Mobile menu overlay -->
      <div class="mobile-menu-overlay" v-if="mobileMenuOpen" @click="closeMobileMenu"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentLang: this.$i18n.locale,
      mobileMenuOpen: false,
      handleResize: null
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
    }
  },
  mounted() {
    // Close mobile menu on window resize to desktop size
    this.handleResize = () => {
      if (window.innerWidth >= 992 && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    };
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.header {
  background-position: 50% 0;
  background-size: cover;
  position: relative;
  transition: all var(--transition-normal);
  width: 100%;
  z-index: 30;
}

.header-main {
  background-color: #764908; /* Reverting to original color */
  position: relative;
  z-index: 10;
  padding: var(--spacing-md) 0;
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  width: 120px;
  margin-right: var(--spacing-lg);
}

.logo a {
  display: block;
  margin: 0;
  transition: opacity var(--transition-normal);
}

.logo a:hover {
  opacity: 0.9;
}

#logo img {
  max-height: 60px;
  width: auto;
  display: block;
}

.main-nav {
  flex: 1;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  align-items: center;
}

.main-nav ul li {
  margin: 0 var(--spacing-md);
}

.main-nav ul li a {
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--text-base);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all var(--transition-normal);
  display: inline-block;
  position: relative;
  border-bottom: 1px solid transparent;
}

.main-nav ul li a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--color-secondary);
  transition: width var(--transition-normal);
}

.main-nav ul li a:hover:before,
.main-nav ul li a.active:before {
  width: 100%;
}

.main-nav ul li a:hover,
.main-nav ul li a.active {
  color: var(--color-secondary);
}

.language-selector select {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.language-selector select:hover {
  border-color: var(--color-secondary);
}

.language-selector select option {
  background-color: var(--color-primary-dark);
  color: var(--color-white);
}

/* Mobile Menu Styles */
.mobile-menu-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  width: 30px;
  height: 24px;
  position: relative;
  margin: 0 var(--spacing-md);
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--color-white);
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 0.25s ease-in-out;
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
  backdrop-filter: blur(4px);
}

@media (max-width: 992px) {
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
    background-color: var(--color-primary-dark);
    z-index: 25;
    padding: 80px var(--spacing-lg) var(--spacing-lg);
    text-align: center;
  }

  .main-nav.mobile-active ul {
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  .main-nav.mobile-active ul li {
    margin: var(--spacing-md) 0;
  }

  .main-nav.mobile-active ul li a {
    font-size: var(--text-lg);
    padding: var(--spacing-xs) var(--spacing-md);
  }

  .mobile-menu-toggle {
    display: block;
    z-index: 30;
  }

  .language-selector {
    margin-top: var(--spacing-xl);
  }
}
</style>
