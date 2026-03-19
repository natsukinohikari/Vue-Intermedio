import { ref } from 'vue'

export function useModal() {

    const mostrarModal = ref(false)

    function mostrar() {
        mostrarModal.value = !mostrarModal.value
    }

    return {
        mostrarModal,
        mostrar
    }
}