<template>
  <div class=" relative">
    <img :src=item.cinemaFondo :alt=item.cinemaTitulo class=" absolute inset-0 h-full w-full object-cover " />

    <div class="relative bg-CinemaColorPelicula bg-opacity-40 ">



      <div class=" h-[20rem] w-[80rem] ">
        <h1 v-html="item.cinemaTitulo" class=" text-4xl "> </h1>
        <div> {{ item.cinemaFechaDesde }}</div>
        <div> {{ item.cinemaDuracion }} Min</div>
        <div> {{ item.cinemaClasificacionPublico }}</div>
      </div>
    </div>



  </div>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

</script>

<style scoped></style>