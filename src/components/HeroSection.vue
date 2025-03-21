<script setup>
const fullImgPath1 = `${import.meta.env.BASE_URL}2025-02-13-bg.png`
const fullImgPath2 = `${import.meta.env.BASE_URL}2025-02-13.png`
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
      Циклонные системы двойной фильтрации
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
  height: 130vh;
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
  background-position: center bottom 0;
  background-size: 75%;
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
  right: 10rem;
  width: 45%;
  z-index: 1;
  height: 73vh;
  background: var(--bg-clear-url);
  background-position: left 0 bottom -1rem;
  background-size: 86%;
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
