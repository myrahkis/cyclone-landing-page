<script setup>
const fullImgPath1 = `${import.meta.env.BASE_URL}hero-background.png`
const fullImgPath2 = `${import.meta.env.BASE_URL}clear-bg.png`
</script>

<template>
  <section
    class="hero-section"
    :style="{ '--bg-url': `url(${fullImgPath1})`, '--bg-clear-url': `url(${fullImgPath2})` }"
    id="home"
    ref="mainRef"
  >
    <div class="gradient"></div>
    <h1 class="heading">
      Циклонные фильтры <br />
      Циклонные системы <br />
      двойной фильтрации
    </h1>
    <h3 class="text">
      Чистота на всех уровнях — <br />
      двойная защита для вашего оборудования!
    </h3>
    <div class="texts">
      <p>
        Циклонный фильтр может работать абсолютно с любым пылесосом - строительным, бытовым,
        промышленным.
      </p>
      <p>
        Кроме того... циклонный фильтр — может собирать в ёмкость влажные отходы или даже воду, но
        пылесос в данном случае должен иметь функцию влажной уборки или иметь статус моющего.
      </p>
    </div>
    <!-- <button class="order-btn">Заказать</button> -->
    <div class="clear-img"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120vh;
  padding: 3.5rem;
  padding-top: 15rem;
  color: var(--white-color);
}
.hero-section::before {
  position: absolute;
  content: '';
  inset: 0;
  background: var(--bg-url);
  /* background-position: center; */
  background-position: right 6rem bottom 0;
  background-size: 80% 100%;
  /* background-size: 80% 100%; */
  background-repeat: no-repeat;
  filter: blur(4px);
  z-index: -1;
}
.gradient {
  position: absolute;
  inset: 0;
  z-index: -1;
  mix-blend-mode: multiply;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.clear-img {
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  width: 42%;
  z-index: 1;
  height: 90vh;
  background: var(--bg-clear-url);
  background-position: left -2rem bottom -3rem;
  background-size: 100% 110%;
  background-repeat: no-repeat;
  border: 3px solid white;
  border-radius: 4.5rem;
}
.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  margin-top: 2rem;
  font-size: 3.5rem;
  width: 40%;
}
.text {
  font-size: 3.5rem;
  width: 45%;
}
.order-btn {
  margin-top: auto;
  width: 30rem;
  font-size: 3.5rem;
  font-weight: 700;
  color: #383b3c;
  background-color: var(--brand-blue-color);
  border-radius: 2rem;
  border: none;
  padding: 2rem;
}
</style>
