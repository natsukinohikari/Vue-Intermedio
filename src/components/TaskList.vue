<script setup>
import TaskItem from './TaskItem.vue';

defineProps({
    listaTareas: Array
})

const emit = defineEmits(['borrar-tarea'])
</script>

<template>
    <li v-for="(item, indice) in listaTareas" :key="item.id">
        <TaskItem :item="item.texto" :indice="indice" @borrar-tarea="emit('borrar-tarea', indice)"></TaskItem>
    </li>
</template>