<script setup>
import PhotoCarousel from './PhotoCarousel.vue'

const { cartSlides, adapterSlides } = defineProps({
  cartSlides: { type: Array },
  adapterSlides: { type: Array },
})
</script>

<template>
  <section class="third-section">
    <div class="thrid-grid">
      <div class="grid-cell img-cell-1">
        <PhotoCarousel
          :pics="cartSlides"
          link="https://othertool.ru/teleghka_stroitelnaya?search=циклон"
          side-pos="right"
          margin-rem="0.5rem"
        />
      </div>
      <div class="grid-cell text-cell-1">
        <p>
          Строительная тележка 800*400*18мм, предназначена для перевозки различных грузов по
          строительной площадке.
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
        <PhotoCarousel
          :pics="adapterSlides"
          side-pos="left"
          margin-rem="0.5rem"
          link="https://othertool.ru/home_master/tsiklonnye-filtry-dlja-pylesosa/universalnyj-perexodnik-adapter-dlja-pylesosa"
        />
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
  color: white;
  padding: 3.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.thrid-grid {
  display: grid;
  grid-template-columns: repeat(6, 0.25fr);
  grid-template-rows: 0.8fr minmax(450px, 1fr);
  gap: 2rem;
  width: 100%;
  height: 100%;
}
.grid-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.text-cell-1 {
  grid-column: 4 / -1;
}
.img-cell-1 {
  grid-column: 1 / 4;
}
.img-cell-2 {
  position: relative;
  display: flex;
  grid-column: 3 / -1;
  grid-row: 2;
}
.text-cell-2 {
  grid-column: 1 / 3;
  grid-template-rows: 2;
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

/* (480px–767px) */
@media (max-width: 767px) {
  .thrid-grid {
    display: flex;
    flex-direction: column-reverse;
  }
  .text-cell-1 {
    order: 1;
  }
  .img-cell-1 {
    order: 1;
  }
}

/* (до 479px) */
@media (max-width: 479px) {
  .img {
    width: 70%;
  }
}
</style>
