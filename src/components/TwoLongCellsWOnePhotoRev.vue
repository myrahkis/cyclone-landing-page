<script setup>
import PhotoCarousel from './PhotoCarousel.vue'

const { cartSlides, equipments1, equipments2 } = defineProps({
  cartSlides: { type: Array },
  equipments1: { type: Object, default: () => ({}) },
  equipments2: { type: Object, default: () => ({}) },
})
</script>

<template>
  <section :style="gradientStyle" class="third-section">
    <div class="thrid-grid" :style="gridStyle">
      <div class="grid-cell img-cell-1">
        <!-- <PhotoCarousel :pics="whiteHosesPhotos" /> -->
        <PhotoCarousel :pics="cartSlides" />
      </div>
      <div class="grid-cell text-cell-1">
        <h3>Строительная тележка 800*400*18мм</h3>
        <p>
          Tележка строительная, предназначена для перевозки различных грузов по строительной
          площадке.
        </p>
        <p>
          Данная тележка была разработана для совместной работы пылесоса и ёмкости с установленным
          циклоном. При помощи хозяйственных резиновых стяжек вы можете закрепить пылесос и бочку с
          циклоном к тележке, для более удобного перемещения системы по строй площадке.
        </p>
        <p>
          Тележка выполнена из влагостойкой 18мм фанеры, размером 800*400мм. На тележке размещено 4
          поворотных колеса диаметром 50мм и 6 анкерных колец, для фиксирования на ней бочки,
          пылесоса и (или) верёвки-ручки. Максимальная нагрузка 300кг.
        </p>
      </div>
      <div class="grid-cell img-cell-2">
        <img src="/adapter.png" alt="" class="img" />
        <!-- <img src="/full-height.png" alt="" class="img" /> -->
      </div>
      <div class="grid-cell text-cell-2">
        <p>
          Универсальный переходник-адаптер для пылесоса. Надёжное решение для чистой и безопасной
          работы. Подходит к большинству электроинструментов — охватывает диаметр от 23 до 50 мм.
          Гибкий и прочный пластик не трескается, устойчив к деформации и легко подгоняется под
          нужное соединение.н Экономит время на уборке и улучшает качество работы.Идеален для
          использования дома, в гараже или мастерской.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section {
  min-height: 100vh;
  color: white;
  padding: 3.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(6, 0.25fr);
  grid-template-rows: auto;
  gap: 2rem;
  width: 100%;
  height: 100%;
  /* grid-template-areas: text-cell-1 img-cell-1 img-cell-1 img-cell-2 img-cell-2 text-cell-2; */
}
.grid-cell {
  display: flex;
  /* justify-content: center; */
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  /* min-height: 0; */

  /* &:last-child,
  &:first-child {
    padding-bottom: 0;
    padding-top: 0;
  } */
}
.text-cell-1 {
  grid-column: 4 / -1;
  /* grid-area: text-cell-1; */
}
.img-cell-1 {
  grid-column: 1 / 4;
  /* grid-area: img-cell-1; */
}
.img-cell-2 {
  display: flex;
  grid-column: 3 / -1;
  grid-row: 2;
  /* grid-area: img-cell-2; */
}
.text-cell-2 {
  grid-column: 1 / 3;
  grid-template-rows: 2;
  /* grid-area: text-cell-2; */
}
.img {
    align-self: center;
  height: 100%;
  max-width: 100%;
  width: 40%;
  object-fit: contain;
}
.equipment {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-left: 1rem;
}

/* @media (max-width: 1068px) {
  .thrid-grid {
    grid-template-rows: 0.6fr 0.6fr;
  }
}
@media (max-width: 946px) {
  .thrid-grid {
    grid-template-rows: 0.7fr 0.7fr;
  }
} */

/* (480px–767px) */
@media (max-width: 767px) {
  .thrid-grid {
    display: flex;
    flex-direction: column;
  }
  .img-cell-2 {
    order: 4;
  }
}
</style>
