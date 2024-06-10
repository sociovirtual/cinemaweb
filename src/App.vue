<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} </template>
  </metainfo>

  <LayoutHeader>
    <template #menu>
      <ul class="cinema-menu">
        <li>
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacto">Contacto</RouterLink>
        </li>
      </ul>
    </template>
    <template #menutwo>
      <!-- <a href="http://" target="_blank" rel="noopener noreferrer"> Login </a> -->
      <a href="http://" target="_blank" rel="noopener noreferrer" class="cinemaboton"> Comprar Entrada </a>
    </template>

  </LayoutHeader>

  <LayoutCinema>

    <template #cuerpo>

      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>

    </template>
  </LayoutCinema>
  <LayoutFooter></LayoutFooter>

</template>

<script setup>

// manejo del SEO
import { useMeta } from 'vue-meta'
import { SEO_SITIO } from './seo.js';
useMeta(SEO_SITIO)


import LayoutCinema from './layouts/LayoutCinema.vue';
import LayoutFooter from './layouts/LayoutFooter.vue';
import LayoutHeader from './layouts/LayoutHeader.vue';

</script>

<style scoped></style>