<script setup>
import SkrewImg from '@/ui/SkrewImg.vue'
</script>

<template>
  <section class="video-section" id="overviews">
    <SkrewImg />
    <h2>Заголовок раздела</h2>
    <div class="video-cards">
      <div class="video-card">
        <div class="video-elem">
          <img src="/FloorVarient/floorVar1.png" alt="" class="img" />
          <img src="/youtubePlaceholder.png" alt="" class="yt-placeholder" />
        </div>
        <div>
          <h3>Заголовок раздела</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
            convallis.
          </p>
        </div>
      </div>
      <div class="video-card">
        <div class="video-elem">
          <img src="/FloorVarient/floorVar2.png" alt="" class="img" /><img
            src="/youtubePlaceholder.png"
            alt=""
            class="yt-placeholder"
          />
        </div>
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis.
        </p>
      </div>
      <div class="video-card">
        <div class="video-elem">
          <img src="/WallVarient/wallVar3.png" alt="" class="img" /><img
            src="/youtubePlaceholder.png"
            alt=""
            class="yt-placeholder"
          />
        </div>
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 3.5rem;
  /* min-height: 100vh; */
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.video-cards {
  display: flex;
  flex-grow: 1;
  gap: 2rem;
}
.video-elem {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 1.9rem;
  height: 50%;
  margin-bottom: 3rem;

  font-size: 2.5rem;
}

.img {
  height: 100%;
  max-width: 100%;
}
.yt-placeholder {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18%;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .video-cards {
    flex-direction: column;
  }
  .img {
    max-width: 40%;
  }
  .yt-placeholder {
    width: 11%;
  }
}
/* (до 479px) */
@media (max-width: 479px) {
  .img {
    max-width: 60%;
  }
}
</style>
