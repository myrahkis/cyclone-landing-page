<script setup></script>

<template>
  <section class="hero-section">
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
  padding: 35px;
  color: var(--white-color);
}
.hero-section::before {
  position: absolute;
  content: '';
  inset: 0;
  background: url('hero-background.png');
  background-position: center;
  background-size: 80% 100%;
  /* background-size: 80% 100%; */
  background-repeat: no-repeat;
  filter: blur(5px);
  z-index: -1;
}
.gradient {
  position: absolute;
  inset: 0;
  z-index: -1;
  mix-blend-mode: multiply;
  background: linear-gradient(to bottom, rgba(0, 0, 0) 15%, rgba(192, 220, 236) 130%);
}
.clear-img {
  position: absolute;
  bottom: 40px;
  right: 50px;
  width: 48%;
  z-index: 1;
  height: 75vh;
  background: url('clear-bg.png');
  background-position: left -10px bottom 0px;
  background-size: 88% 102%;
  background-repeat: no-repeat;
  border: 4px solid white;
  border-radius: 59px;
}
.text {
  font-size: 35px;
  width: 45%;
}
.order-btn {
  margin-top: auto;
  width: 300px;
  font-size: 35px;
  font-weight: 700;
  color: #383b3c;
  background-color: var(--brand-blue-color);
  border-radius: 20px;
  border: none;
  padding: 20px;
}
</style>
