<script setup></script>

<template>
  <section class="about-us-section" id="about-us">
    <div class="about-us">
      <h2>Заголовок раздела</h2>
      <div class="info">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <img src="/11.png" alt="" class="skrew-big" />
    <img src="/12.png" alt="" class="skrew-sm" />
    <img src="/brand-character.png" alt="" class="spanner" />
  </section>
</template>

<style scoped>
.about-us-section {
  position: relative;
  padding: 3.5rem;
  height: 100vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.4));
}
.about-us {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.skrew-big {
  position: absolute;
  top: 0;
  right: 45rem;
  width: 40rem;
}
.skrew-sm {
  position: absolute;
  top: 13rem;
  right: 38rem;
  width: 18rem;
}
.spanner {
  position: absolute;
  bottom: 0;
  right: 5rem;
  width: 50rem;
}
</style>
