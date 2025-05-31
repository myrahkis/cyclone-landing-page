<script setup>
import { computed } from 'vue'
import PhotoCarousel from './PhotoCarousel.vue'

const { heading, gradientDirection, rowDirection, texts, pics } = defineProps({
  heading: { type: String, required: true },
  gradientDirection: { type: String, required: true },
  rowDirection: { type: String, default: 'row' },
  texts: { type: Array, required: true },
  pics: { type: Array, required: true },
})

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
const rowStyle = computed(() => ({
  flexDirection: `${rowDirection}`,
}))
</script>

<template>
  <section :style="gradientStyle" class="floor-varient-section">
    <div :style="rowStyle" class="floor-varient-flex">
      <div class="info-cell">
        <h3 style="margin-bottom: 0">{{ heading }}</h3>
        <p v-for="text in texts" :key="text">
          {{ text }}
        </p>
      </div>
      <div class="info-cell">
        <PhotoCarousel
          :pics="pics"
          link="https://othertool.ru/tsiklonnyj-filtr-s-dvojnoj-filtratsiej?search=циклон"
          side-pos="left"
          margin-rem="0.5rem"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.floor-varient-section {
  position: relative;
  display: flex;
  color: white;
  padding: var(--padding-vertical-big-screens) var(--sections-padding);
}
.floor-varient-flex {
  display: flex;
  gap: 2rem;
  min-height: 100%;
  flex-grow: 1;
}
.info-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  width: 50%;
  gap: 1.8rem;
}
.list {
  font-size: 1.8rem;
  margin-left: 1.5rem;
}
.img {
  display: flex;
  align-items: center;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .floor-varient-flex {
    flex-direction: column !important;
    flex-grow: 0;
  }
  .info-cell {
    width: 100%;
    min-height: 0;
  }
}
</style>
