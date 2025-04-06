<script setup>
const { link, sidePos, marginRem } = defineProps({
  link: String,
  sidePos: String,
  marginRem: String,
})
</script>

<template>
  <a
    class="buy-btn"
    :style="{ [sidePos]: marginRem, bottom: marginRem }"
    :href="link"
    target="_blank"
    >Купить</a
  >
</template>

<style>
.buy-btn {
  position: absolute;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem 3.5rem;
  font-size: clamp(1.2rem, 1.8vw, 1.8rem);
  font-weight: 600;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 1.4rem;
  transition: all 0.2s;

  &:link,
  &:visited {
    color: white;
  }

  &:hover {
    background-color: white;
    color: black;
  }
}
</style>
