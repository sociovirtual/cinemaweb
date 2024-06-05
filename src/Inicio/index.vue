<template>
  <div>
    <Canonical></Canonical>
    <div class="basico">
      pagina inicio
      <div class="basicodos">
        basico dos
      </div>
    </div>
  </div>
</template>

<script setup>
import Canonical from '../components/Canonical.vue';
import { useMeta } from 'vue-meta';
import { SEO_SITIO } from './seo.js';

useMeta(SEO_SITIO)

</script>

<style scoped></style>