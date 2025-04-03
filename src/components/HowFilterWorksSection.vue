<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
// import PhotoCarousel from './PhotoCarousel.vue'

const { showHeader, heading, topText, bottomText } = defineProps({
  showHeader: Boolean,
  heading: String,
  topText: String,
  bottomText: Array,
})
</script>

<template>
  <section class="description-section">
    <!-- <SkrewImg /> -->
    <h2 v-if="showHeader">
      Циклонный фильтр для пылесоса SN50T3/ <br />Циклонный фильтр с двойной фильтрацией
    </h2>
    <div class="desc-grid">
      <div class="grid-cell cell-wide">
        <h3>{{ heading }}</h3>
        <p>
          {{ topText }}
        </p>
      </div>
      <div class="grid-cell">
        <p v-for="text in bottomText" :key="text">
          {{ text }}
        </p>
      </div>
      <div class="grid-cell cell-img">
        <img src="/how-filter-works.png" alt="" class="how-works-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.description-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  color: white;
  padding: 3.5rem;
}
.desc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  gap: 2rem;
  min-width: 100%;
  height: 100%;
}
.grid-cell {
  position: relative;
  display: flex;
  min-height: 100%;
  gap: 1rem;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;

  /* &:last-child {
    padding: 0;
  } */
}
.cell-wide {
  grid-column: 1 / -1;
}
.des-img {
  position: relative;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  /* margin-bottom: -13rem; */
}
.cell-img {
  /* width: 70%; */
  /* display: flex; */
  /* max-width: 100%; */
  /* height: 100%; */
  /* overflow: hidden; */
}
.cell-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 70% 120% at bottom,
    #d6d6d6 1%,
    #bbbbbb 10%,
    #8f8f8f 20%,
    transparent 80%
  );
}

/* (480px–767px) */
@media (max-width: 767px) {
  .desc-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
