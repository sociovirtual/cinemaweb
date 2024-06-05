<template>
  <div>
    <Canonical></Canonical>
    <div class="basico">
      pagina inicio
      <div class="basicodos">
        basico dos
      </div>
    </div>

    <div>
      <div class="lista-fichas ">
        <div v-if="loading">
          <div class=" texto-carga "> Cargando ..... </div>
        </div>
        <div v-if="error">Error: {{ error.message }} </div>

        <div v-else-if="result" v-for="categoria in result?.categoriaTrabajos?.nodes" :key="categoria.id"
          class="ficha ">
          <div class="imagen">
            <img :src=categoria.categoriaTrabajoImagen?.node.sourceUrl :alt=categoria.name
              :sizes=categoria.categoriaTrabajoImagen?.node.sizes :title=categoria.name height="150px" width="150px"
              loading="lazy">
            {{ }}
          </div>
          <div class="contenido">
            <h2 class="titulo" v-html=categoria.name> </h2>
            {{ categoria.description }}
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import Canonical from '../components/Canonical.vue';
import { useMeta } from 'vue-meta';
import { SEO_SITIO } from './seo.js';

useMeta(SEO_SITIO)

import { LISTA_CATEGORIA_TRABAJOS } from './graphql.js'
import { useQuery } from '@vue/apollo-composable'
// import { gql, useQuery } from '@apollo/client';
// const { result, loading } = useQuery(LISTA_CATEGORIA_TRABAJOS)
const { result, loading, error } = useQuery(LISTA_CATEGORIA_TRABAJOS);


</script>

<style scoped></style>