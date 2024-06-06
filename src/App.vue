<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} </template>
  </metainfo>
  <h1>Hello App!</h1>
  <p>
    <strong class=" text-4xl underline font-bebas">Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink> &bull;
    <RouterLink to="/hello">Go to About</RouterLink> &bull;
    <RouterLink to="/tarea">Go to Tarea</RouterLink>
  </nav>
  <main>

    <router-view v-slot="{ Component }">

      <transition name="scale" mode="out-in">
        <KeepAlive>
          <component :is="Component" :key="$route.path" />
        </KeepAlive>
      </transition>

    </router-view>

  </main>
</template>

<script setup>

// manejo del SEO
import { useMeta } from 'vue-meta'
import { SEO_SITIO } from './seo.js';
useMeta(SEO_SITIO)

</script>

<style scoped></style>