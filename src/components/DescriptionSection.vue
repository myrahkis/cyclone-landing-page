<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
</script>

<template>
  <section class="description-section">
    <SkrewImg />
    <h2>Заголовок раздела</h2>
    <div class="desc-grid">
      <div class="grid-cell cell-wide">
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla
          tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Praesent enim orci,
          iaculis at sem eget, gravida porttitor urna. Mauris a interdum diam. Donec nec faucibus
          neque. Aenean ac felis vitae tellus viverra blandit sed et nisi.
        </p>
      </div>
      <div class="grid-cell">
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla
          tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo.
        </p>
      </div>
      <div class="grid-cell cell-img">
        <img src="/desc-img.png" alt="" class="des-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.description-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
  color: white;
  padding: 3.5rem;
}
.desc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 0.7fr;
  gap: 2rem;
  min-width: 100%;
  height: 100%;
}
.grid-cell {
  position: relative;
  display: flex;
  min-height: 0;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;

  &:last-child {
    padding: 0;
  }
}
.cell-wide {
  grid-column: 1 / -1;
}
.des-img {
  position: relative;
  height: 100%;
  object-fit: contain;
}
.cell-img {
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
}
.cell-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 50% 120% at bottom,
    #ffffff 0%,
    #f0f0f0 40%,
    #bbbbbb 50%,
    transparent 90%
  );
}
</style>
