# vue-intermedio

En este proyecto vamos a tocar temas un poco más profundos de Vue tales como:

- Separación en diversos componentes para encapsulamiento de código y legibilidad
- Separar la lógica de la interfaz (UI) a través de composables
- Uso de emits para una comunicación bidireccional entre padres e hijos ya que los props son de solo lectura por los hijos. De esta manera se puede indicar al padre que haga algo desde el hijo
- Control de ciclos de vida con onMounted en este caso
- Uso de watch para la observación de cambios en propiedades reactivas y realizar lo que queremos debido a ese cambio. Con el atributo deep hacemos que observe dentro de la variable, como el caso de objetos o arrays, sin tener que cambiar el array u objeto en sí mismos
- Uso de v-model para con inputs, textarea, selects, checkbox, y asentamiento de la diferencia de uso entre v-model:nombreAPasar="variable" y :nombreAPasar="variable"
- Slots. Su uso es con #nombre que al cambio es lo mismo que v-slot:nombre. Solo funciona en "<template>" y componentes. Si no se nombran, pillan valores por defecto y no es necesario el uso de <template> en estos casos en el padre. Sirven para componentes reutilizables también
