<script setup>
// import { onMounted, onUnmounted, ref } from 'vue'

const btns = [
  { href: '', name: 'В магазин' },
  { href: '#how-works', name: 'Принцип работы' },
  { href: '#advantages', name: 'Преимущества' },
  { href: '#accessory', name: 'Аксессуары' },
  { href: '#overviews', name: 'Обзоры' },
  { href: '#contacts', name: 'Контакты' },
  { href: '#about-us', name: 'О нас' },
]

// const headerRef = ref(null)

// defineExpose({
//   offsetHeight: headerRef,
// })
</script>

<template>
  <header class="header" ref="headerRef">
    <a href="#home" class="logo-link">
      <div class="logo-wrapper">
        <img src="/logo-color.png" alt="logo-color" class="logo" />
        <p class="logo-text">
          У нас есть то, <br />
          о чём Вы не знали!
        </p>
      </div>
    </a>
    <ul class="btns-list">
      <a :href="btn.href" v-for="btn in btns" :key="btn" class="link">
        <li class="btn-item">
          {{ btn.name }}
        </li>
      </a>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 1.8rem 3.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  color: white;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.7);
}
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.logo {
  width: 10.2rem;
}
.logo-text {
  font-size: 1.8rem;
}
.logo-link {
  &:visited,
  &:link {
    color: white;
    text-decoration: none;
  }
}
.btns-list {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  gap: 2.5rem;
  width: 60%;
  list-style: none;
}
.btn-item {
  width: fit-content;
  font-size: 1.8rem;
}
.link {
  &:visited,
  &:link {
    color: white;
    text-decoration: none;
  }

  &:active {
    color: #fff6bf;
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
