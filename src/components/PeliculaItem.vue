<template>

  <h2 class="TituloH2">{{ TituloH2 }}</h2>
  <ul class="peliculas-lista">

    <li v-for="(pelicula, index) in peliculas" :key="index" class="pelicula-item">
      <!-- <h2 class="pelicula-item-titulo"> {{ pelicula.cinemaTitulo }} </h2> -->
      <a :href="'/pelicula/' + pelicula.cinemaSlug">
        <img :src="pelicula.cinemaPoster" :alt=pelicula.cinemaTitulo class="pelicula-item-imagen" />
      </a>
      <div class="pelicula-item-duracion pelicula-marco" v-html="pelicula.cinemaDuracion"></div>
      <div class="pelicula-item-clasificacion pelicula-marco" v-html="pelicula.cinemaClasificacionPublico"></div>
      <div class="pelicula-item-fecha pelicula-marco" v-html="pelicula.cinemaFechaDesde"></div>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'PeliculaItem',
  props: {
    peliculas: {
      type: Object,
      required: true
    }, TituloH2: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Aquí puedes añadir estilos específicos para este componente */


.TituloH2 {
  @apply text-2xl font-alpha my-8;
}

.peliculas-lista {
  @apply flex flex-wrap gap-5 items-center mx-5;
}

.pelicula-titulo {
  @apply text-6xl text-white font-bebas;
}

.pelicula-item {
  @apply scale-100 duration-100 relative;

  &:hover {
    @apply scale-105;
  }
}

.pelicula-item-imagen {
  @apply relative w-60 top-0;
}

.pelicula-item-titulo {
  @apply font-bebas text-2xl;
}

.pelicula-marco {
  @apply m-2 px-2 py-1 border border-white shadow-sm shadow-white text-white font-bold backdrop-blur-sm;
}

.pelicula-item-duracion {
  @apply absolute top-0;
}

.pelicula-item-clasificacion {
  @apply absolute top-0 right-0;
  ;
}

.pelicula-item-fecha {
  @apply absolute bottom-0 right-0;
}
</style>
