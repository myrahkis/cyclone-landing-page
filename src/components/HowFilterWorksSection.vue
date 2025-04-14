<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
import { computed } from 'vue'

const { showHeader, gradientDirection, heading, topText, bottomText } = defineProps({
  showHeader: Boolean,
  gradientDirection: { type: String, required: true },
  heading: String,
  topText: String,
  bottomText: Array,
})

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
</script>

<template>
  <section class="description-section" :style="gradientStyle">
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
      <div class="grid-cell text-cell">
        <p v-for="text in bottomText" :key="text">
          {{ text }}
        </p>
      </div>
      <div class="grid-cell cell-img">
        <slot name="photo-place" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.description-section {
  position: relative;
  color: white;
  padding: 3.5rem;
}
.desc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto minmax(400px, 1fr);
  gap: 2rem;
}
.grid-cell {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.cell-wide {
  grid-column: 1 / -1;
}
.cell-img {
  grid-column: 3 / -1;
  grid-row: 2;
}
.how-works-img {
  margin: 0 auto;
  max-width: 100%;
  width: 70%;
  height: 100%;
  object-fit: contain;
}
.text-cell {
  grid-column: 1 / 3;
  grid-row: 2;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .desc-grid {
    display: flex;
    flex-direction: column;
  }
}
/* (до 479px) */
@media (max-width: 479px) {
  .how-works-img {
    width: 100%;
  }
}
</style>
