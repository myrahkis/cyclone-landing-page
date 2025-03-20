<script setup>
import BtnsLinksList from '@/ui/BtnsLinksList.vue'

// const { width, fontSize } = defineProps({
//   width: { type: String, required: true },
//   fontSize: { type: String, required: true },
// })

// import { onMounted, onUnmounted, ref } from 'vue'

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
    <BtnsLinksList width="60%" font-size="1.8rem" />
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
</style>
