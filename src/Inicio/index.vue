<template>
  <div>
    <Canonical></Canonical>

    <div class=" max-w-screen-xl mx-auto pb-10">

      <CaruselGaleria :items=enCartelera />
      <!-- <Carousel id="galleria" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="pelicula in enCartelera" :key="pelicula">
          <CaruselGaleria :item=pelicula />
        </Slide>
      </Carousel> -->

      <!-- <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel">
        <Slide v-for="slide in 5" :key="slide">
          <div class="carousel__item w-full h-40 bg-slate-400 cursor-pointer" @click="slideTo(slide - 1)">{{ slide }}
          </div>
        </Slide>
      </Carousel> -->


    </div>

    <div class=" max-w-screen-xl mx-auto ">

      <h2>En Cartelera</h2>
      <ul class="peliculas-lista">
        <PeliculaItem v-for="(pelicula, index) in enCartelera" :key="index" :pelicula="pelicula" />
      </ul>

      <h2>Próximos Estrenos</h2>
      <ul class="peliculas-lista">
        <PeliculaItem v-for="(pelicula, index) in proximosEstrenos" :key="index" :pelicula="pelicula" />
      </ul>


      <h2>Pre Venta</h2>

      <ul class="peliculas-lista">
        <PeliculaItem v-for="(pelicula, index) in enPreVenta" :key="index" :pelicula="pelicula" />
      </ul>
    </div>



  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Canonical from '../components/Canonical.vue';
import PeliculaItem from '../components/PeliculaItem.vue';
import CaruselGaleria from '../components/CaruselGaleria.vue';
// import CaruselThumbs from '../components/CaruselThumbs.vue';
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

<style scoped>
.peliculas-lista {
  @apply flex flex-wrap gap-5 items-center;

}
</style>