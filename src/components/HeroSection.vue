<script setup>
const fullImgPath1 = `${import.meta.env.BASE_URL}2025-02-13-bg.png`
const fullImgPath2 = `${import.meta.env.BASE_URL}2025-02-13.png`
const fullImgPath3 = `${import.meta.env.BASE_URL}clear-mobile.png`
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
    <h3 class="text">
      Чистота на всех уровнях — <br />
      двойная защита для вашего оборудования!
    </h3>
    <div class="texts">
      <p>
        Циклонный фильтр может работать абсолютно с любым пылесосом - строительным, бытовым,
        промышленным.
      </p>
      <p>
        Кроме того... циклонный фильтр — может собирать в ёмкость влажные отходы или даже воду, но
        пылесос в данном случае должен иметь функцию влажной уборки или иметь статус моющего.
      </p>
    </div>
    <!-- <button class="order-btn">Заказать</button> -->
    <div class="clear-img"></div>
    <div class="clear-img-mobile"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130vh;
  padding: 3.5rem;
  padding-top: 15rem;
  padding-bottom: 15rem;
  color: var(--white-color);
}
.hero-section::before {
  position: absolute;
  content: '';
  inset: 0;
  background: var(--bg-url);
  /* background-position: center; */
  background-position: center bottom 0;
  background-size: 75%;
  /* background-size: 80% 100%; */
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
  /* display: inline-block; */
  bottom: 5.2%;
  /* bottom: 5rem; */
  right: 6%;
  /* right: 10rem; */
  width: 45%;
  /* width: 68rem; */
  z-index: 1;
  height: auto;
  padding-bottom: 35.5%;
  /* height: 74vh; */
  background: var(--bg-clear-url);
  background-position: left 0 bottom -1rem;
  background-size: 86%;
  background-repeat: no-repeat;
  border: 3px solid white;
  border-radius: 4.5rem;
}
.clear-img-mobile {
  display: none;
  background: var(--bg-clear-mob-url);
}
.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  margin-top: 2rem;
  font-size: 3.5rem;
  width: 40%;
}
.text {
  font-size: 3.5rem;
  width: 45%;
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
    height: 140vh;
    padding-top: 20rem;
  }
}
@media (min-width: 1800px) {
  .hero-section {
    height: 125vh;
    padding-top: 20rem;
  }
}
@media (min-width: 2200px) {
  .hero-section {
    height: 125vh;
    padding-top: 25rem;
  }
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .text {
    width: 100%;
  }
  .clear-img {
    bottom: 4%;
  }
}

/* (768px–1023px) */
@media (max-width: 1023px) {
  /* .hero-section {
    height: 155vh;
  } */
  .clear-img {
    display: none;
  }
  .clear-img-mobile {
    position: absolute;
    display: block;
    left: 50%;
    bottom: 8%;
    width: 72%;
    transform: translate(-50%);
    z-index: 1;
    height: auto;
    padding-bottom: 40%;
    background: var(--bg-clear-mob-url);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid white;
    border-radius: 4.5rem;
  }
  .texts {
    width: 100%;
    /* flex-direction: row; */
  }
  .text {
    width: 100%;
  }
}
@media (min-width: 930px) and (max-width: 1023px) {
  .hero-section {
    height: 160vh;
  }
}

@media (min-width: 858px) and (max-width: 930px) {
  .hero-section {
    height: 145vh;
  }
  .clear-img-mobile {
    bottom: 7.5%;
  }
}
@media (min-width: 767px) and (max-width: 858px) {
  .hero-section {
    height: 140vh;
  }
  .clear-img-mobile {
    bottom: 7%;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .hero-section {
    height: 118vh;
  }
  .texts,
  .text {
    width: 100%;
  }
  .texts {
    gap: 1rem;
  }
  .text {
    font-size: 2.3rem;
  }
}

/* (до 479px) */
@media (max-width: 638px) {
  .hero-section {
    height: 122vh;
  }
  .hero-section::before {
    background-size: 90%;
  }
  .clear-img-mobile {
    bottom: 3%;
    width: 90%;
    padding-bottom: 58%;
  }
}

@media (min-width: 406px) and (max-width: 521px) {
  .hero-section {
    height: 113vh;
  }
  .clear-img-mobile {
    bottom: 2.5%;
  }
}
@media (max-width: 406px) {
  .hero-section {
    height: 105vh;
  }
  h1 {
    font-size: 2.9rem;
  }
  .text {
    font-size: 2rem;
  }
  .clear-img-mobile {
    bottom: 1%;
    padding-bottom: 63%;
  }
}
@media (max-width: 399px) {
  .hero-section {
    height: 105vh;
  }
  h1 {
    font-size: 2.9rem;
  }
  .text {
    font-size: 2rem;
  }
  .clear-img-mobile {
    bottom: 1%;
    padding-bottom: 63%;
  }
}

@media (min-width: 373px) and (max-width: 380px) {
  .hero-section {
    height: 115vh;
  }
  .clear-img-mobile {
    bottom: 2.5%;
  }
}

@media (max-width: 376px) {
  .hero-section {
    height: 115vh;
  }
}
@media (max-width: 330px) {
  .hero-section {
    height: 128vh;
  }
}
</style>
