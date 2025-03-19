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
import AccessoriesSection from './components/AccessoriesSection.vue'
// import { nextTick, onMounted, onUnmounted, ref } from 'vue'

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
    <ThirdSection
      gradientDirection="to top"
      :equipments1="equipments1"
      :equipments2="equipments2"
      layoutVariant="default"
    />
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
    />
    <AccessoriesSection
      gradientDirection="to top"
      topText="Металлическая (железная) бочка с крышкой — 
это идеальная ёмкость для работы в связке 
с циклонными фильтрами. Съёмная крышка надёжно крепится хомутом из оцинкованной стали, создавая полную герметичность. Разный объём бочек (10/20/30/50 литров) позволяет подобрать наиболее комфортный размер для ваших задач. Мы рекомендуем использовать емкости 10/20л для сбора тяжёлых отходов (бетонная крошка, песок, шлак, абразив, штукатурка, шпатлёвка 
и т.п.), 30/50л для сбора лёгких отходов (опилки, 
стружка, резиновая или пенопластовая крошка и т.п.)"
      bottomText="Пластиковые бочки — Так же могут использоваться как ёмкость для сбора мусора. Они имеют такой же литраж, и так же герметичны, но, в отличии 
от железной, не обладают необходимой жёсткостью для работы с циклоном. Пластиковую бочку может «схлопнуть» во время работы (сбора мусора) или даже на холостом ходу работы пылесоса, если пылесос окажется достаточно мощным или входящее отверстие недостаточно широким. 
Мы НЕ РЕКОМЕНДУЕМ использовать ПЛАСТИКОВЫЕ БОЧКИ для работы 
в связке с циклоном, но не можем Вам отказать в их продаже. Во избежание «схлопывания» пластиковой бочки, во время работы с циклонным фильтром, вам придётся делать внутри неё жёсткий каркас (из дерева или металла), 
что усложняет возможность использования циклона «из коробки», либо устанавливать на крышке ёмкости обратный клапан, что так же требует дополнительных как финансовых так и трудозатрат."
    />
    <ThirdSection
      gradientDirection="to bottom"
      text1="Шланг ПВХ Армированный 50мм (армирующая спираль выполнена 
из более плотного ПВХ). Внутренний диаметр 50мм, наружный диаметр 56мм. Жёсткий, тяжёлый, прочный. 
Вес 1,5м - 620гр. Основным преимуществом данного шланга является то, что внутри он полностью гладкий, что предотвращает засоры шланга. Продаётся необходимой Вам длинной от 1 до 30 метров."
      text2="Шланг ПВХ 50мм с фитингами. Фиксированная длина 1,5 м. Внутренний диаметр фитинга 
с одной стороны 50мм, с другой стороны 45мм. Вес 1,5м - 560гр. Преимущество данного шланга в его лёгкости и относительной мягкости. Он похож на стандартный шланг 
от пылесосов. Однако его недостатком (как 
и любого пылесосного шланга), является ребристая внутренняя поверхность, что создаёт риск засорения. Данный шланг 
может быть вставлен сам в себя, таким 
образом можно соединить несколько 1,5 метровых отрезков для получения необходимой вам длинны."
      layoutVariant="default"
    />
    <ThirdSection
      gradientDirection="to top"
      text1="Доп блок Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed 
leo ut rutrum."
      text2="Доп блок Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo."
      layoutVariant="reverse"
    />
    <!-- <AccessoriesSection gradientDirection="to bottom" topText="" /> -->
    <FifthSection />
    <VideoSection />
    <AboutUsSection />
    <ContactsSection />
    <Footer />
  </main>
</template>

<style scoped></style>
