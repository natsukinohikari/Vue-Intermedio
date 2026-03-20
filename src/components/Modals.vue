<script setup>

defineProps({
    mostrarModal: Boolean
})

const emit = defineEmits(['cerrar-modal'])

</script>

<template>
    <teleport to="#modal">
        <transition name="transicion_modal">
            <div v-if="mostrarModal" class="modal">
                <slot></slot>
                <button @click="emit('cerrar-modal')">Cerrar modal</button>
            </div>
        </transition>
    </teleport>
</template>

<style>
.transicion_modal-enter-active,
.transicion_modal-leave-active {
  transition: opacity 1s ease;
}

.transicion_modal-enter-from,
.transicion_modal-leave-to {
  opacity: 0;
}
</style>