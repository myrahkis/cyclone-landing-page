<script setup>
import { ref } from 'vue'
import BgBlurModal from '@/ui/BgBlurModal.vue'
import DataProcessingPolicyModal from './DataProcessingPolicyModal.vue'

const isDataProcessingPolicyModalOpen = ref(false)

function closeDataProcessingPolicyModal() {
  isDataProcessingPolicyModalOpen.value = false
}
</script>

<template>
  <BgBlurModal :closeModal="closeDataProcessingPolicyModal" v-if="isDataProcessingPolicyModalOpen">
    <DataProcessingPolicyModal />
  </BgBlurModal>
  <div class="modal-container" @click.stop>
    <h3 class="heading">Согласие на обработку персональных данных</h3>
    <p class="text">
      Я, Пользователь сайта (субъект персональных данных), оставляя заявку (информацию) на настоящем
      интернет-сайте НАЗВАНИЕ_САЙТА, выражаю настоящее Согласие на обработку моих персональных
      данных (далее – Согласие). Действуя свободно, по своей волей и в своем интересе, а также
      подтверждая свою дееспособность, я даю свое согласие владельцу сайта - Индивидуальному
      предпринимателю Колосовой Юлии Романовне, ИНН 771508405997, ОГРНИП 317774600416022, на
      обработку своих персональных данных со следующими условиями:
    </p>
    <p class="text">
      1. Данное Согласие дается на обработку персональных данных, как без использования средств
      автоматизации, так и с их использованием. Согласие предоставляется в соответствии с
      <a href="" type="button" @click.prevent="isDataProcessingPolicyModalOpen = true"
        >Политикой обработки персональных данных</a
      >, действующей у владельца сайта.
    </p>
    <p class="text">
      2. Согласие дается на обработку следующих моих персональных данных, которые я предоставляю:
      фамилии, имени, отчества, пола, даты рождения, адреса, номеров контактных телефонов, адреса
      электронной почты, места работы и занимаемой должности, а также пользовательские данные
      (сведения о местоположении; тип и версия ОС; тип и версия браузера; тип устройства и
      разрешение его экрана; источник откуда перешел на сайт пользователь; с какого сайта или по
      какой рекламе; язык ОС и браузера; какие страницы открывает и на какие кнопки нажимает
      пользователь; ip-адрес).
    </p>
    <p class="text">3. Персональные данные не являются общедоступными.</p>
    <p class="text">
      4. Цель обработки персональных данных: в соответствии с целями, указанными в
      <a href="" @click.prevent="isDataProcessingPolicyModalOpen = true"
        >Политике обработки персональных данных</a
      >, действующей у владельца сайта, с целью покупки товаров и услуг, получения информации.
    </p>
    <p class="text">
      5. В ходе обработки с персональными данными будут совершены следующие действия: сбор; запись;
      систематизация; накопление; хранение; уточнение (обновление, изменение); извлечение;
      использование; передача (распространение, предоставление, доступ); блокирование; удаление;
      уничтожение.
    </p>
    <p class="text">
      6. Персональные данные обрабатываются до отписки пользователя от рекламных и новостных
      рассылок и/или выполнения обязательств перед пользователем и/или отзыва настоящего согласия
      и/или иных оснований, предусмотренных Политикой обработки персональных данных. Также обработка
      персональных данных может быть прекращена по запросу субъекта персональных данных в любое
      время по адресу электронной почты
      <a href="mailto:info@othertool.ru">info@othertool.ru</a>.
    </p>
    <p class="text">
      7. Настоящее согласие действует все время до момента прекращения обработки персональных
      данных, указанных в настоящем согласии и/или
      <a href="">Политике обработки персональных данных</a>, действующих у владельца сайта.
    </p>
  </div>
</template>

<style scoped>
.modal-container {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 42rem;
  height: 90vh;
  gap: 1.3rem;
  text-align: justify;
  padding: 2rem;
  border-radius: 2rem;

  scrollbar-width: thin;
}
.heading {
  font-size: 2.4rem;
  margin-bottom: 0;
}
.text {
  font-size: 1.4rem;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .modal-container {
    width: 38rem;
  }
}
/* (480px–767px) */
@media (max-width: 500px) {
  .modal-container {
    height: 80vh;
    width: 33rem;
  }
}
</style>
