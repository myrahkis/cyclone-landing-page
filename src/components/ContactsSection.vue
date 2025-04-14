<script setup>
import { ref } from 'vue'
import SocialsIcons from './SocialsIcons.vue'
import BgBlurModal from '@/ui/BgBlurModal.vue'
import CallbackForm from './CallbackForm.vue'

const isModalOpen = ref(false)

function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <BgBlurModal :closeModal="closeModal" v-if="isModalOpen" key="callback">
    <CallbackForm :isModalOpen="closeModal" />
  </BgBlurModal>
  <section class="contacts-section" id="contacts">
    <h2>Контактная информация</h2>
    <div class="contacts-grid">
      <div class="contacts-info">
        <div>
          <div>
            <p class="phone">+7 495 641-55-67</p>
            <p class="email">info@othertool.ru</p>
          </div>
          <div>
            <p class="address">
              Москва, <br />
              ул. Воронцовские пруды, <br />
              дом 3, подъезд 26
              <br />
              (вход с ул. Академика Челомея)
            </p>
          </div>
        </div>
        <div class="contacts-info-right">
          <p>
            Пн-Пт: 09:00 – 19:00, <br />
            Сб: 10:00 – 18:00, <br />
            Вс — выходной
          </p>
          <SocialsIcons iconWidth="5rem" />
        </div>
      </div>
      <p class="contacts-text">
        Мы всегда готовы помочь вам определиться с необходимой комплектацией циклонного фильтра и
        ответить на любые вопросы, касающиеся наших продуктов и услуг. Не стесняйтесь обращаться к
        нам по любым вопросам — будь то консультация по выбору инструмента, детали заказа или
        техническая поддержка.
      </p>
      <div class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A251189b0d152a15f05ac87119644b8e58fe04752b0c72ff8a62ee92c3c7d9ff6&amp;source=constructor"
          width="100%"
          height="100%"
          style="border: 0"
          tabindex="-1"
        ></iframe>
      </div>
    </div>
    <div class="btns-wrapper">
      <a
        class="white-border-btn"
        type="button"
        href="https://othertool.ru/home_master/tsiklonnye-filtry-dlja-pylesosa"
        target="_blank"
        >Перейти в магазин</a
      >
      <button class="white-border-btn" @click="isModalOpen = true">Обратный звонок</button>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 2rem;
  flex-grow: 1;
}

.contacts-info {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 4rem);
  width: 100%;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
}
.contacts-info-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.contacts-text {
  grid-column: 2 / -1;
  height: fit-content;
  width: 100%;
}
.address {
  text-align: start;
}
.phone {
  font-size: clamp(1.6rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: start;
}
.email {
  margin-bottom: 1.5rem;
}
.map {
  overflow: hidden;
  flex-grow: 1;
  border: 3px solid white;
  border-radius: 1.9rem;

  grid-column: 2 / -1;
  grid-row: 2 / 4;

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
  width: 100%;
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
  text-decoration: none;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  transition: all 0.3s;

  &:first-child {
    font-size: 2rem;
    &:hover,
    &:active,
    &:focus {
      border: 3px solid var(--brand-yellow-color);
      background-color: var(--brand-yellow-color);
      color: black;
    }
  }
  &:last-child {
    &:hover,
    &:active,
    &:focus {
      border: 3px solid var(--brand-blue-color);
      background-color: var(--brand-blue-color);
      color: black;
    }
  }
}

@media (max-width: 975px) {
  .phone {
    font-size: clamp(1.6rem, 2.5vw, 2.8rem);
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .contacts-grid {
    display: flex;
    flex-direction: column;
  }
  .contacts-info {
    flex-direction: row;
    justify-content: space-between;
    order: 1;
  }
  .map {
    order: 3;
    height: 50vh;
  }
  .white-border-btn {
    padding: 2rem 0;
  }
}
@media (max-width: 480px) {
  .white-border-btn {
    font-size: 1.6rem;

    &:first-child {
      font-size: 1.7rem;
    }
  }
}
</style>
