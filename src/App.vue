<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import Header from './components/Header.vue'
import IntroductorySectionLayout from './components/IntroductorySectionLayout.vue'
import DoubleFunctionalSystemLayout from './components/DoubleFunctionalSystemLayout.vue'
import AccessoriesAddonsLayout from './components/AccessoriesAddonsLayout.vue'
import VideoSection from './components/VideoSection.vue'
import AboutUsSection from './components/AboutUsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
import OpenedHeaderMobile from './components/OpenedHeaderMobile.vue'

const openMenu = ref(false)

function useOpenMenu() {
  return (openMenu.value = !openMenu.value)
}

const mainRef = ref(null)
const headerRef = ref(null)

const updatePadding = () => {
  requestAnimationFrame(() => {
    if (headerRef.value?.$el && mainRef.value) {
      const headerHeight = headerRef.value.$el.getBoundingClientRect().height
      mainRef.value.style.paddingTop = `${headerHeight}px`
      mainRef.value.style.backgroundImage = `linear-gradient(to bottom, black ${headerHeight}px, transparent ${headerHeight}px)`
    }
  })
}

onMounted(async () => {
  await nextTick()
  updatePadding()
  window.addEventListener('resize', updatePadding)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePadding)
})

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function handleScroll() {
  const button = document.getElementById('goUpBtn')
  const footer = document.querySelector('.contacts-text')

  const footerRect = footer.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  if (window.scrollY > 1500) {
    button.classList.add('show')

    if (footerRect.top < viewportHeight) {
      const overlap = viewportHeight - footerRect.top
      button.style.transform = `translateY(-${overlap}px)`
    } else {
      button.style.transform = 'translateY(0)'
    }
  } else {
    button.classList.remove('show')
  }
}

window.addEventListener('scroll', handleScroll)
</script>

<template>
  <button class="up-btn" id="goUpBtn" @click="goUp">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="3.5rem"
      height="3.5rem"
    >
      <path
        clip-rule="evenodd"
        fill="white"
        fill-rule="evenodd"
        d="M 12 3 C 12.2652 3 12.5196 3.10536 12.7071 3.29289 L 19.7071 10.2929 C 20.0976 10.6834 20.0976 11.3166 19.7071 11.7071 C 19.3166 12.0976 18.6834 12.0976 18.2929 11.7071 L 13 6.41421 V 20 C 13 20.5523 12.5523 21 12 21 C 11.4477 21 11 20.5523 11 20 V 6.41421 L 5.70711 11.7071 C 5.31658 12.0976 4.68342 12.0976 4.29289 11.7071 C 3.90237 11.3166 3.90237 10.6834 4.29289 10.2929 L 11.2929 3.29289 C 11.4804 3.10536 11.7348 3 12 3 Z"
      />
    </svg>
  </button>
  <Header ref="headerRef" :useOpenMenu="useOpenMenu" />
  <OpenedHeaderMobile v-if="openMenu" />
  <main ref="mainRef" v-else>
    <IntroductorySectionLayout />
    <DoubleFunctionalSystemLayout />
    <AccessoriesAddonsLayout />
    <VideoSection />
    <AboutUsSection />
    <ContactsSection />
    <Footer />
  </main>
</template>

<style scoped>
.up-btn {
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 10;
  font-size: 2.1rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  color: white;
  align-self: flex-end;
  padding: 1.8rem 2.2rem;
  border: 3px solid white;
  border-radius: 1.9rem;

  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
.up-btn.show {
  opacity: 1;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .up-btn {
    bottom: 3%;
    right: 8%;
    font-size: 1.8rem;
    padding: 1.3rem 1.6rem;
  }
}
</style>
