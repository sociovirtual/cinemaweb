<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} </template>
  </metainfo>
  <h1>Hello App!</h1>
  <p>
    <strong class=" text-4xl underline font-bebas">Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/hello">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>

// manejo del seo
import { useMeta } from 'vue-meta'
import { SEO_SITIO } from './seo.js';
useMeta(SEO_SITIO)

</script>

<style lang="scss" scoped></style>