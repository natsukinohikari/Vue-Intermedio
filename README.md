# vue-intermedio

En este proyecto vamos a tocar temas un poco más profundos de Vue tales como:

- Separación en diversos componentes para encapsulamiento de código y legibilidad
- Separar la lógica de la interfaz (UI) a través de composables
- Uso de emits para una comunicación bidireccional entre padres e hijos ya que los props son de solo lectura por los hijos. De esta manera se puede indicar al padre que haga algo desde el hijo
- Control de ciclos de vida con onMounted en este caso
- Uso de watch para la observación de cambios en propiedades reactivas y realizar lo que queremos debido a ese cambio. Con el atributo deep hacemos que observe dentro de la variable, como el caso de objetos o arrays, sin tener que cambiar el array u objeto en sí mismos
- Uso de v-model para con inputs, textarea, selects, checkbox, y asentamiento de la diferencia de uso entre v-model:nombreAPasar="variable" y :nombreAPasar="variable"
- Slots. Su uso es con #nombre que al cambio es lo mismo que v-slot:nombre. Solo funciona en "<template>" y componentes. Si no se nombran, pillan valores por defecto y no es necesario el uso de <template> en estos casos en el padre. Sirven para componentes reutilizables también
- Los scoped slots son prácticamente lo mismo que los slots solo que los hijos pasan datos al padre para que decida cómo renderizarlos. Ejemplo más abajo con datalist como hijo y app como padre.
- Uso de provide e inject que facilita el hecho de compartir datos (variables, funciones...) que son usados por sus descendientes a cualquier nivel sin importar si es hijo directo o no. Ante su uso ya no se emplearían los props, mejorando la legibilidad y facilidad de lectura porque se evitaría el prop drilling. Acepta elementos reactivos y no reactivos. Se usa también para estilos globales



Prop drilling: si quisiera usar "agua" en el padre e hijo de un componente bisabuelo, no necesitaria pasar "agua" al abuelo, después de este al padre y luego del padre al hijo, sino que permite compartir directamente el dato del bisabuelo al padre e hijo. Bisabuelo->Abuelo->Padre->Hijo (prop drilling)
Bisabuelo->Hijo (más legible)

Scoped slots:
Datalist.vue

<script setup>

defineProps({
  items: Array
})

</script>

<template>

<ul>

  <li v-for="item in items" :key="item.id">

    <slot name="item" :item="item"></slot>

  </li>

</ul>

</template>

app.vue
(...)
<DataList :items="tareas">

  <template #item="{ item }">
    {{ item.texto }}
  </template>

</DataList>