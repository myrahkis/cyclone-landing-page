<script setup>
import SocialsIcons from './SocialsIcons.vue'
import ToShopBtn from '@/ui/ToShopBtn.vue'
import BgBlurModal from '@/ui/BgBlurModal.vue'
import PublicOfferAgrModal from './PublicOfferAgrModal.vue'
import { ref } from 'vue'
import DataProcessingPolicyModal from './DataProcessingPolicyModal.vue'

const isPublicOfferAgrModalOpen = ref(false)
const isDataProcessingPolicyModalOpen = ref(false)

function closePublicOfferAgrModal() {
  return (isPublicOfferAgrModalOpen.value = false)
}
function closeDataProcessingPolicyModal() {
  return (isDataProcessingPolicyModalOpen.value = false)
}
</script>

<template>
  <BgBlurModal :closeModal="closePublicOfferAgrModal" v-if="isPublicOfferAgrModalOpen">
    <PublicOfferAgrModal />
  </BgBlurModal>
  <BgBlurModal
    :closeModal="closeDataProcessingPolicyModal"
    v-else-if="isDataProcessingPolicyModalOpen"
  >
    <DataProcessingPolicyModal />
  </BgBlurModal>
  <footer class="footer">
    <img src="/footerIdk.png" alt="" class="bg-pic big-thing" />
    <img src="/15.png" alt="" class="bg-pic small-skrew" />
    <img src="/14.png" alt="" class="bg-pic mid-skrew" />
    <img src="/13.png" alt="" class="bg-pic big-skrew" />
    <div class="footer-container">
      <!-- <BtnsLinksList width="100%" fontSize="2rem" /> -->
      <div class="lower-footer">
        <div class="info-block">
          <div class="idk">
            <img src="/logo-gray.png" alt="лого" class="logo" />
            <p class="data-text">
              ИП Колосова Юлия Романовна <br />
              ИНН: 771508405997 <br />
              ОГРНИП: 317774600416022 <br />
              Юр. адрес: Москва, ул.Широкая, д4, к.2
            </p>
          </div>
          <div class="right-side">
            <p class="contacts">
              +7 495 641-55-67 <br />
              info@othertool.ru
            </p>
            <ToShopBtn />
            <SocialsIcons iconWidth="3.8rem" />
          </div>
        </div>
        <div class="credits">
          <p>© 2025 «ИнойИнструмент»</p>
          <p>
            <a
              class="credits-btn"
              href=""
              type="button"
              @click.prevent="isDataProcessingPolicyModalOpen = true"
              >Политика обработки персональных данных</a
            >
          </p>
          <p>
            <a class="credits-btn" href="" @click.prevent="isPublicOfferAgrModalOpen = true"
              >Пользовательское соглашение</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  color: white;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.6) 70%,
    rgba(0, 0, 0, 0.4) 100%
  );
  padding: 3.5rem;
  justify-content: end;
  gap: 2rem;
}
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  padding: 3.5rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  /* min-height: 48vh; */
  width: 100%;
  margin-top: 30%;
}

.lower-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 3.5rem;
}

.info-block {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.idk {
  display: flex;
  gap: clamp(2rem, 5vw, 8rem);
}
.logo {
  height: 11.5rem;
}
.data-text {
  /* font-size: 1.5rem; */
  line-height: clamp(2rem, 3vw, 3rem);
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
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  color: var(--gray-color);
}

.bg-pic {
  position: absolute;
}
.big-thing {
  top: -20%;
  left: 0;
  width: 35vw;
}
.small-skrew {
  top: 3%;
  left: 35%;
  width: 15vw;
}
.mid-skrew {
  top: 7%;
  right: 30%;
  width: 18vw;
}
.big-skrew {
  top: -15%;
  right: 0;
  width: 35vw;
}

.credits-btn {
  &:link,
  &:visited {
    color: var(--gray-color);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .info-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .idk {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
  }
  .logo {
    height: 7rem;
  }
  .big-thing {
    top: -13%;
    left: 0rem;
    width: 20rem;
  }
  .small-skrew {
    top: -6rem;
    left: 23rem;
    width: 15rem;
  }
  .mid-skrew {
    top: 4%;
    left: 48%;
    width: 15rem;
  }
  .big-skrew {
    top: -15rem;
    right: -10rem;
    width: 33rem;
  }
}
@media (max-width: 665px) {
  .small-skrew {
    left: 20rem;
  }
}
@media (max-width: 565px) {
  .big-thing {
    width: 18rem;
  }
  .small-skrew {
    left: 17rem;
    width: 13rem;
  }
  .mid-skrew {
    left: 48%;
    width: 13rem;
  }
  .big-skrew {
    width: 30rem;
  }
}
@media (max-width: 480px) {
  .footer-container {
    padding: 2rem;
  }
  .big-thing {
    top: -10%;
    width: 16rem;
  }
  .small-skrew {
    top: -2.5rem;
    left: 14rem;
    width: 10rem;
  }
  .mid-skrew {
    top: 6%;
    left: 45%;
    width: 11rem;
  }
  .big-skrew {
    width: 28rem;
    right: -8rem;
  }
  .logo {
    height: 6rem;
  }
  .credits {
    flex-direction: column-reverse;
  }
}
</style>
