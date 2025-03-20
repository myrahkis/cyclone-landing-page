<script setup>
import TwoEvenTopCellsLayout from './TwoEvenTopCellsLayout.vue'
import FourPicsLayout from './FourPicsLayout.vue'
import TwoLongCellsLayout from './TwoLongCellsLayout.vue'
</script>

<template>
  <TwoEvenTopCellsLayout
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
  <TwoLongCellsLayout
    gradientDirection="to top"
    text1="Доп блок Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed 
leo ut rutrum."
    text2="Доп блок Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo."
    layoutVariant="reverse"
  />
  <FourPicsLayout />
</template>

<style scoped></style>
