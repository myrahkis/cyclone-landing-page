<script setup>
import axios from 'axios'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import PersonalDataProcessingModal from './PersonalDataProcessingModal.vue'
import BgBlurModal from '@/ui/BgBlurModal.vue'
import PublicOfferAgrModal from './PublicOfferAgrModal.vue'
import IMask from 'imask'

const { isModalOpen } = defineProps({ isModalOpen: { type: Function, required: true } })

const validationError = ref('')
const isPersDataModalOpen = ref(false)
const isPublicOfferAgrModalOpen = ref(false)
const formInputRef = ref(null)
const maskInstance = ref(null)

const formData = ref({
  name: '',
  telephone: '',
})

async function submitHandle() {
  try {
    await axios.post('https://SITE_NAME/send-email.php', formData.value)
    alert('Сообщение отправлено!')
  } catch (error) {
    alert('Ошибка при отправке.')
  }
}

function closePersDataModal() {
  isPersDataModalOpen.value = false
}
function closePublicOfferAgrModal() {
  isPublicOfferAgrModalOpen.value = false
}

const handlePhoneInput = (event) => {
  formData.value.telephone = event.target.value.replace(/\D/g, '')
}

onMounted(() => {
  if (formInputRef.value) {
    maskInstance.value = IMask(formInputRef.value, {
      mask: '+{7} (000) 000-00-00',
      lazy: true,
    })

    maskInstance.value.on('accept', () => {
      formData.value.telephone = maskInstance.value.value
    })
  }
})
onBeforeUnmount(() => {
  if (maskInstance.value) {
    maskInstance.value.destroy()
    maskInstance.value = null
  }
})
</script>

<template>
  <BgBlurModal :closeModal="closePersDataModal" v-if="isPersDataModalOpen">
    <PersonalDataProcessingModal />
  </BgBlurModal>
  <BgBlurModal :closeModal="closePublicOfferAgrModal" v-else-if="isPublicOfferAgrModalOpen">
    <PublicOfferAgrModal />
  </BgBlurModal>
  <form ref="formRef" @submit.prevent="submitHandle" class="callback-form" @click.stop>
    <button class="close-btn" @click="isModalOpen">&#x274c;</button>
    <h3 class="heading">Заказать звонок</h3>
    <input
      v-model="formData.name"
      class="input"
      type="text"
      name="name"
      placeholder="Имя*"
      required
    />
    <input
      @input="handlePhoneInput"
      ref="formInputRef"
      class="input"
      type="tel"
      name="phone"
      placeholder="Номер телефона*"
      maxlength="18"
      required
    />
    <p v-if="validationError" class="valid-error">{{ validationError }}</p>
    <p class="processing-policy">
      Соглашаюсь на
      <a
        type="button"
        href=""
        @click.prevent="isPersDataModalOpen = true"
        class="processing-policy-link"
        >обработку персональных данных</a
      >
      и ознакомлен с
      <a
        type="button"
        href=""
        class="processing-policy-link"
        @click.prevent="isPublicOfferAgrModalOpen = true"
        >договором публичной оферты</a
      >
      *
    </p>
    <button class="call-btn">Заказать звонок</button>
  </form>
</template>

<style scoped>
.callback-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: white;
  width: fit-content;
  padding: 4rem;
  border-radius: 2rem;
  width: 52rem;
}
.heading {
  align-self: flex-start;
  font-size: 2.8rem;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
}
.input {
  padding: 1.5rem;
  width: 100%;
  max-width: 100%;
  border: 3px solid var(--brand-blue-color);
  border-radius: 1rem;
  font-size: 1.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 3px solid #015c8b;
  }
}
.processing-policy {
  font-size: 1.2rem;
  color: var(--gray-color);
}
.call-btn {
  background-color: var(--brand-yellow-color);
  border: none;
  border-radius: 1rem;
  width: 100%;
  padding: 2rem 3rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: #f9df1b;
  }
}
.valid-error {
  text-align: start;
  width: 100%;
  font-size: 1.3rem;
  color: red;
  margin-top: -1rem;
}
.processing-policy-link {
  &:link,
  &:visited {
    color: var(--gray-color);
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
