<script setup>
import PhotoCarousel from './PhotoCarousel.vue'

const { nozzleSlides, equipments1, equipments2 } = defineProps({
  nozzleSlides: { type: Array },
  equipments1: { type: Object, default: () => ({}) },
  equipments2: { type: Object, default: () => ({}) },
})
</script>

<template>
  <section class="third-section">
    <div class="thrid-grid">
      <div class="grid-cell text-cell-1">
        <h3>{{ equipments1.header }}</h3>
        <p>{{ equipments1.subheader }}:</p>
        <ul class="equipment" v-if="equipments1.equip">
          <li v-for="item in equipments1.equip" :key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
      <div class="grid-cell img-cell-1">
        <img src="/bundling.png" alt="" class="img" />
      </div>
      <div class="grid-cell img-cell-2">
        <PhotoCarousel :pics="nozzleSlides" />
      </div>
      <div class="grid-cell text-cell-2">
        <h3>Насадка на циклонный фильтр SN50T3 — вторая ступень фильтрации</h3>
        <p>Комплектация:</p>
        <ul class="equipment" v-if="equipments2.equip">
          <li v-for="item in equipments2.equip" :key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  /*  -height: 100vh; */
  color: white;
  padding: 3.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto minmax(52rem, auto);
  gap: 2rem;
  width: 100%;
  height: 100%;
}
.grid-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.text-cell-1 {
  grid-column: 1 / 2;
}
.img-cell-1 {
  grid-column: 2 / -1;
}
.img-cell-2 {
  grid-column: 1 / 3;
  grid-row: 2;
}
.text-cell-2 {
  grid-column: 3 / -1;
  grid-template-rows: 2;
}
.img {
  align-self: center;
  max-width: 50%;
  height: 100%;
  object-fit: contain;
}
.equipment {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-left: 1rem;
}

/* @media (max-width: 1068px) {
  .thrid-grid {
    grid-template-rows: 0.6fr 0.6fr;
  }
} */
@media (max-width: 946px) {
  .thrid-grid {
    grid-template-rows: auto minmax(42rem, auto);
  }
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
/* (до 479px) */
@media (max-width: 479px) {
  .img {
    max-width: 100%;
  }
}
</style>
