<script setup>
import DescriptionSection from './DescriptionSection.vue'
import HeroSection from './HeroSection.vue'
import OperationPrinciple from './OperationPrinciple.vue'
import TwoLongCellsLayout from './TwoLongCellsLayout.vue'

const equipments1 = {
  header: 'Циклонный фильтр с двойной фильтрацией',
  subheader: 'Комплектация',
  equip: [
    'Циклон SN50T3 - 1шт',
    'Циклон второй ступени',
    'фильтрации - 1шт',
    'Соединительный кронштейн - 1шт',
    'Муфта 50-56 - 2шт',
    'Хомут 42-58 - 2шт',
    'Фланец крепления: 1шт',
    'Крепёжные болты и гайки - 4 комплекта',
    'Прокладка - 1шт',
  ],
}
const equipments2 = {
  header: 'Насадка на циклонный фильтр SN50T3 — вторая ступень фильтрации',
  subheader: 'Комплектация',
  equip: [
    'Насадка на циклонный фильтр - 1шт',
    'Муфта 50-56мм - 2шт',
    'Крепёжный болт, гайка, шайба - 4шт',
  ],
}
</script>

<template>
  <HeroSection :mainRef="mainRef" />
  <DescriptionSection />
  <OperationPrinciple />
  <TwoLongCellsLayout
    gradientDirection="to top"
    :equipments1="equipments1"
    :equipments2="equipments2"
    layoutVariant="default"
  />
</template>

<style scoped></style>
