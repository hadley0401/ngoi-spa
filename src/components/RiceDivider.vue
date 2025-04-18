<template>
  <div class="rice-divider" :class="{ 'centered': centered }">
    <svg
      class="divider-svg"
      width="420"
      height="56"
      viewBox="0 0 420 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <!-- Thinner left line -->
      <line x1="24" y1="28" x2="160" y2="28" stroke="var(--primary-color)" stroke-width="1" stroke-linecap="round"/>
      <!-- Thinner right line -->
      <line x1="260" y1="28" x2="396" y2="28" stroke="var(--primary-color)" stroke-width="1" stroke-linecap="round"/>
      <!-- Center the spinning group at (210,28) and scale -->
      <g transform="translate(210,28)">
        <g class="spinning-symbol">
          <g transform="scale(1.2)">
            <g>
              <path d="M0,-16 Q4,-8 0,0 Q-4,-8 0,-16 Z" fill="var(--primary-color)"/>
              <path d="M0,0 Q8,-4 16,0 Q8,4 0,0 Z" fill="none" stroke="var(--primary-color)" stroke-width="1.1"/>
            </g>
            <g transform="rotate(90)">
              <path d="M0,-16 Q4,-8 0,0 Q-4,-8 0,-16 Z" fill="var(--primary-color)"/>
              <path d="M0,0 Q8,-4 16,0 Q8,4 0,0 Z" fill="none" stroke="var(--primary-color)" stroke-width="1.1"/>
            </g>
            <g transform="rotate(180)">
              <path d="M0,-16 Q4,-8 0,0 Q-4,-8 0,-16 Z" fill="var(--primary-color)"/>
              <path d="M0,0 Q8,-4 16,0 Q8,4 0,0 Z" fill="none" stroke="var(--primary-color)" stroke-width="1.1"/>
            </g>
            <g transform="rotate(270)">
              <path d="M0,-16 Q4,-8 0,0 Q-4,-8 0,-16 Z" fill="var(--primary-color)"/>
              <path d="M0,0 Q8,-4 16,0 Q8,4 0,0 Z" fill="none" stroke="var(--primary-color)" stroke-width="1.1"/>
            </g>
            <!-- Small circle decorations between petals -->
            <circle cx="0" cy="-20" r="2.1" fill="var(--primary-color)"/>
            <circle cx="0" cy="20" r="2.1" fill="var(--primary-color)"/>
            <circle cx="-20" cy="0" r="2.1" fill="var(--primary-color)"/>
            <circle cx="20" cy="0" r="2.1" fill="var(--primary-color)"/>
            <!-- Small diamond decorations at diagonals -->
            <rect x="-11.5" y="-11.5" width="3" height="3" fill="var(--primary-color)" transform="rotate(45 -11.5 -11.5)"/>
            <rect x="8.5" y="-11.5" width="3" height="3" fill="var(--primary-color)" transform="rotate(45 8.5 -11.5)"/>
            <rect x="-11.5" y="8.5" width="3" height="3" fill="var(--primary-color)" transform="rotate(45 -11.5 8.5)"/>
            <rect x="8.5" y="8.5" width="3" height="3" fill="var(--primary-color)" transform="rotate(45 8.5 8.5)"/>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'RiceDivider',
  props: {
    centered: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.rice-divider {
  margin: 0.5rem 0 2rem;
  display: flex;
}

.rice-divider.centered {
  justify-content: center;
}

.divider-svg {
  display: block;
  max-width: 100%;
  height: auto;
  min-height: 30px;
  max-height: 42px;
}

.spinning-symbol {
  animation: spin-divider 6.5s linear infinite;
  transform-box: fill-box;
  transform-origin: 50% 50%;
}

@keyframes spin-divider {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .rice-divider {
    margin: 0.3rem 0 1.5rem;
  }
  
  .divider-svg {
    width: 100%;
    max-width: 320px;
    min-height: 24px;
  }
  
  .spinning-symbol {
    animation-duration: 8s;
  }
}
</style>
