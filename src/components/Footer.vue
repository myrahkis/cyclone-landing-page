<script setup>
import BtnsLinksList from '@/ui/BtnsLinksList.vue';
import SocialsIcons from './SocialsIcons.vue'

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <img src="/footerIdk.png" alt="" class="bg-pic big-thing">
    <img src="/15.png" alt="" class="bg-pic small-skrew">
    <img src="/14.png" alt="" class="bg-pic mid-skrew">
    <img src="/13.png" alt="" class="bg-pic big-skrew">
    <button class="up-btn" @click="goUp">Наверх</button>
    <div class="container">
      <BtnsLinksList width="100%" fontSize="2rem" />
      <div class="lower-footer">
        <div class="info-block">
          <div class="idk">
            <img src="/logo-gray.png" alt="logo" class="logo" />
            <p class="data-text">
              ИП Колосова Юлия Романовна <br />
              ИНН: 771508405997 <br />
              ОГРНИП: 317774600416022 <br />
              Юр. адрес: Москва, ул.Широкая, д4, к.2
            </p>
          </div>
          <div class="right-side">
            <p class="contacts">
              +7 495 641-55-66 <br />
              info@ot24.pro
            </p>
            <SocialsIcons iconWidth="3.8rem" />
          </div>
        </div>
        <div>
          <p class="credits">© 2025 «ИнойИнструмент»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.7));
  padding: 3.5rem;
  justify-content: end;
  gap: 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  padding: 3.5rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  height: 48vh;
  width: 100%;
}

.lower-footer {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.info-block {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.idk {
  display: flex;
  gap: 8rem;
}
.logo {
  height: 11.5rem;
}
.data-text {
  font-size: 1.5rem;
  line-height: 3rem;
  color: var(--gray-color);
}
.right-side {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.contacts {
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--gray-color);
}
.credits {
  font-size: 1.6rem;
  color: var(--gray-color);
}

.up-btn {
  position: relative;
  z-index: 2;
  /* width: 10rem; */
  font-size: 2.1rem;
  background-color: transparent;
  color: white;
  align-self: flex-end;
  padding: 2rem 6rem;
  border: 3px solid white;
  border-radius: 1.9rem;
}

.bg-pic {
  position: absolute;
}
.big-thing {
  top: -17rem;
  left: 5rem;
  width: 43rem;
}
.small-skrew {
  top: 6rem;
  left: 54rem;
  width: 20rem;
}
.mid-skrew {
  top: 6rem;
  left: 75rem;
  width: 24rem;
}
.big-skrew {
  top: -8rem;
  right: 13rem;
  width: 40rem;
}
</style>
