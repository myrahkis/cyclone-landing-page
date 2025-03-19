<script setup></script>

<template>
  <section class="about-us-section" id="about-us">
    <div class="about-us">
      <h2>О нас</h2>
      <div class="info">
        <p class="text">
          Компания Иной Инструмент работает на рынке с 2016 года и знает, как важно нашим клиентам
          упростить задачу по утилизации производственных отходов. Именно поэтому мы первые, кто
          предлагает инновационный, доработанный инструмент для повышения эффективности производства
          и, что немаловажно, для его экономии.
        </p>
        <p class="text">
          Мы рекомендуем использовать именно циклонную систему двойной фильтрации, т.к. циклонный
          фильтр SN50T3 эффективен только для удаления крупных и(или) тяжёлых загрязняющих частиц
          (опилки, стружка, бетонный бой, песок, шлак, абразив, резиновая или пенопластовая крошка и
          т.п.). Мелкие же частицы (такие как бытовая пыль, мука от шлифовки шпатлёвки или дерева),
          могут пройти через систему в пылесос. Циклонная система двойной фильтрации обеспечивает
          гораздо более высокую степень очистки, поскольку вторая ступень фильтрации задерживает
          даже мельчайшие частицы, что делает систему подходящей для более строгих требований к
          качеству очищаемого потока.
        </p>
        <p class="text">
          Циклонный фильтр двойной фильтрации — это идеальное решение для обеспечения высокой
          чистоты потоков с минимальными затратами на эксплуатацию и обслуживание.
        </p>
      </div>
    </div>
    <img src="/11.png" alt="" class="skrew-big" />
    <img src="/12.png" alt="" class="skrew-sm" />
    <img src="/brand-character.png" alt="" class="spanner" />
  </section>
</template>

<style scoped>
.about-us-section {
  position: relative;
  padding: 3.5rem;
  height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.about-us {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 46%;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.text {
  font-size: 2.05rem;
}
.skrew-big {
  position: absolute;
  top: 0;
  right: 53rem;
  width: 35rem;
}
.skrew-sm {
  position: absolute;
  top: 17rem;
  right: 48rem;
  width: 20rem;
}
.spanner {
  position: absolute;
  bottom: 0;
  right: 5rem;
  width: 45rem;
}
</style>
