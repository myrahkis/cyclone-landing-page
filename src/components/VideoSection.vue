<script setup>
import { ref } from 'vue'

const showVideo = ref(false)
</script>

<template>
  <section class="video-section" id="overviews">
    <div class="video-elem">
      <img
        v-if="!showVideo"
        @click="showVideo = true"
        class="video-preview"
        src="/youtube-preview.webp"
        alt="Превью ютуб видео"
      />
      <iframe
        v-else
        class="video-frame"
        src="https://www.youtube.com/embed/ClvIqt0Vq5Y"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  padding: 3.5rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.video-elem {
  width: 100%;
  max-width: 100rem;
  margin-bottom: 3rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  overflow: hidden;
}
.video-preview {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
}
</style>
