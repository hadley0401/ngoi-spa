<template>
  <header class="header has-sticky sticky-jump">
    <div class="header-wrapper">
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
            
            <!-- Navigation -->
            <nav class="main-nav">
              <ul>
                <li><router-link :to="{ name: 'Home' }">{{ $t('nav.home') }}</router-link></li>
                <li><router-link :to="{ name: 'About' }">{{ $t('nav.about') }}</router-link></li>
                <li><router-link :to="{ name: 'Services' }">{{ $t('nav.services') }}</router-link></li>
                <li><router-link :to="{ name: 'Contact' }">{{ $t('nav.contact') }}</router-link></li>
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
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentLang: this.$i18n ? this.$i18n.locale : 'vi',
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n) {
        this.$i18n.locale = this.currentLang;
        // Store language preference in localStorage for persistence
        localStorage.setItem('userLanguage', this.currentLang);
      }
    },
  },
  mounted() {
    // Restore user's language preference if available
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage && this.$i18n) {
      this.currentLang = savedLanguage;
      this.$i18n.locale = savedLanguage;
    }
  }
};
</script>

<style scoped>
.header,
.header-wrapper {
  background-position: 50% 0;
  background-size: cover;
  position: relative;
  transition: background-color 0.3s, opacity 0.3s;
  width: 100%;
  z-index: 30;
}

.header-main {
  background-color: #764908;
  position: relative;
  z-index: 10;
  padding: 10px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  width: 120px;
  margin-right: 20px;
}

.logo a {
  display: block;
  margin: 0;
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
  align-items: center;
  background: transparent;
}

.main-nav ul li {
  margin: 0 1.5em;
}

.main-nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 5px;
  font-weight: 300;
  font-stretch: expanded;
  transition: color 0.3s;
}

.main-nav ul li a:hover,
.main-nav ul li a.active {
  color: var(--secondary-color);
}

.language-selector {
  margin-left: auto;
}

.lang-select {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    align-items: center;
  }
  
  #logo {
    margin-bottom: 15px;
    margin-right: 0;
  }
  
  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .main-nav ul li {
    margin: 5px 10px;
  }
  
  .language-selector {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
