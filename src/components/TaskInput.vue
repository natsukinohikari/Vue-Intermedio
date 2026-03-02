<script setup>
import { ref } from 'vue'

const tarea = ref('')
const emit = defineEmits(['anadir-tarea'])

function anadirTarea() {
    if (tarea.value.trim() == '') return
    emit('anadir-tarea', tarea.value)
    tarea.value = ""
}
</script>

<template>
    <input type="text" v-model="tarea" placeholder="Escribe la tarea a enviar al padre"/>
    <button @click="anadirTarea">AÑADIR TAREA</button>
</template>