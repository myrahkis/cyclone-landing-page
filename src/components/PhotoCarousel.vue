<script setup>
import BuyBtn from '@/ui/BuyBtn.vue'
import { ref } from 'vue'

const { pics, link, sidePos, marginRem } = defineProps({
  pics: { type: Array, required: true, default: () => [] },
  link: String,
  sidePos: String,
  marginRem: String,
})

const curIndex = ref(0)
const direction = ref('slide-right')

function nextSlide() {
  direction.value = 'slide-left'
  curIndex.value = (curIndex.value + 1) % pics.length
}

function prevSlide() {
  direction.value = 'slide-right'
  curIndex.value = (curIndex.value - 1 + pics.length) % pics.length
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <transition :name="direction">
          <div class="carousel-item" :key="curIndex">
            <img :src="pics[curIndex]" alt="Фото карусели" class="carousel-image" />
          </div>
        </transition>
      </div>
    </div>
    <button class="carousel-btn prev" @click="prevSlide">❮</button>
    <button class="carousel-btn next" @click="nextSlide">❯</button>
    <BuyBtn :link="link" :sidePos="sidePos" :margin-rem="marginRem" />
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 6%;
  padding-right: 6%;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

/* движение влево */
.slide-left-enter-active,
.slide-left-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.slide-left-enter-from {
  transform: translate(150%, -50%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translate(-150%, -50%);
  opacity: 0;
}

/* движение вправо */
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.slide-right-enter-from {
  transform: translate(-150%, -50%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translate(150%, -50%);
  opacity: 0;
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
  cursor: pointer;
  transform: translate(-1%, -50%);
  transition: all 0.2s;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.4);
  transform: translate(-1%, -50%) translateY(-3px);
}

.carousel-btn:active {
  box-shadow: 0 0.15rem 0.3rem black;
  transform: translate(-1%, -50%) translateY(-1px);
}

.prev {
  top: 50%;
  left: 1%;
  z-index: 2;
}

.next {
  top: 50%;
  right: 1%;
  z-index: 2;
}

/* (1024px–1279px) */
@media (max-width: 1032px) {
  .carousel-container {
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-item {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
  }
  .carousel-image {
    width: 145%;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .carousel-container {
    position: relative;
    width: 100%;
    padding-top: 63%;
  }
  .carousel-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .carousel-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .carousel-image {
    width: 100%;
  }
}
/* (до 479px) */
@media (max-width: 479px) {
  .carousel-container {
    position: relative;
    width: 100%;
    padding-top: 110%;
  }
  .carousel-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .carousel-item {
    position: absolute;
    top: 45%;
    left: 35%;
    transform: translate(-45%, -45%);
  }
  .carousel-image {
    width: 140%;
  }
  .carousel-btn {
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
  }
}
</style>
