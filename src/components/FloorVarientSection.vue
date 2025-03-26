<script setup>
import { computed } from 'vue'

const { gradientDirection, rowDirection, floorVarientTexts, characteristic } = defineProps({
  gradientDirection: { type: String, required: true },
  rowDirection: { type: String, required: true },
  floorVarientTexts: { type: Array, required: true },
  characteristic: { type: Object, required: false, default: () => ({}) },
  equipment: { type: Object, required: false, default: () => ({}) },
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
        <h3 style="margin-bottom: 0">Напольное исполнение</h3>
        <p v-for="text in floorVarientTexts" :key="text">
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
        <img src="/floor-var.png" alt="" class="img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.floor-varient-section {
  position: relative;
  min-height: 100vh;
  color: white;
  padding: 3.5rem;
}
.floor-varient-flex {
  display: flex;
  gap: 2rem;
  height: 100%;
}
.info-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;
  width: 50%;
  gap: 1.8rem;
}
.list {
  font-size: 1.8rem;
  margin-left: 1.5rem;
}
.img {
  height: 100%;
  max-width: 100%;
  width: 65%;
  object-fit: contain;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .floor-varient-flex {
    flex-direction: column !important;
  }
  .info-cell {
    width: 100%;
  }
}
</style>
