<script setup>
const fullImgPath1 = `${import.meta.env.BASE_URL}hero-background.png`
const fullImgPath2 = `${import.meta.env.BASE_URL}clear-bg.png`
</script>

<template>
  <section
    class="hero-section"
    :style="{ '--bg-url': `url(${fullImgPath1})`, '--bg-clear-url': `url(${fullImgPath2})` }"
  >
    <div class="gradient"></div>
    <h1 class="heading">
      Заголовок карточки <br />
      в две строки
    </h1>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
      convallis.
    </p>
    <button class="order-btn">Заказать</button>
    <div class="clear-img"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3.5rem;
  color: var(--white-color);
}
.hero-section::before {
  position: absolute;
  content: '';
  inset: 0;
  background: var(--bg-url);
  background-position: center;
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
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
}
.clear-img {
  position: absolute;
  bottom: 4rem;
  right: 5rem;
  width: 48%;
  z-index: 1;
  height: 75vh;
  background: var(--bg-clear-url);
  background-position: left -1rem bottom 0;
  background-size: 88% 102%;
  background-repeat: no-repeat;
  border: 3px solid white;
  border-radius: 4.5rem;
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
