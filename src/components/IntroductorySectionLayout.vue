<script setup>
import HowFilterWorksSection from './HowFilterWorksSection.vue'
import HeroSection from './HeroSection.vue'
import TwoColumnsLayout from './TwoColumnsLayout.vue'
import TwoLongCellsWOnePhoto from './TwoLongCellsWOnePhoto.vue'
import PhotoCarousel from './PhotoCarousel.vue'

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

const filterTexts = [
  'Циклонный фильтр с двухступенчатой системой фильтрации очищает проходимый через него воздух до 99%. Крупная и средняя фракция отсеивается через фильтр SN50N3, а мелкодисперционная пыль оседает в колбе второй ступени фильтрации.',
  'Данная система способна скидывать в ёмкость даже самую мелкодисперсионную пыль - мука, пыль после зашкуривания шпаклёвки или дерева и т.п. А то, небольшое количество мелкодисперсионной пыли, которое при работе обычного циклона, попадало в пылесос, в данной системе попадает в колбу второй ступени фильтрации.',
]

const howFilterWorksTexts = [
  'Циклонный фильтр для пылесоса SN50ТЗ с одной ступенью очистки экономит ваши деньги, не позволяя попадать крупным и средним частицам фракции попадать в пылесос. Загрязненныйпоток сначала вместе с воздухом попадает в систему, а позже при помощи центробежной силы отделяет загрязненный поток от воздуха. Благодаря вращению различные крупные частицы (пыль, песок, стружка и т.д.) не попадают в ваше устройство, а скапливается в специальные сосуд, например, в металлическую бочку.',
]

const cyclone_SN50T3F_slides = [
  `${import.meta.env.BASE_URL}CycloneSN50T3F/how-filter-works1.png`,
  `${import.meta.env.BASE_URL}CycloneSN50T3F/CycloneSN50T3F-1.png`,
  `${import.meta.env.BASE_URL}CycloneSN50T3F/CycloneSN50T3F-2.png`,
  `${import.meta.env.BASE_URL}CycloneSN50T3F/CycloneSN50T3F-3.png`,
  `${import.meta.env.BASE_URL}CycloneSN50T3F/CycloneSN50T3F-4.png`,
  `${import.meta.env.BASE_URL}CycloneSN50T3F/CycloneSN50T3F-5.png`,
]

const nozzleSlides = [
  `${import.meta.env.BASE_URL}Nozzle/nozzle1.png`,
  `${import.meta.env.BASE_URL}Nozzle/nozzle2.png`,
  `${import.meta.env.BASE_URL}Nozzle/nozzle3.png`,
]
</script>

<template>
  <HeroSection />
  <HowFilterWorksSection
    :showHeader="true"
    gradientDirection="to top"
    heading="Циклонный фильтр для пылесоса SN50T3"
    topText="Циклонный фильтр для пылесоса SN50T3 позволяет отделять влажные и сухие частицы пыли до
          97%, что снижает загрязнение фильтра и мешка пылесоса, тем самым продлевая их срок службы.
          При этом фильтр пылесоса практически не забивается."
    :bottomText="howFilterWorksTexts"
  >
    <template #photo-place>
      <PhotoCarousel :pics="cyclone_SN50T3F_slides" />
    </template>
  </HowFilterWorksSection>
  <TwoColumnsLayout
    heading="Циклонный фильтр с двойной фильтрацией"
    gradientDirection="to bottom"
    rowDirection="row"
    :texts="filterTexts"
    :pics="[]"
  />
  <TwoLongCellsWOnePhoto
    :nozzleSlides="nozzleSlides"
    :equipments1="equipments1"
    :equipments2="equipments2"
  />
</template>

<style scoped></style>
