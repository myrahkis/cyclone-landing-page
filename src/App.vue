<script setup>
import HeroSection from './components/HeroSection.vue'
import DescriptionSection from './components/DescriptionSection.vue'
import ThirdSection from './components/ThirdSection.vue'
import FourthSection from './components/FourthSection.vue'
import FifthSection from './components/FifthSection.vue'
import VideoSection from './components/VideoSection.vue'
import AboutUsSection from './components/AboutUsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import OperationPrinciple from './components/OperationPrinciple.vue'
import FloorVarientSection from './components/FloorVarientSection.vue'
// import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const floorVarientTexts = [
  'Тележка строительная, предназначена для перевозки различных грузов по строительной площадке.',
  'Данная тележка была разработана для совместной работы пылесоса и ёмкости с установленным циклоном. При помощи хозяйственных резиновых стяжек вы можете закрепить пылесос и бочку с циклоном к тележке, для более удобного перемещения системы по строй площадке.',
  'Тележка выполнена из влагостойкой 18мм фанеры, размером 800*400мм. На тележке размещено 4 поворотных колеса диаметром 50мм и 6 анкерных колец, для фиксирования на ней бочки, пылесоса и (или) верёвки-ручки. Максимальная нагрузка 300кг',
]
const characteristic = {
  header: 'Характеристики:',
  charac: [
    'Фанера влагостойкая, 18мм, Российского производства',
    'Габариты тележки: 800*400*90мм',
    'Максимальная нагрузка: 300кг (по ровному гладкому полу)',
    'Рекомендованная нагрузка: не более 200кг',
  ],
}

const equipment = {
  header: 'Комплектация',
  equip: [
    'Фанера 800*400*18мм – 1шт',
    'Колесо поворотное диаметром 50мм – 4шт',
    'Саморез 3,5*16мм – 16шт',
    'Крючок с резьбовой втулкой – 6шт',
  ],
}
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
    <Header :mainRef="mainRef" />
    <HeroSection :mainRef="mainRef" />
    <DescriptionSection />
    <OperationPrinciple />
    <ThirdSection />
    <FourthSection />
    <FloorVarientSection
      gradientDirection="to top"
      rowDirection="row"
      :floorVarientTexts="floorVarientTexts"
      :characteristic="characteristic"
      :equipment="equipment"
    />
    <FloorVarientSection
      gradientDirection="to bottom"
      rowDirection="row-reverse"
      :floor-varient-texts="floorVarientTexts"
      characteristic=""
      equipment=""
    />
    <FifthSection />
    <VideoSection />
    <AboutUsSection />
    <ContactsSection />
    <Footer />
  </main>
</template>

<style scoped></style>
