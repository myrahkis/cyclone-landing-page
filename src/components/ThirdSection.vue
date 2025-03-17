<script setup></script>

<template>
  <section class="third-section">
    <div class="thrid-grid">
      <div class="grid-cell first-cell">
        <img src="/desc-img.png" alt="" class="img" />
      </div>
      <div class="grid-cell">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum.
        </p>
      </div>
      <div class="grid-cell">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum.
        </p>
      </div>
      <div class="grid-cell last-cell">
        <img src="/full-height.png" alt="" class="img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  padding: 3.5rem;
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0.5fr);
  gap: 2rem;
  min-width: 100%;
  height: 100%;
}
.grid-cell {
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;

  &:last-child,
  &:first-child {
    padding-bottom: 0;
    padding-top: 0;
  }
}
.first-cell {
  grid-column: 1 / 3;
}
.last-cell {
  grid-column: 2 / -1;
}
.img {
  height: 100%;
  object-fit: contain;
}
</style>
