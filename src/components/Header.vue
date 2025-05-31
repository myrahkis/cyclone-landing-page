<script setup>
import { ref } from 'vue'
import ToShopBtn from '@/ui/ToShopBtn.vue'
import SocialsIcons from './SocialsIcons.vue'

const { useOpenMenu } = defineProps({ useOpenMenu: { type: Function } })

const headerRef = ref(null)

function toggleMenu() {
  const menu = document.querySelector('.menu-btn')
  menu.classList.toggle('open')
  useOpenMenu()
}

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

defineExpose({
  offsetHeight: headerRef,
})
</script>

<template>
  <header class="header" ref="headerRef">
    <div class="header-desktop">
      <a href="#" class="logo-link" @click.prevent="goUp">
        <div class="logo-wrapper">
          <img src="/OtherPhotos/logo-color.png" alt="лого" class="logo" />
          <p class="logo-text">
            У нас есть то, <br />
            о чём Вы не знали!
          </p>
        </div>
      </a>
      <div class="contacts-wrapper">
        <div class="contacts">
          <div class="phone-email-wrapper">
            <p class="phone">+7 495 641-55-67</p>
            <p class="email"><a href="mailto:info@othertool.ru">info@othertool.ru</a></p>
          </div>
          <p class="working-hours">Пн-Пт: 09:00 – 19:00, Сб: 10:00 – 18:00, Вс — выходной</p>
        </div>
        <div class="btns-wrapper">
          <ToShopBtn />
          <SocialsIcons iconWidth="3.8rem" />
        </div>
      </div>
    </div>
    <div class="header-mobile">
      <a href="#home" class="logo-link">
        <div class="logo-wrapper">
          <img src="/OtherPhotos/logo-color.png" alt="лого" class="logo" />
          <p class="logo-text">
            У нас есть то, <br />
            о чём Вы не знали!
          </p>
        </div>
      </a>
      <button class="menu-btn" @click="toggleMenu">
        <img src="/OtherPhotos/menu.png" alt="меню" />
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
  width: clamp(8rem, 10vw, 15rem);
}
.logo-text {
  font-size: clamp(1.2rem, 4vw, 1.8rem);
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

.menu-btn {
  background-color: transparent;
  padding: 0 1.7rem;
  border: none;
  border-radius: 1.5rem;
  transform: rotate(0deg);
  transition: all 0.3s;
}
.menu-btn.open {
  transform: rotate(-90deg);
}
.working-hours {
  font-size: clamp(1rem, 2vw, 1.6rem);
}
.email {
  font-size: clamp(1.8rem, 2vw, 2.1rem);

  a {
    &:link,
    &:visited {
      color: white;
      text-decoration: none;
    }
  }
}
.phone {
  font-size: clamp(1.8rem, 2vw, 2.1rem);
}

@media (min-width: 1600px) {
  .header {
    padding: var(--padding-vertical-big-screens) var(--sections-padding);
  }
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .contacts-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 1.5rem;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .btns-wrapper {
    flex-direction: column-reverse;
    align-items: end;
    gap: 0.5rem;
  }
  .phone-email-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .logo-text {
    font-size: clamp(1rem, 3.5vw, 1.6rem);
    text-align: start;
  }
  .working-hours {
    font-size: clamp(1rem, 2vw, 1.3rem);
  }
  .email,
  .phone {
    text-align: start;
    font-size: clamp(1.8rem, 2vw, 1.8rem);
  }
}

/* (до 767px)  */
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

@media (max-width: 580px) {
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
