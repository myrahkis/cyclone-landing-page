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
  isPublicOfferAgrModalOpen.value = false
}
function closeDataProcessingPolicyModal() {
  isDataProcessingPolicyModalOpen.value = false
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
    <div class="footer-container">
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
          <p class="credits-text">© 2025 «ИнойИнструмент»</p>
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
            <a class="credits-btn" href="card_of_all_banks.pdf" download>Карточка компании</a>
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
  width: 100%;
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
  text-align: start;
  line-height: clamp(2rem, 3vw, 3rem);
  color: var(--gray-color);
}
.right-side {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.contacts {
  font-size: clamp(1.2rem, 2.5 vw, 2rem);
  line-height: 2.5rem;
  color: var(--gray-color);
}
.credits {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  color: var(--gray-color);
}
.credits-text {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
}

.credits-btn {
  font-size: clamp(1.1rem, 2vw, 1.4rem);

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
}
@media (max-width: 480px) {
  .footer-container {
    padding: 2rem;
  }
  .logo {
    height: 6rem;
  }
  .credits {
    flex-direction: column-reverse;
  }
}
</style>
