<template>
  <div class="loading-container" v-if="loading">
    <div class="loading-content">
      <div class="logo-container">
        <img src="@/assets/logo-ngoi.png" alt="Ngói Spa" class="loading-logo" />
      </div>
      <div class="loading-spinner">
        <div class="spinner-circle"></div>
        <div class="spinner-circle circle2"></div>
        <div class="spinner-circle circle3"></div>
      </div>
      <div class="loading-text">{{ $t('common.loading') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #764908;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeBackground 2s ease-in-out;
}

@keyframes fadeBackground {
  0% { background-color: #fff; }
  50% { background-color: #f5f1ec; }
  100% { background-color: #764908; }
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-container {
  margin-bottom: 30px;
  animation: pulseLogo 2s infinite;
}

@keyframes pulseLogo {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.loading-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.loading-spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.spinner-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #d4a84e;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.circle2 {
  border-top-color: transparent;
  border-right-color: #d4a84e;
  animation-duration: 2s;
}

.circle3 {
  border-top-color: transparent;
  border-bottom-color: #d4a84e;
  animation-duration: 2.5s;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  animation: fadeInOut 1.5s ease-in-out infinite;
}

@keyframes fadeInOut {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
</style>
