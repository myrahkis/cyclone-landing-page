<script setup></script>

<template>
  <a
    href="https://othertool.ru/home_master/tsiklonnye-filtry-dlja-pylesosa"
    target="_blank"
    class="to-shop-btn"
    >В магазин</a
  >
</template>

<style scoped>
.to-shop-btn {
  transition: all 0.2s;
  text-align: center;

  &:link,
  &:visited {
    text-decoration: none;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 600;
    color: white;
    border: 2px solid white;
    border-radius: 1.6rem;
    padding: 1rem 2rem;
  }

  &:hover {
    border: 2px solid var(--brand-blue-color);
    background-color: var(--brand-blue-color);
    color: black;
  }
}

@media (max-width: 480px) {
  .to-shop-btn {
    &:link,
    &:visited {
      padding: 1rem;
    }
  }
}
</style>
