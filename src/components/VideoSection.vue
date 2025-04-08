<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
</script>

<template>
  <section class="video-section" id="overviews">
    <div class="video-elem">
      <iframe
        src="https://www.youtube.com/embed/ClvIqt0Vq5Y"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 3.5rem;
  /* height: 85rem; */
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.video-elem {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  margin-bottom: 3rem;

  font-size: 2.5rem;
}
</style>
