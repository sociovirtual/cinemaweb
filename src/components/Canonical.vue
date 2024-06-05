<script>
import { useMeta } from 'vue-meta';
import { useRoute } from 'vue-router';
// import { SEO_SITIO } from '../seo.js';
export default {
  setup() {
    const route = useRoute();
    const fullUrl = window.location.origin + route.fullPath;

    // useMeta(SEO_SITIO)
    useMeta({
      // link: { href: fullUrl }
      link: { rel: "canonical", href: fullUrl },
    });
  }
}
</script>

<template>
  <!-- No necesitamos ningún marcado en el template, ya que este componente solo configura metaetiquetas -->
</template>