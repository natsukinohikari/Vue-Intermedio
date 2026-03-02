<script setup>
import { ref } from 'vue'
import TaskInput from './components/TaskInput.vue'

const listaTareas = ref([])

function agregarTareaHijo(tarea) {
  listaTareas.value.push({
    id: Date.now(),
    texto: tarea
  })
}

function borrarTarea(indice) {
  listaTareas.value.splice(indice, 1)
}
</script>

<template>

  <main>
    <TaskInput @anadir-tarea="agregarTareaHijo"/>

    <ul v-if="listaTareas.length > 0" >
      <li v-for="(tarea, indice) in listaTareas" :key="tarea.id">
        {{ tarea.texto }}
        <button @click="borrarTarea(indice)">BORRAR TAREA</button>
      </li>
    </ul>

    <p v-else>No hay tareas para mostrar</p>
  </main>
</template>

<style scoped>

</style>
