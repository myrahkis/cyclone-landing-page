<script setup>
import TwoEvenTopCellsLayout from './TwoEvenTopCellsLayout.vue'
import TwoLongCellsLayout from './TwoLongCellsLayout.vue'
import TwoLongCellsWOnePhotoRev from './TwoLongCellsWOnePhotoRev.vue'

const metalBarrelSlides = [
  `${import.meta.env.BASE_URL}Barrels/metalBarrel1.png`,
  `${import.meta.env.BASE_URL}Barrels/metalBarrel2.png`,
  `${import.meta.env.BASE_URL}Barrels/metalBarrel3.png`,
]
const plasticBarrelSlides = [
  `${import.meta.env.BASE_URL}Barrels/plasticBarrel1.png`,
  `${import.meta.env.BASE_URL}Barrels/plasticBarrel2.png`,
  `${import.meta.env.BASE_URL}Barrels/plasticBarrel3.png`,
]
const blackHosesSlides = [
  `${import.meta.env.BASE_URL}Hoses/blackHose1.png`,
  `${import.meta.env.BASE_URL}Hoses/blackHose2.png`,
  `${import.meta.env.BASE_URL}Hoses/blackHose3.png`,
]
const whiteHosesSlides = [
  `${import.meta.env.BASE_URL}Hoses/whiteHose1.png`,
  `${import.meta.env.BASE_URL}Hoses/whiteHose2.png`,
  `${import.meta.env.BASE_URL}Hoses/whiteHose3.png`,
]
const cartSlides = [
  `${import.meta.env.BASE_URL}Carts/cart1.png`,
  `${import.meta.env.BASE_URL}Carts/cart2.png`,
  `${import.meta.env.BASE_URL}Carts/cart3.png`,
  `${import.meta.env.BASE_URL}Carts/cart4.png`,
]
const adapterSlides = [
  `${import.meta.env.BASE_URL}Adapter/adapter1.png`,
  `${import.meta.env.BASE_URL}Adapter/adapter2.png`,
]
</script>

<template>
  <TwoEvenTopCellsLayout
    :metalBarrelsPics="metalBarrelSlides"
    :plasticBarrelPics="plasticBarrelSlides"
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
  <TwoLongCellsLayout
    :pics2="blackHosesSlides"
    :pics1="whiteHosesSlides"
    gradientDirection="to bottom"
    layoutVariant="default"
  >
    <template #text-cell-1>
      <p>
        Шланг ПВХ Армированный 50мм (армирующая спираль выполнена из более плотного ПВХ). Внутренний
        диаметр 50мм, наружный диаметр 56мм. Жёсткий, тяжёлый, прочный. Вес 1,5м - 620гр. Основным
        преимуществом данного шланга является то, что внутри он полностью гладкий, что предотвращает
        засоры шланга. Продаётся необходимой Вам длиной от 1 до 30 метров.
      </p>
    </template>
    <template #text-cell-2>
      <p>
        Шланг ПВХ 50мм с фитингами. Фиксированная длина 1,5 м. Внутренний диаметр фитинга с одной
        стороны 50мм, с другой стороны 45мм. Вес 1,5м - 560гр. Преимущество данного шланга в его
        лёгкости и относительной мягкости. Он похож на стандартный шланг от пылесосов. Однако его
        недостатком (как и любого пылесосного шланга), является ребристая внутренняя поверхность,
        что создаёт риск засорения. Данный шланг может быть вставлен сам в себя, таким образом можно
        соединить несколько 1,5 метровых отрезков для получения необходимой вам длинны.
      </p>
    </template>
  </TwoLongCellsLayout>
  <TwoLongCellsWOnePhotoRev :cartSlides="cartSlides" :adapterSlides="adapterSlides" />
</template>

<style scoped></style>
