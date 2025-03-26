<script setup></script>

<template>
  <section class="fifth-section">
    <div class="fifth-grid">
      <div class="grid-cell first-cell"><img src="" alt="" /></div>
      <div class="grid-cell second-cell"><img src="" alt="" /></div>
      <div class="grid-cell third-cell"><img src="" alt="" /></div>
      <div class="grid-cell fourth-cell"><img src="" alt="" /></div>
    </div>
  </section>
</template>

<style scoped>
.fifth-section {
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
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
.first-cell {
  grid-column: 1 / 3;
}
.second-cell {
  grid-column: 3 / -1;
  grid-row: 1 / -1;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .fifth-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .first-cell {
    grid-column: 1 / -1;
    grid-row: 1 / 1;
  }
  .second-cell {
    grid-column: 1 / 1;
    grid-row: 2 / 4;
  }
  .third-cell {
    grid-column: 2 / -1;
    grid-row: 2 / 4;
  }
  .fourth-cell {
    grid-column: 1 / -1;
  }
}
</style>
