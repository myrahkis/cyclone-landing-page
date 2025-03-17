<script setup></script>

<template>
  <section class="operation-principle-section" id="how-works">
    <div class="operation-principle-grid">
      <div class="grid-cell cell-wide">
        <h3>Принцип работы циклонной системы двойной фильтрации</h3>
        <p>
          Циклонная система двойной фильтрации эффективно очищает воздух или жидкости от крупных
          частиц и мелкой пыли с помощью двухступенчатой системы фильтрации. Сначала грязь удаляется
          за счет центробежной силы, а затем дополнительные фильтры задерживают остаточные
          загрязнения.
        </p>
      </div>
      <div class="grid-cell cell-img">
        <img src="/how-filter-works.png" alt="" class="how-works-img" />
      </div>
      <div class="grid-cell">
        <p>
          Циклонный этап: На первом этапе загрязненный поток (воздух или жидкость) поступает в
          корпус системы, где он под воздействием центробежных сил начинает вращаться. Это вращение
          заставляет более крупные частицы оседать на стенках фильтра и скапливаться в специальном
          отсеке для сбора загрязнений. Этот процесс эффективно удаляет более тяжелые и крупные
          частицы, такие как пыль, песок и металлические частички.
        </p>
        <p>
          Механическая фильтрация: После первичной очистки воздух или жидкость проходит через второй
          фильтрующий элемент — высококачественный механический фильтр, который задерживает
          мельчайшие частицы, включая микроскопические загрязнения и микробиологические вещества. В
          зависимости от типа используемой мембраны или материала фильтрации, можно достичь очистки
          на уровне микронных частиц.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.operation-principle-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  color: white;
  padding: 3.5rem;
}
.operation-principle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 0.8fr;
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
.how-works-img {
  position: relative;
  height: 100%;
  width: 57rem;
  object-fit: contain;
}
.cell-img {
  display: flex;
  align-items: center;
  justify-content: center;

  /* overflow: hidden; */
}
</style>
