<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
</script>

<template>
  <section class="description-section">
    <SkrewImg />
    <h2>Циклонный фильтр для пылесоса SN50T3/<br />Циклонный фильтр с двойной фильтрацией</h2>
    <div class="desc-grid">
      <div class="grid-cell cell-wide">
        <h3>Циклонный фильтр для пылесоса SN50T3</h3>
        <p>
          Циклонный фильтр для пылесоса SN50T3 позволяет отделять влажные и сухие частицы пыли до
          97%, что снижает загрязнение фильтра и мешка пылесоса, тем самым продлевая их срок службы.
          При этом фильтр пылесоса практически не забивается.
        </p>
      </div>
      <div class="grid-cell">
        <h3>Циклонный фильтр с двойной фильтрацией</h3>
        <p>
          Циклонный фильтр с двухступенчатой системой фильтрации очищает проходимый через него
          воздух до 99%. Крупная и средняя фракция отсеивается через фильтр SN50N3, а
          мелкодисперционная пыль оседает в колбе второй ступени фильтрации.
        </p>
        <p>
          Данная система способна скидывать в ёмкость даже самую мелкодисперсионную пыль - мука,
          пыль после зашкуривания шпаклёвки или дерева и т.п. А то, небольшое количество
          мелкодисперсионной пыли, которое при работе обычного циклона, попадало в пылесос, в данной
          системе попадает в колбу второй ступени фильтрации.
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
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
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
  gap: 1rem;
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
