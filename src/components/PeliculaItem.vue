<template>
  <li>
    <h2 class="pelicula-item-titulo"> {{ pelicula.node.cinemaTutulo }} </h2>
    <a :href="'pelicula/' + pelicula.node.cinemaSlug">
      <img :src="pelicula.node.cinemaPoster" :alt=pelicula.node.cinemaTitulo class="pelicula-item-imagen" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'PeliculaItem',
  props: {
    pelicula: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Aquí puedes añadir estilos específicos para este componente */
.pelicula-item-imagen {
  @apply w-56;
}

.pelicula-item-titulo {
  @apply font-bebas text-2xl;
}
</style>
