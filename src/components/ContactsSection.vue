<script setup></script>

<template>
  <section class="contacts-section" id="contacts">
    <!-- <img src="/spanner-bottom-half.png" alt="" class="spanner" /> -->
    <h2>Заголовок раздела</h2>
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
      <div class="map-group">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati.
        </p>
        <div class="map">map</div>
      </div>
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
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
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

.socials {
  display: flex;
  gap: 2rem;
}
.social {
  cursor: pointer;
  width: 7rem;
}
</style>
