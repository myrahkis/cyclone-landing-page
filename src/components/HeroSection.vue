<script setup>
const fullImgPath1 = `${import.meta.env.BASE_URL}hero-bg.webp`
const fullImgPath2 = `${import.meta.env.BASE_URL}hero-clear.webp`
const fullImgPath3 = `${import.meta.env.BASE_URL}hero-bg.webp`
</script>

<template>
  <section
    class="hero-section"
    :style="{
      '--bg-url': `url(${fullImgPath1})`,
      '--bg-clear-url': `url(${fullImgPath2})`,
      '--bg-clear-mob-url': `url(${fullImgPath3})`,
    }"
    id="home"
    ref="mainRef"
  >
    <div class="gradient"></div>
    <h1>
      Циклонные фильтры <br />
      Циклонные системы двойной фильтрации
    </h1>
    <div class="hero-wrapper">
      <div class="texts">
        <h3 class="text">
          Чистота на всех уровнях — <br class="mobile-br" />
          двойная защита для вашего оборудования!
        </h3>
        <p>
          Циклонный фильтр может работать абсолютно с любым пылесосом - строительным, бытовым,
          промышленным.
        </p>
        <p>
          Кроме того... циклонный фильтр — может собирать в ёмкость влажные отходы или даже воду, но
          пылесос в данном случае должен иметь функцию влажной уборки или иметь статус моющего.
        </p>
      </div>
      <div class="clear-img"></div>
      <div class="clear-img-mobile"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3.5rem;
  color: var(--white-color);
}
.hero-section::before {
  position: absolute;
  content: '';
  inset: 0;
  background: var(--bg-url);
  background-position: center bottom 0;
  background-size: 70%;
  background-repeat: no-repeat;
  filter: blur(4px);
  z-index: -1;
}
.gradient {
  position: absolute;
  inset: 0;
  z-index: -1;
  mix-blend-mode: multiply;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.clear-img {
  position: absolute;
  bottom: 1%;
  right: 5.5%;
  width: 45%;
  z-index: 1;
  height: auto;
  padding-bottom: 35.5%;
  background: var(--bg-clear-url);
  background-position: left 0 bottom 0;
  background-size: 83%;
  background-repeat: no-repeat;
  border: 3px solid white;
  border-radius: 4.5rem;
}
.clear-img-mobile {
  display: none;
  background: var(--bg-clear-mob-url);
}
.hero-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  flex-grow: 1;
}
.texts {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  margin-top: 2rem;
  font-size: 3.5rem;
  width: 40%;
  height: fit-content;
  margin-bottom: 15%;
}
.order-btn {
  margin-top: auto;
  width: 30rem;
  font-size: 3.5rem;
  font-weight: 700;
  color: #383b3c;
  background-color: var(--brand-blue-color);
  border-radius: 2rem;
  border: none;
  padding: 2rem;
}

@media (min-width: 1600px) {
  .hero-section {
    min-height: 110vh;
  }
}
@media (min-width: 1800px) {
  .hero-section {
    min-height: 115vh;
  }
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .clear-img {
    background-size: 84%;
    bottom: -0.5%;
  }
  .text {
    width: 100%;
  }
}

/* (768px–1023px) */
@media (max-width: 1081px) {
  .mobile-br {
    display: none;
  }
  .clear-img {
    display: none;
  }
  .clear-img-mobile {
    position: absolute;
    display: block;
    left: 50%;
    bottom: -1%;
    width: 76.5%;
    transform: translate(-50%);
    z-index: 1;
    height: auto;
    padding-bottom: 50%;
    background: var(--bg-clear-mob-url);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid white;
    border-radius: 4.5rem;
  }
  .texts {
    width: 100%;
    margin-bottom: 55%;
  }
  .text {
    width: 100%;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .clear-img-mobile {
    width: 78.5%;
    bottom: -2.5%;
  }
  .texts {
    width: 100%;
    margin-bottom: 55%;
    gap: 1rem;
  }
  .text {
    width: 100%;
    font-size: 2.3rem;
  }
}

@media (max-width: 638px) {
  .hero-section::before {
    background-size: 90%;
  }
  .clear-img-mobile {
    background-size: 105%;
    width: 100%;
    bottom: -1%;
    padding-bottom: 65%;
  }
  .texts {
    margin-bottom: 73%;
  }
}

@media (max-width: 448px) {
  .texts {
    margin-bottom: 80%;
  }
  .clear-img-mobile {
    background-size: 104%;
    width: 105%;
    bottom: -2%;
    padding-bottom: 65%;
  }
}
</style>
