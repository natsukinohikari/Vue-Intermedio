<script setup>

defineProps({
    item: String,
    indice: Number
})

const emit = defineEmits(['borrar-tarea'])
</script>

<template>
    {{ item }}
    <button @click="emit('borrar-tarea', indice)">BORRAR TAREA</button>
</template>