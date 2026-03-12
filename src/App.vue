<script setup>
import { ref } from 'vue'
import TaskInput from './components/TaskInput.vue'
import { useCounter } from './composables/useCounter'
import { useTasks } from './composables/useTasks'


const tarea = ref('')
const { contador, incrementar, decrementar } = useCounter()
const { listaTareas, agregarTarea, borrarTarea } = useTasks()
</script>

<template>

  <main>
    <h2>El valor del contador a través de composables es {{ contador }} </h2>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <p>La tarea a añadir es: {{ tarea }}</p>
    <TaskInput v-model:tarea="tarea" @anadir-tarea="agregarTarea"/>

    <ul v-if="listaTareas.length > 0" >
      <li v-for="(item, indice) in listaTareas" :key="item.id">
        {{ item.texto }}
        <button @click="borrarTarea(indice)">BORRAR TAREA</button>
      </li>
    </ul>

    <p v-else>No hay tareas para mostrar</p>
  </main>
</template>

<style scoped>

</style>
