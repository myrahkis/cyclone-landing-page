<script setup>
import Header from './components/Header.vue'
import IntroductorySectionLayout from './components/IntroductorySectionLayout.vue'
import DoubleFunctionalSystemLayout from './components/DoubleFunctionalSystemLayout.vue'
import AccessoriesAddonsLayout from './components/AccessoriesAddonsLayout.vue'
import VideoSection from './components/VideoSection.vue'
import AboutUsSection from './components/AboutUsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
// import { nextTick, onMounted, onUnmounted, ref } from 'vue'

// const mainRef = ref(null)
// const headerRef = ref(null)

// const updatePadding = () => {
//   requestAnimationFrame(() => {
//     if (headerRef.value?.$el && mainRef.value) {
//       const headerHeight = headerRef.value.$el.getBoundingClientRect().height
//       mainRef.value.style.paddingTop = `${headerHeight}px`
//     }
//   })
// }

// onMounted(async () => {
//   await nextTick()
//   updatePadding()
//   window.addEventListener('resize', updatePadding)
// })

// onUnmounted(() => {
//   window.removeEventListener('resize', updatePadding)
// })
</script>

<template>
  <Header ref="headerRef" />
  <main ref="mainRef">
    <!-- <Header :mainRef="mainRef" /> -->
    <IntroductorySectionLayout />
    <DoubleFunctionalSystemLayout />
    <AccessoriesAddonsLayout />
    <VideoSection />
    <AboutUsSection />
    <ContactsSection />
  </main>
  <Footer />
</template>

<style scoped></style>
