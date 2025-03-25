<script setup>
import SocialsIcons from './SocialsIcons.vue'

const { useOpenMenu } = defineProps({ useOpenMenu: { type: Function } })

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
    <div class="header-desktop">
      <a href="#home" class="logo-link">
        <div class="logo-wrapper">
          <img src="/logo-color.png" alt="logo-color" class="logo" />
          <p class="logo-text">
            У нас есть то, <br />
            о чём Вы не знали!
          </p>
        </div>
      </a>
      <!-- <BtnsLinksList width="60%" font-size="1.8rem" /> -->
      <div class="contacts-wrapper">
        <div class="contacts">
          <p>+7 495 641-55-66</p>
          <p>example@othertool.pro</p>
          <p>Пн-Пт: 09:00 – 19:00, Сб: 10:00 – 18:00, Вс — выходной</p>
        </div>
        <div class="btns-wrapper">
          <a
            href="https://othertool.ru/home_master/tsiklonnye-filtry-dlja-pylesosa"
            target="_blank"
            class="to-shop-btn"
            >В магазин</a
          >
          <SocialsIcons iconWidth="3.8rem" />
        </div>
      </div>
    </div>
    <div class="header-mobile">
      <a href="#home" class="logo-link">
        <div class="logo-wrapper">
          <img src="/logo-color.png" alt="logo-color" class="logo" />
          <p class="logo-text">
            У нас есть то, <br />
            о чём Вы не знали!
          </p>
        </div>
      </a>
      <button class="menu-btn" @click="useOpenMenu">
        <img src="/menu.png" alt="menu" />
      </button>
    </div>
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
.header-desktop {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header-mobile {
  display: none;
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

.contacts-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.5rem;
}
.contacts {
  display: flex;
  gap: 3.5rem;
}

.btns-wrapper {
  display: flex;
  align-items: center;
  gap: 2.5rem;
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
  }

  &:hover {
    border: 2px solid var(--brand-blue-color);
    background-color: var(--brand-blue-color);
    color: black;
  }
}

.menu-btn {
  background-color: transparent;
  padding: 0 1.7rem;
  border: none;
  border-radius: 1.5rem;
  transition: all 0.3s;

  &:hover {
    transform: rotate(-90deg);
  }
}

/* **Мобильные устройства (до 767px)** */
@media (max-width: 767px) {
  .header-desktop {
    display: none;
  }
  .header-mobile {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
