<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
</script>

<template>
  <section class="video-section" id="overviews">
    <SkrewImg />
    <h2>Заголовок раздела</h2>
    <div class="video-cards">
      <div class="video-card">
        <div class="video-elem">Video</div>
        <div>
          <h3>Заголовок раздела</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
            convallis.
          </p>
        </div>
      </div>
      <div class="video-card">
        <div class="video-elem">Video</div>
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis.
        </p>
      </div>
      <div class="video-card">
        <div class="video-elem">Video</div>
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis.
        </p>
      </div>
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
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
}
.video-cards {
  display: flex;
  flex-grow: 1;
  gap: 2rem;
}
.video-elem {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  height: 50%;
  margin-bottom: 3rem;

  font-size: 2.5rem;
}
</style>
