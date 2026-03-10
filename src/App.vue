<script setup>
import { ref, watch, onMounted } from 'vue'
import TaskInput from './components/TaskInput.vue'
import { useCounter } from './composables/useCounter'

const listaTareas = ref([])
const tarea = ref('')
const { contador, incrementar, decrementar } = useCounter()

function agregarTareaHijo(tarea) {
  listaTareas.value.push({
    id: Date.now(),
    texto: tarea
  })
}

function borrarTarea(indice) {
  listaTareas.value.splice(indice, 1)
}

onMounted(() => {
  const datos = localStorage.getItem('tareas')

  if (datos) listaTareas.value = JSON.parse(datos)
})

watch(listaTareas, (nuevasTareas) => {
  localStorage.setItem('tareas', JSON.stringify(nuevasTareas))
}, { deep: true })
</script>

<template>

  <main>
    <h2>El valor del contador a través de composables es {{ contador }} </h2>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <p>La tarea a añadir es: {{ tarea }}</p>
    <TaskInput v-model:tarea="tarea" @anadir-tarea="agregarTareaHijo"/>

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
