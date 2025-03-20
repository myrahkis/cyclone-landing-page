<script setup>
const { width, fontSize } = defineProps({
  width: { type: String, required: true },
  fontSize: { type: String, required: true },
})

const btns = [
  { href: '', name: 'В магазин' },
  { href: '#how-works', name: 'Принцип работы' },
  { href: '#advantages', name: 'Преимущества' },
  { href: '#accessory', name: 'Аксессуары' },
  { href: '#overviews', name: 'Обзоры' },
  { href: '#contacts', name: 'Контакты' },
  { href: '#about-us', name: 'О нас' },
]
</script>

<template>
  <ul class="btns-list" :style="{ width, fontSize }">
    <a :href="btn.href" v-for="btn in btns" :key="btn" class="link">
      <li class="btn-item">
        {{ btn.name }}
      </li>
    </a>
  </ul>
</template>

<style>
.btns-list {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  gap: 2.5rem;
  list-style: none;
}
.btn-item {
  width: fit-content;
}
.link {
  &:visited,
  &:link {
    color: white;
    text-decoration: none;
  }

  &:active {
    color: var(--brand-yellow-color);
  }
}
.link::after {
  content: '';
  width: 0px;
  height: 1px;
  display: block;
  background: white;
  transition: 300ms;
}
.link:hover::after {
  width: 100%;
}
</style>
