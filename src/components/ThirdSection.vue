<script setup>
import { computed } from 'vue'

const { gradientDirection, equipments1, equipments2, text1, text2 } = defineProps({
  gradientDirection: { type: String, requied: true },
  equipments1: { type: Object, default: () => ({}) },
  equipments2: { type: Object, default: () => ({}) },
  text1: { type: String },
  text2: { type: String },
})

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
</script>

<template>
  <section :style="gradientStyle" class="third-section">
    <div class="thrid-grid">
      <div class="grid-cell">
        <h3 v-if="equipments1.header">{{ equipments1.header }}</h3>
        <p v-if="equipments1.subheader">{{ equipments1.subheader }}:</p>
        <p v-else>
          {{ text1 }}
        </p>
        <ul class="equipment" v-if="equipments1.equip">
          <li v-for="item in equipments1.equip" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-cell img-cell-1">
        <img src="/desc-img.png" alt="" class="img" />
      </div>
      <div class="grid-cell img-cell-2">
        <img src="/full-height.png" alt="" class="img" />
      </div>
      <div class="grid-cell last-cell">
        <h3 v-if="equipments1.header">
          Насадка на циклонный фильтр SN50T3 — вторая ступень фильтрации
        </h3>
        <p v-if="equipments1.subheader">Комплектация:</p>
        <p v-if="text2">
          {{ text2 }}
        </p>
        <ul class="equipment" v-if="equipments2.equip">
          <li v-for="item in equipments2.equip" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  height: 100vh;
  color: white;
  padding: 3.5rem;
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0.5fr);
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

  &:last-child,
  &:first-child {
    padding-bottom: 0;
    padding-top: 0;
  }
}
.img-cell-1 {
  grid-column: 2 / -1;
}
.img-cell-2 {
  grid-column: 1 / 3;
}
.img {
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
}
.equipment {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-left: 1rem;
}
</style>
