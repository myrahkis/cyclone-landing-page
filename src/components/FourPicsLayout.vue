<script setup></script>

<template>
  <section class="fifth-section">
    <div class="fifth-grid">
      <div class="grid-cell first-cell">
        <h3>Настенное исполнение</h3>
        <img src="/wallVarient.png" alt="" class="img" />
      </div>
      <div class="grid-cell second-cell">
        <h3>Напольное исполнение</h3>
        <img src="/floor-var.png" alt="" class="img" /></div>
      <div class="grid-cell third-cell"><img src="/wallVarient2.png" alt="" class="img" /></div>
      <div class="grid-cell fourth-cell"><img src="/wallVarient3.png" alt="" class="img" /></div>
      <div class="grid-cell fifth-cell"><img src="/floorVar2.png" alt="" class="img" /></div>
      <div class="grid-cell sixth-cell"><img src="/floorVar3.png" alt="" class="img" /></div>
    </div>
  </section>
</template>

<style scoped>
.fifth-section {
  height: 110vh;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  padding: 3.5rem;
}
.fifth-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(300px, 1fr) 1fr 1fr;
  gap: 2rem;
  height: 100%;
}
.grid-cell {
  position: relative;
  display: flex;
  /* justify-content: center; */
  border: 3px solid white;
  color: white;
  border-radius: 1.9rem;
  /* padding: 2rem; */
  padding: 0;
  min-height: 0;
}
.first-cell {
  grid-column: 1 / 3;

  h3 {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
}
.second-cell {
  grid-column: 3 / -1;

  h3 {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
  /* grid-row: 1 / -1; */
}
.third-cell,
.fourth-cell,
.fifth-cell,
.sixth-cell {
  grid-row: 2 / -1;
}

.img {
  object-fit: contain;
  max-width: 100%;
  height: 100%;
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
