<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} </template>
  </metainfo>

  <LayoutHeader> </LayoutHeader>

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