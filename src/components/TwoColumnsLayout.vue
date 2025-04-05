<script setup>
import { computed } from 'vue'
import PhotoCarousel from './PhotoCarousel.vue'

const { heading, gradientDirection, rowDirection, texts, characteristic, pics } = defineProps({
  heading: { type: String, required: true },
  gradientDirection: { type: String, required: true },
  rowDirection: { type: String, required: true },
  texts: { type: Array, required: true },
  characteristic: { type: Object, required: false, default: () => ({}) },
  equipment: { type: Object, required: false, default: () => ({}) },
  pics: { type: Array },
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
        <p>{{ characteristic.header }}</p>
        <ul class="list">
          <li v-for="charac in characteristic.charac" :key="charac">
            <p>{{ charac }}</p>
          </li>
        </ul>
        <p>{{ equipment.header }}</p>
        <ul class="list">
          <li v-for="equip in equipment.equip" :key="equip">
            <p>{{ equip }}</p>
          </li>
        </ul>
      </div>
      <div class="info-cell">
        <PhotoCarousel :pics="pics" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.floor-varient-section {
  position: relative;
  display: flex;
  /* min-height: 100vh; */
  color: white;
  padding: 3.5rem;
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
  min-height: 100%;
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
  /* height: 100%;
  max-width: 100%;
  width: 65%;
  object-fit: contain; */
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
