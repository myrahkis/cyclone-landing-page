<script setup>
const { closeModal } = defineProps({ closeModal: Function })
</script>

<template>
    <div class="modal-bg" @click.stop="closeModal">
      <slot></slot>
    </div>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.297);
  backdrop-filter: blur(2px);
}
</style>
