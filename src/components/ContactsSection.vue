<script setup>
import SocialsIcons from './SocialsIcons.vue'
</script>

<template>
  <section class="contacts-section" id="contacts">
    <!-- <img src="/spanner-bottom-half.png" alt="" class="spanner" /> -->
    <h2>Контактная информация</h2>
    <div class="container">
      <div class="contacts-info">
        <div>
          <h3>+7 495 641-55-66</h3>
          <p>info@ot24.pro</p>
        </div>
        <div>
          <p>
            Москва, <br />
            ул. Воронцовские пруды, <br />
            дом 3, подъезд 26
          </p>
          <p>(вход с ул. Академика Челомея)</p>
        </div>
        <div>
          <p>
            Пн-Пт: 09:00 – 19:00, <br />
            Сб: 10:00 – 18:00, <br />
            Вс — выходной
          </p>
        </div>
        <SocialsIcons iconWidth="5rem" />
      </div>
      <div class="map-group">
        <p>
          Мы всегда готовы помочь вам определиться с необходимой комплектацией циклонного фильтра и
          ответить на любые вопросы, касающиеся наших продуктов и услуг. Не стесняйтесь обращаться к
          нам по любым вопросам — будь то консультация по выбору инструмента, детали заказа или
          техническая поддержка.
        </p>
        <div class="map">map</div>
      </div>
    </div>
    <div class="btns-wrapper">
      <button class="white-border-btn">Перейти в магазин</button>
      <button class="white-border-btn">Обратный звонок</button>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3.5rem;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}

.container {
  display: flex;
  gap: 2rem;
  flex-grow: 1;
}
.contacts-info {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 30%;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.map-group {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 70%;
}
.map {
  flex-grow: 1;
  border: 3px solid white;
  border-radius: 1.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
}

.spanner {
  position: absolute;
  top: 0;
  right: 0.35rem;
  width: 80rem;
}
.btns-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
}
.white-border-btn {
  position: relative;
  z-index: 2;
  background-color: transparent;
  color: white;
  width: 50%;
  padding: 2.7rem 0;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  border: 3px solid white;
  border-radius: 1.9rem;
  transition: all 0.3s;

  &:first-child {
    &:hover {
      border: 3px solid var(--brand-yellow-color);
      background-color: var(--brand-yellow-color);
      color: black;
    }
  }
  &:last-child {
    &:hover {
      border: 3px solid var(--brand-blue-color);
      background-color: var(--brand-blue-color);
      color: black;
    }
  }
}
</style>
