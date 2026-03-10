import { ref } from 'vue'

export function useCounter() {
    const contador = ref(0)

    function incrementar() {
        contador.value++
    }

    function decrementar() {
        contador.value--
    }

    return {
        contador,
        incrementar,
        decrementar
    }
}