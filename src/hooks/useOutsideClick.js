import { ref, onMounted, onUnmounted } from 'vue'

export function useOutsideClick(handler, listenCapturing = true) {
  const elementRef = ref(null)

  function handleClick(e) {
    if (elementRef.value && !elementRef.value.contains(e.target)) {
      handler()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClick, listenCapturing)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClick, listenCapturing)
  })

  return elementRef
}
