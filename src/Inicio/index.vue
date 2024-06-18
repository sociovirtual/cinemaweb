<template>
  <div>
    <Canonical></Canonical>

    <div class=" w-screen mx-auto pb-5">

      <SwiperGaleria :items="enCartelera" />
    </div>

    <div class=" max-w-screen-xl mx-auto ">

      <PeliculaItem :peliculas="enCartelera" TituloH2=" En Cartelera" />

      <PeliculaItem :peliculas="proximosEstrenos" TituloH2=" Próximos Estrenos " />

      <PeliculaItem :peliculas="enPreVenta" TituloH2=" Pre Venta " />

    </div>



  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Canonical from '../components/Canonical.vue';
import PeliculaItem from '../components/PeliculaItem.vue';
// import CaruselGaleria from '../components/CaruselGaleria.vue';
import SwiperGaleria from '../components/SwiperGaleria.vue';
import { useMeta } from 'vue-meta';
import { SEO_SITIO } from './seo.js';

useMeta(SEO_SITIO)

import { PELICULAS_TODAS } from './graphql.js'
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } = useQuery(PELICULAS_TODAS);

//!SECTION

const proximosEstrenos = computed(() => {
  return result.value?.peliculas.nodes.filter(pelicula => pelicula.cinameProximoEstreno) || [];
});

const enCartelera = computed(() => {
  return result.value?.peliculas.nodes.filter(pelicula => pelicula.cinemaCartelera) || [];
});

const enPreVenta = computed(() => {
  return result.value?.peliculas.nodes.filter(pelicula => pelicula.cinemaPreVenta) || [];
});




</script>

<style scoped></style>