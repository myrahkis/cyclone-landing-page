<script setup>
import { computed } from 'vue'
import PhotoCarousel from './PhotoCarousel.vue'

const { metalBarrelsPics, plasticBarrelPics, gradientDirection, topText, bottomText } = defineProps(
  {
    metalBarrelsPics: Array,
    plasticBarrelPics: Array,
    gradientDirection: { type: String, required: true },
    topText: { type: String, required: true },
    bottomText: { type: String, required: true },
  },
)

const gradientStyle = computed(() => ({
  background: `linear-gradient(${gradientDirection}, rgba(0, 0, 0), rgba(0, 0, 0, 0.4))`,
}))
</script>

<template>
  <section :style="gradientStyle" class="accessory-section" id="accessory">
    <h2>Аксессуары и дополнительное оборудование</h2>
    <div class="thrid-grid">
      <div class="grid-cell first-cell">
        <p>{{ topText }}</p>
      </div>
      <div class="grid-cell second-cell">
        <PhotoCarousel
          :pics="metalBarrelsPics"
          link="https://othertool.ru/metall-bochka?search=бочка"
          side-pos="left"
          margin-rem="0.5rem"
        />
      </div>
      <div class="grid-cell third-cell">
        <PhotoCarousel
          :pics="plasticBarrelPics"
          link="https://othertool.ru/novye-plastikovye-bochki?search=бочка"
          side-pos="right"
          margin-rem="0.5rem"
        />
      </div>
      <div class="grid-cell last-cell">
        <p>{{ bottomText }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accessory-section {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 3.5rem;
}

.thrid-grid {
  display: grid;
  grid-template-columns: repeat(4, 0.25fr);
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  height: 100%;
  flex-grow: 1;
}

.grid-cell {
  display: flex;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}

.first-cell {
  grid-column: 1 / 3;
}
.second-cell {
  grid-column: 3 / -1;
}
.third-cell {
  grid-column: 1 / 3;
}
.last-cell {
  grid-column: 3 / -1;
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

  .third-cell {
    order: 4;
  }
}
</style>
