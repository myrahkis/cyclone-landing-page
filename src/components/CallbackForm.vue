<script setup>
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { ref } from 'vue'
const { isModalOpen } = defineProps({ isModalOpen: { type: Function, required: true } })

const formRef = useOutsideClick(isModalOpen)

const name = ref('')
const telephone = ref('')

function submitHandle() {
  console.log({ name, telephone })
}
</script>

<template>
  <form ref="formRef" @submit.prevent="submitHandle" class="callback-form" @click.stop>
    <button class="close-btn" @click="isModalOpen">&#x274c;</button>
    <h3 class="heading">Заказать звонок</h3>
    <input v-model="name" class="input" type="text" name="name" placeholder="Имя*" required />
    <input
      v-model="telephone"
      class="input"
      type="tel"
      name="phone"
      placeholder="Номер телефона*"
      required
    />
    <p class="processing-policy">
      Соглашаюсь на обработку персональных данных и ознакомлен с договором публичной оферты *
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
  /* width: 35%; */
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
</style>
