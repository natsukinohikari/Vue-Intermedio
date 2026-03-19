<script setup>

defineProps({
    mostrarModal: Boolean
})

const emit = defineEmits(['cerrar-modal'])

</script>

<template>
    <teleport to="#modal">
        <div v-if="mostrarModal" class="modal">
            <slot></slot>
            <button @click="emit('cerrar-modal')">Cerrar modal</button>
        </div>
    </teleport>
</template>