<script setup>
import { computed } from 'vue'
import PhotoCarousel from './PhotoCarousel.vue'

const { pics1, pics2, gradientDirection, layoutVariant } = defineProps({
  pics1: { type: Array },
  pics2: { type: Array },
  gradientDirection: { type: String, required: true },
  layoutVariant: { type: String, required: true },
})

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
const gridStyle = computed(() => ({
  gridTemplateAreas:
    layoutVariant === 'reverse'
      ? `"img-cell-1 img-cell-1 text-cell-1" "text-cell-2 img-cell-2 img-cell-2"`
      : `"text-cell-1 img-cell-1 img-cell-1" "img-cell-2 img-cell-2 text-cell-2"`,
}))
</script>

<template>
  <section :style="gradientStyle" class="third-section">
    <div class="thrid-grid" :style="gridStyle">
      <div class="grid-cell text-cell-1">
        <slot name="text-cell-1" />
      </div>
      <div class="grid-cell img-cell-1">
        <PhotoCarousel
          :pics="pics1"
          link="https://othertool.ru/shlang-pvx-poleuretan-armirovannyj-50mm?search=шланг"
          side-pos="left"
          margin-rem="0.5rem"
        />
      </div>
      <div class="grid-cell img-cell-2">
        <PhotoCarousel
          :pics="pics2"
          link="https://othertool.ru/shlang-pvx-s-fitingami-50mm?search=шланг"
          side-pos="right"
          margin-rem="0.5rem"
        />
      </div>
      <div class="grid-cell text-cell-2">
        <slot name="text-cell-2" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  color: white;
  padding: 3.5rem;
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(200px, 1fr) minmax(400px, 1fr);
  gap: 2rem;
  width: 100%;
  height: 100%;
}
.grid-cell {
  display: flex;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.text-cell-1 {
  grid-area: text-cell-1;
}
.img-cell-1 {
  grid-area: img-cell-1;
}
.img-cell-2 {
  grid-area: img-cell-2;
}
.text-cell-2 {
  grid-area: text-cell-2;
}
.img {
  height: 100%;
  max-width: 100%;
  width: 70%;
  object-fit: contain;
}
.equipment {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-left: 1rem;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .thrid-grid {
    display: flex;
    flex-direction: column;
  }
  .img-cell-2 {
    order: 4;
  }
}
</style>
