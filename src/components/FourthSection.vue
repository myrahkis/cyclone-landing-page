<script setup></script>

<template>
  <section class="fourth-section">
    <h2>Заголовок раздела</h2>
    <div class="fourth-grid">
      <div class="grid-cell img-cell">
        <img src="" alt="" />
      </div>
      <div class="grid-cell top-cell">
        <h3>Заголовок раздела</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla
          tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce
          consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante
          iaculis nisl, et tincidunt odio leo in leo.
        </p>
      </div>
      <div class="grid-cell last-cell">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt
          convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla
          tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fourth-section {
  min-height: 100vh;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.5));
  padding: 3.5rem;
}

.fourth-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  min-width: 100%;
  /* height: 100%; */
}

.grid-cell {
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 1.9rem;
  padding: 2rem;
  min-height: 0;
}
.img-cell {
  grid-row: 1 / -1;
  grid-column: 1 / 2;
}
.top-cell {
  grid-column: 2 / -1;
}
.last-cell {
  grid-column: 2 / -1;
  grid-row: 2 / 2;
}
</style>
