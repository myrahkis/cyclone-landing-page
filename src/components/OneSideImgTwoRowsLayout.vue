<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'

const equipments = [
  'Циклон SN50T3 - 1шт',
  'Циклон второй ступени фильтрации - 1шт',
  'Емкость: ≈20л',
  'Муфта 50-56мм - 2шт',
  'Хомут 42-58мм - 2шт',
  'Угловой фланец с крышкой - 1шт',
  'Крепёжный болт, гайка, шайба - 8шт',
  'Крепёж для подвеса на стену - 4шт',
  'Шланг ПВХ с фитингами, 1,5 метра - 2шт',
  'Поворотные колеса - 4шт',
]
</script>

<template>
  <section class="fourth-section">
    <SkrewImg />
    <h2>
      Двухфункциональная система <br class="br-mobile" />
      двойной фильтрации
    </h2>
    <div class="fourth-grid">
      <div class="grid-cell img-cell">
        <img
          src="/one-side-img.png"
          alt="Двухфункциональная система двойной фильтрации"
          class="img"
        />
      </div>
      <div class="grid-cell top-cell">
        <!-- <h3>Заголовок раздела</h3> -->
        <p>
          Двухфункциональная циклонная система двойной фильтрации — позволяет отделять как сухой,
          так и влажный мусор до 99%, что многократно снижает расход мешков и фильтров вашего
          пылесоса.
        </p>
        <p>
          Особенностью двухфункциональной циклонной системы является специальная конструкция
          ёмкости, которая может работать либо в напольном варианте, на входящих в комплект колёсах,
          либо в настенном (стационарном) варианте, при помощи входящего в комплект разъёмного
          кронштейна и специальной угловой горловине для сброса мусора в стороннюю ёмкость (ведро,
          мусорный пакет, коробку и т.п.)
        </p>
      </div>
      <div class="grid-cell last-cell">
        <ul class="equipment">
          <li v-for="item in equipments" :key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fourth-section {
  position: relative;
  /* min-height: 100vh; */
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  padding: 3.5rem;
}

.fourth-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  min-width: 100%;
}

.grid-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;
}
.img-cell {
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  padding-left: 0;
  padding-right: 0;
}
.top-cell {
  grid-column: 2 / -1;
}
.last-cell {
  grid-column: 2 / -1;
  grid-row: 2 / 2;
}

.equipment {
  font-size: 2rem;
  margin-left: 1.8rem;
}
.img {
  height: 100%;
  max-width: 100%;
  /* width: 85%; */
  object-fit: contain;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .br-mobile {
    display: none;
  }
  .fourth-grid {
    display: flex;
    flex-direction: column;
  }
  .img-cell {
    order: 4;
  }
  .img {
    height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
