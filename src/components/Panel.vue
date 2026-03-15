<template>
    <div class="panel">
        <div class="titulo">
            <slot name="titulo"></slot>
        </div>
        <div class="contenido">
            <slot></slot>
        </div>
        <div class="botones">
            <slot name="botones"></slot>
        </div>
    </div>
</template>