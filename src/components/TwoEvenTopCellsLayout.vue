<script setup>
import { computed } from 'vue'

const { gradientDirection, topText, bottomText } = defineProps({
  gradientDirection: { type: String, requied: true },
  topText: { type: String, required: true },
  bottomText: { type: String, requied: true },
})

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
</script>

<template>
  <section :style="gradientStyle" class="third-section" id="accessory">
    <h2>Аксессуары и дополнительное оборудование</h2>
    <div class="thrid-grid">
      <div class="grid-cell first-cell">
        <p>{{ topText }}</p>
      </div>
      <div class="grid-cell second-cell">
        <img src="/desc-filter-img.png" alt="" class="img" />
      </div>
      <div class="grid-cell">
        <img src="/full-height.png" alt="" class="img" />
      </div>
      <div class="grid-cell last-cell">
        <p>{{ bottomText }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  min-height: 100vh;
  color: white;
  padding: 3.5rem;
  /* background: linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4)); */
}

.thrid-grid {
  display: grid;
  grid-template-columns: repeat(4, 0.25fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  min-width: 100%;
  height: 100%;
}

.grid-cell {
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;
  /* &:last-child,
  &:first-child {
    padding-bottom: 0;
    padding-top: 0;
  } */
}

.first-cell {
  grid-column: 1 / 3;
}
.second-cell {
  display: flex;
  justify-content: center;
  grid-column: 3 / -1;
}
.last-cell {
  grid-column: 2 / -1;
}

.img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .thrid-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
