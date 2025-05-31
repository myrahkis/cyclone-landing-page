<script setup>
import SocialsIcons from './SocialsIcons.vue'
</script>

<template>
  <div class="container">
    <a
      href="https://othertool.ru/home_master/tsiklonnye-filtry-dlja-pylesosa"
      target="_blank"
      class="to-shop-btn"
      >В магазин</a
    >
    <p class="text">+7 495 641-55-66</p>
    <p class="text">example@othertool.pro</p>
    <p class="text">Пн-Пт: 09:00 – 19:00, Сб: 10:00 – 18:00, Вс — выходной</p>
    <SocialsIcons iconWidth="3.8rem" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
  color: white;
  padding: var(--padding-vertical-big-screens) var(--sections-padding);
  padding-top: 15rem;
}
.contacts-wrapper {
  font-size: 2rem;
}
.to-shop-btn {
  transition: all 0.2s;

  &:link,
  &:visited {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    border: 2px solid white;
    border-radius: 1.6rem;
    padding: 1rem 2rem;
    width: fit-content;
  }

  &:hover {
    border: 2px solid var(--brand-blue-color);
    background-color: var(--brand-blue-color);
    color: black;
  }
}
.text {
  font-size: 2rem;
}
</style>
