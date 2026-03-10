<script setup>

const props = defineProps({
    tarea: String
})

const emit = defineEmits(['update:tarea', 'anadir-tarea'])

function anadirTarea() {
    if (props.tarea.trim() == '') return
    emit('anadir-tarea', props.tarea)
    emit('update:tarea', '')
}
</script>

<template>
    <input type="text" :value="props.tarea" @input="emit('update:tarea', $event.target.value)" placeholder="Escribe la tarea a enviar al padre"/>
    <button @click="anadirTarea">AÑADIR TAREA</button>
</template>