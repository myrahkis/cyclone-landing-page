<script setup>
const sections = ['О нас', 'Контакты', 'Допы', 'Комплектация']
</script>

<template>
  <footer class="footer">
    <div class="container">
      <ul class="sections">
        <li v-for="name in sections" :key="name">
          <a href="" class="link">
            {{ name }}
          </a>
        </li>
      </ul>
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
          <div class="socials">
            <a href="https://t.me/other_tool" target="_blank">
              <img src="/telegram.png" alt="telegram" class="social" />
            </a>
            <a
              href="https://wa.me/+74956415567?text=Здравствуйте! Хотел бы больше узнать о кондукторе Othertool OT-24!"
              target="_blank"
            >
              <img src="/whatsup.png" alt="whatsup" class="social" />
            </a>
            <a href="https://vk.com/othertool" target="_blank">
              <img src="/vk.png" alt="vk" class="social" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  height: 50vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.7));
  padding: 3.5rem;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5rem;
  border: 3px solid white;
  border-radius: 1.9rem;
  height: 100%;
}
.sections {
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  list-style: none;

  li {
    cursor: pointer;
  }
}
.link {
  &:link,
  &:visited {
    color: white;
    text-decoration: none;
  }
}

.info-block {
  display: flex;
  justify-content: space-between;
}
.idk {
  display: flex;
  gap: 8rem;
}
.logo {
  width: 18rem;
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
.socials {
  display: flex;
  gap: 1.5rem;
}
.social {
  width: 4.1rem;
}
</style>
