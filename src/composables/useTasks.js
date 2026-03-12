import { ref, watch, onMounted } from 'vue'

export function useTasks() {

    const listaTareas = ref([])

    function agregarTarea(tarea) {
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

    // Deep detecta lo que ocurre dentro del array u objeto para poder hacer lo que queremos
    watch(listaTareas, (nuevasTareas) => {
        localStorage.setItem('tareas', JSON.stringify(nuevasTareas))
    }, { deep: true })

    return {
        listaTareas,
        agregarTarea,
        borrarTarea
    }
}