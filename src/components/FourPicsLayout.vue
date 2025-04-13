<script setup></script>

<template>
  <section class="fifth-section">
    <div class="fifth-grid">
      <h2 class="heading-cell-1">Настенное исполнение</h2>
      <div class="grid-cell first-cell">
        <img src="/WallVarient/wallVar1.png" alt="Настенный вариант фильтра" class="img" />
      </div>
      <h2 class="heading-cell-2">Напольное исполнение</h2>
      <div class="grid-cell second-cell">
        <img src="/FloorVarient/floorVar3.png" alt="Напольный вариант фильтра" class="img" />
      </div>
      <div class="grid-cell third-cell">
        <img src="/WallVarient/wallVar2.png" alt="Настенный вариант фильтра" class="img" />
      </div>
      <div class="grid-cell fourth-cell">
        <img src="/WallVarient/wallVar3.png" alt="Настенный вариант фильтра" class="img" />
      </div>
      <div class="grid-cell fifth-cell">
        <img src="/FloorVarient/floorVar1.png" alt="Напольный вариант фильтра" class="img" />
      </div>
      <div class="grid-cell sixth-cell">
        <img src="/FloorVarient/floorVar2.png" alt="Напольный вариант фильтра" class="img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fifth-section {
  /* height: 110vh; */
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  padding: 3.5rem;
}
.fifth-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto minmax(300px, 0.6fr) 0.3fr 0.3fr;
  gap: 2rem;
  height: 100%;
  color: white;
}
.grid-cell {
  position: relative;
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 0;
  min-height: 0;
}

.heading-cell-1 {
  grid-column: 1 / 3;
  grid-row: 1;
  margin-bottom: 0;
  font-size: clamp(1.2rem, 3.5vw, 3.5rem);
}
.heading-cell-2 {
  grid-column: 3 / -1;
  grid-row: 1;
  margin-bottom: 0;
  font-size: clamp(1.2rem, 3.5vw, 3.5rem);
}
.first-cell {
  grid-column: 1 / 3;
  grid-row: 2;

  h3 {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
}
.second-cell {
  grid-column: 3 / -1;
  grid-row: 2;

  h3 {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
}
.third-cell,
.fourth-cell,
.fifth-cell,
.sixth-cell {
  grid-row: 2 / -1;
  grid-row: 3 / -1;
}

.img {
  object-fit: contain;
  max-width: 100%;
  height: 100%;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .fifth-grid {
    grid-template-rows: auto minmax(300px, 0.25fr) 0.5fr 0.5fr;
  }
  .heading-cell-1 {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .heading-cell-2 {
    grid-column: 3 / -1;
    grid-row: 1;
  }
  .third-cell {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .fourth-cell {
    grid-column: 1 / 3;
    grid-row: 4;
  }
  .fifth-cell {
    grid-column: 3 / -1;
    grid-row: 3;
  }
  .sixth-cell {
    grid-column: 3 / -1;
    grid-row: 4;
  }
}

/* (480px–767px) */
@media (max-width: 661px) {
  .fifth-grid {
    display: flex;
    flex-direction: column;
  }
  .heading-cell-1 {
    font-size: clamp(1.4rem, 6vw, 4.8rem);
    order: 0;
  }
  .first-cell {
    order: 1;
  }
  .fourth-cell {
    order: 2;
  }
  .third-cell {
    order: 3;
  }
  .heading-cell-2 {
    font-size: clamp(1.4rem, 6vw, 4.8rem);
    order: 4;
  }
  .second-cell {
    order: 5;
  }
  .fifth-cell {
    order: 6;
  }
  .sixth-cell {
    order: 7;
  }
}
/* (до 479px) */
@media (max-width: 479px) {
  /* .fifth-section {
    height: 90vh;
  }  */
}
</style>
