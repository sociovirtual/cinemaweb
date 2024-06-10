<template>
  <div>
    <Canonical></Canonical>

    <div class=" max-w-screen-xl mx-auto ">
      <!-- <div class="mensaje-cargando" v-if="loading">Cargando...</div>
      <div class="mensaje-error" v-else-if="error">Error: {{ error.message }}</div> -->
      <div v-if="result">

        <ul class="peliculas-lista">
          <PeliculaItem v-for="(pelicula, index) in result.peliculas.edges" :key="index" :pelicula="pelicula" />
        </ul>


      </div>
    </div>

  </div>
</template>

<script setup>
import Canonical from '../components/Canonical.vue';
import PeliculaItem from '../components/PeliculaItem.vue';
import { useMeta } from 'vue-meta';
import { SEO_SITIO } from './seo.js';

useMeta(SEO_SITIO)

import { PELICULAS_TODAS } from './graphql.js'
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } = useQuery(PELICULAS_TODAS);


</script>

<style scoped>
.peliculas-lista {
  @apply flex flex-wrap gap-5 items-center;

}
</style>