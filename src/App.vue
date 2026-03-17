<script setup>
import { provide, ref } from 'vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import Panel from './components/Panel.vue'
import { useCounter } from './composables/useCounter'
import { useTasks } from './composables/useTasks'


const tarea = ref('')
const { contador, incrementar, decrementar } = useCounter()
const { listaTareas, agregarTarea, borrarTarea } = useTasks()
provide("listaTareas", listaTareas)
</script>

<template>

  <main>
    <h2>El valor del contador a través de composables es {{ contador }} </h2>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <p>La tarea a añadir es: {{ tarea }}</p>
    <TaskInput v-model:tarea="tarea" @anadir-tarea="agregarTarea"/>

    <ul v-if="listaTareas.length > 0" >
      <TaskList @borrar-tarea="borrarTarea"/>
    </ul>

    <p v-else>No hay tareas para mostrar</p>

    <Panel>
      <template #titulo>
        Mi panel
      </template>
      <p>Contenido del panel</p>
      <template #botones>
        <button>Guardar</button>
      </template>
    </Panel>
  </main>
</template>

<style scoped>

</style>
