<template>
  <div>

    <!-- <div class="mensaje-cargando" v-if="loading">Cargando...</div>
    <div class="mensaje-error" v-else-if="error">Error: {{ error.message }}</div> -->
    <div v-if="result">
      <cabecera>
        <template #fondo>
          <img :src="result.peliculaBy.cinemaFondo" alt="Imagen de Fondo" class="pelicula-fondo">
        </template>
        <template #poster>
          <img :src="result.peliculaBy.cinemaPoster" alt="Imagen del Poster" class="pelicula-poster">
        </template>
        <template #contenido>
          <h1 class="pelicula-titulo">{{ result.peliculaBy.cinemaTitulo }} </h1>

          <div class="pelicula-contenido" v-html="result.peliculaBy.content"></div>

          <div class="pelicula-detalles">
            <div class="calificacion"> {{ result.peliculaBy.cinemaClasificacionPublico }} </div>
            <div class="duracion"> {{ result.peliculaBy.cinemaDuracion }} min </div>
          </div>

          <YouTubeItem :cinemaTrailerThumbnail=result.peliculaBy.cinemaTrailerThumbnail
            :cinemaTrailerId="result.peliculaBy.cinemaTrailerId" />

          <div class="pelicula-botones">
            <button class="pelicula-boton   bg-red-600  text-white focus:bg-red-700  hover:bg-red-700 ">
              Ver Trailer </button>
            <button class=" pelicula-boton   bg-blue-600  text-white focus:bg-blue-700  hover:bg-blue-700 ">
              Comprar Entrada</button>
          </div>


        </template>
      </cabecera>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { GET_PELICULA } from './graphql.js'
import { useQuery } from '@vue/apollo-composable'

// obtener valores de la pelicula 
const route = useRoute();
const slug = ref(route.params.slug);
const { result, loading, error } = useQuery(GET_PELICULA, { slug: slug.value });

// creando layout
import cabecera from './layouts/cabecera.vue';

//cargando youtube 
import YouTubeItem from '../components/YouTubeItem.vue';

</script>

<style scoped>
.pelicula-fondo {
  @apply absolute inset-0 h-full w-full object-cover;
}

.pelicula-poster {
  @apply w-full;
}

.pelicula-detalles {
  @apply flex flex-row gap-4 my-10 text-white text-2xl font-alpha;
}

.pelicula-detalles .calificacion {
  @apply m-2 px-4 py-2 border border-white;
}

.pelicula-detalles .duracion {
  @apply m-2 px-4 py-2 border border-white;
}

.pelicula-botones {
  @apply flex flex-row gap-6;
}

.pelicula-boton {
  @apply shrink-0 rounded-full px-8 py-3 font-bebas text-2xl shadow shadow-CinemaColorPelicula focus:outline-none;
}

.pelicula-titulo {
  @apply text-6xl text-white font-bebas;
}

.pelicula-contenido {
  @apply text-white p-4 my-4 bg-CinemaColorPelicula bg-opacity-60 font-roboto;
}
</style>