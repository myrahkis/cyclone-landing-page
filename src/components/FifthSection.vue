<script setup></script>

<template>
  <section class="fifth-section">
    <div class="fifth-grid">
      <div class="grid-cell horiz-cell"><img src="" alt="" /></div>
      <div class="grid-cell vert-cell"><img src="" alt="" /></div>
      <div class="grid-cell"><img src="" alt="" /></div>
      <div class="grid-cell"><img src="" alt="" /></div>
    </div>
  </section>
</template>

<style scoped>
.fifth-section {
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
  padding: 3.5rem;
}
.fifth-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  height: 100%;
}
.grid-cell {
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;
}
.horiz-cell {
  grid-column: 1 / 3;
}
.vert-cell {
  grid-column: 3 / -1;
  grid-row: 1 / -1;
}
</style>
