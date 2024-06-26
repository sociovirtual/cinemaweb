<template>
  <div>

    <div v-if="resultPelicula">
      <cabecera>
        <template #fondo>
          <img :src="resultPelicula.carteleraBy.carteleraFondo" alt="Imagen de Fondo" class="pelicula-fondo">
        </template>
        <template #poster>
          <img :src="resultPelicula.carteleraBy.carteleraPoster" alt="Imagen del Poster" class="pelicula-poster">
        </template>
        <template #contenido>
          <h1 class="pelicula-titulo">{{ resultPelicula.carteleraBy.carteleraTitulo }} </h1>

          <div class="pelicula-contenido" v-html="resultPelicula.carteleraBy.content"></div>

          <div class="pelicula-detalles">
            <div class="calificacion"> {{ resultPelicula.carteleraBy.carteleraClasificacion }} </div>
            <div class="duracion"> {{ resultPelicula.carteleraBy.carteleraDuracion }} min </div>
            <button class=" cinemaboton   bg-blue-600  text-white focus:bg-blue-700  hover:bg-blue-700 ">
              Comprar Entrada</button>
          </div>



        </template>
      </cabecera>

      <div class="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10 flex gap-10">


        <YouTubeItem :cinemaTrailerThumbnail=resultPelicula.carteleraBy.carteleraTrailerThumbnail
          :cinemaTrailerId="resultPelicula.carteleraBy.carteleraTrailerId" />

        <ul class="flex flex-wrap gap-4 my-8">
          <li v-for="(horario, index) in resultPelicula.carteleraBy.carteleraHorarios" :key="index">

            <div
              class="flex flex-col items-center rounded-lg bg-gray-100 px-4 py-2 border border-CinemaColorPelicula hover:scale-125 ">
              <p class="text-xl font-medium text-CinemaColorPelicula  font-alpha ">{{ horario.formato }}</p>
              <p class="text-3xl font-bold text-CinemaColorPelicula ">{{ horario.hora }}</p>
              <p class="text-xl font-medium text-CinemaColorPelicula font-bebas"> {{ horario.doblaje }} </p>
            </div>


          </li>
        </ul>

      </div>
    </div>

    <!--  en cartelera  -->
    <div class=" max-w-screen-xl mx-auto ">
      <PeliculaItem :peliculas="enCartelera" TituloH2=" En Cartelera " />
    </div>

  </div>
</template>

<script setup lang="js">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { GET_PELICULA } from './graphql.js'
import { useQuery } from '@vue/apollo-composable'

// obtener valores de la pelicula 
const route = useRoute();
const slug = ref(route.params.slug);
const { result: resultPelicula, loading: loadingPelicula, error: errorPelicula } = useQuery(GET_PELICULA, () => ({ slug: slug.value }));

// creando layout
import cabecera from './layouts/cabecera.vue';

//cargando youtube 
import YouTubeItem from '../components/YouTubeItem.vue';

// // en cartelera
import { PELICULAS_TODAS } from '../Inicio/graphql.js'
import PeliculaItem from '../components/PeliculaItem.vue';

const { result: resultCartelera, loading: loadingCartelera, error: errorCartelera } = useQuery(PELICULAS_TODAS);

const enCartelera = computed(() => {
  return resultCartelera.value?.carteleras.nodes.filter(cartelera => cartelera.carteleraEnCartelera) || [];
});


</script>

<style>
.pelicula-titulo {
  @apply text-5xl text-white font-bold;
}

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


.pelicula-contenido {
  @apply text-white p-4 my-4 bg-CinemaColorPelicula bg-opacity-60 font-roboto shadow-xl shadow-CinemaColorPelicula;
}
</style>