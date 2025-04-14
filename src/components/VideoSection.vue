<script setup></script>

<template>
  <section class="video-section" id="overviews">
    <div class="video-elem">
      <iframe
        class="video-frame"
        src="https://www.youtube.com/embed/ClvIqt0Vq5Y"
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

.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
}
</style>
