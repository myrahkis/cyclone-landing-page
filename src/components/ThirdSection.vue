<script setup>
const equipments1 = [
  'Циклон SN50T3 - 1шт',
  'Циклон второй ступени',
  'фильтрации - 1шт',
  'Соединительный кронштейн - 1шт',
  'Муфта 50-56 - 2шт',
  'Хомут 42-58 - 2шт',
  'Фланец крепления: 1шт',
  'Крепёжные болты и гайки - 4 комплекта',
  'Прокладка - 1шт',
]
const equipments2 = [
  'Насадка на циклонный фильтр - 1шт',
  'Муфта 50-56мм - 2шт',
  'Крепёжный болт, гайка, шайба - 4шт',
]
</script>

<template>
  <section class="third-section">
    <div class="thrid-grid">
      <div class="grid-cell">
        <h3>Циклонный фильтр с двойной фильтрацией</h3>
        <p>Комплектация:</p>
        <ul class="equipment">
          <li v-for="item in equipments1" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-cell img-cell-1">
        <img src="/desc-img.png" alt="" class="img" />
      </div>
      <div class="grid-cell img-cell-2">
        <img src="/full-height.png" alt="" class="img" />
      </div>
      <div class="grid-cell last-cell">
        <h3>Насадка на циклонный фильтр SN50T3 — вторая ступень фильтрации</h3>
        <p>Комплектация:</p>
        <ul class="equipment">
          <li v-for="item in equipments2" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  height: 100vh;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
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
.img-cell-1 {
  grid-column: 2 / -1;
}
.img-cell-2 {
  grid-column: 1 / 3;
}
.img {
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
}
.equipment {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-left: 1rem;
}
</style>
