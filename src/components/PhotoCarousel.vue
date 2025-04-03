<script setup>
import { onMounted, ref } from 'vue'

const { pics } = defineProps({ pics: { type: Array, required: true } })

// const carouselRange = ref(null)
const curIndex = ref(0)

function nextSlide() {
  curIndex.value = (curIndex.value + 1) % pics.length
}
function prevSlide() {
  curIndex.value = (curIndex.value - 1 + pics.length) % pics.length
}

// onMounted(() => {
//   carouselRange.value.style.setProperty('--slides', pics.length)
// })
</script>

<template>
  <div class="carousel">
    <div class="carousel-container">
      <div
        class="carousel-range"
        ref="carouselRange"
        :style="{ transform: `translateX(-${curIndex * 100}%)` }"
      >
        <img v-for="pic in pics" :key="pic" :src="pic" :alt="pic" class="carousel-img" />
      </div>
    </div>
    <button class="carousel-btn prev" @click="prevSlide">❮</button>
    <button class="carousel-btn next" @click="nextSlide">❯</button>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-range {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-img {
  flex: 0 0 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}
.carousel-btn {
  position: absolute;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.15rem 0.7rem black;
  color: white;
  backdrop-filter: blur(3px);
  border: none;
  border-radius: 2rem;
  transform: translateY(0);
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: 0 0.15rem 0.3rem black;
    transform: translateY(-1px);
  }
}
.prev {
  top: 50%;
  left: 1rem;
  z-index: 2;
}
.next {
  top: 50%;
  right: 1rem;
  z-index: 2;
}
</style>
