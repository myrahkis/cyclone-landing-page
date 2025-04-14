<script setup>
import { ref } from 'vue'

const showVideo = ref(false)
</script>

<template>
  <section class="video-section" id="overviews">
    <div class="video-elem">
      <div class="preview-wrapper" v-if="!showVideo" @click.prevent.stop="showVideo = true">
        <img class="video-preview" src="/youtube-preview.webp" alt="Превью ютуб видео" />
      </div>
      <iframe
        v-else
        class="video-frame"
        :src="'https://www.youtube.com/embed/ClvIqt0Vq5Y?autoplay=1&rel=0'"
        allow="accelerometer; encrypted-media; autoplay; gyroscope; picture-in-picture"
        frameborder="0"
        allowfullscreen
        tabindex="-1"
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
  position: relative;
  width: 100%;
  max-width: 100rem;
  margin-bottom: 3rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  overflow: hidden;
}
.preview-wrapper {
  cursor: pointer;
}
.video-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7rem;
}
.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
}
</style>
