<script setup>
import OneSideImgTwoRowsLayout from './OneSideImgTwoRowsLayout.vue'
import HowFilterWorksSection from './HowFilterWorksSection.vue'
import FourPicsLayout from './FourPicsLayout.vue'

const howFilterWorksTexts = [
  'Циклонный этап: На первом этапе загрязненный поток (воздух или жидкость) поступает в корпус системы, где он под воздействием центробежных сил начинает вращаться. Это вращение заставляет более крупные частицы оседать на стенках фильтра и скапливаться в специальном отсеке для сбора загрязнений. Этот процесс эффективно удаляет более тяжелые и крупные частицы, такие как пыль, песок и металлические частички.',
  'Механическая фильтрация: После первичной очистки воздух или жидкость проходит через второй фильтрующий элемент — высококачественный механический фильтр, который задерживает мельчайшие частицы, включая микроскопические загрязнения и микробиологические вещества. В зависимости от типа используемой мембраны или материала фильтрации, можно достичь очистки на уровне микронных частиц.',
]
</script>

<template>
  <OneSideImgTwoRowsLayout />
  <FourPicsLayout />
  <HowFilterWorksSection
    :showHeader="false"
    gradientDirection="to bottom"
    heading="Принцип работы циклонного фильтра с двойной фильтрацией"
    topText="Циклонная система двойной фильтрации эффективно очищает воздух или жидкости от крупных частиц и мелкой пыли 
с помощью двухступенчатой системы фильтрации. Сначала грязь удаляется за счет центробежной силы, а затем 
дополнительные фильтры задерживают остаточные загрязнения."
    :bottomText="howFilterWorksTexts"
  >
    <template #photo-place>
      <img
        src="/how-double-filter-works.png"
        alt="Схема работы циклонного фильтра с двойной фильтрацией"
        class="double-filter"
      />
    </template>
  </HowFilterWorksSection>
</template>

<style scoped>
.double-filter {
  margin: 0 auto;
  height: 100%;
  max-width: 100%;
  width: 50%;
  object-fit: contain;
}
</style>
