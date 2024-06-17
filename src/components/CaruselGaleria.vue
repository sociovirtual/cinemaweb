<template>



  <Carousel id="galleria" :items-to-show="1" :wrap-around="true" v-model="currentSlide" :autoplay="3000">
    <Slide v-for="item in items" :key="item">


      <div class=" relative">
        <img :src=item.cinemaFondo :alt=item.cinemaTitulo class=" absolute inset-0 h-full w-full object-cover " />

        <div class="relative ">



          <div class=" h-[30rem] w-[80rem] ">
            <!-- <h1 v-html="item.cinemaTitulo" class=" text-4xl "> </h1>
            <div> {{ item.cinemaFechaDesde }}</div>
            <div> {{ item.cinemaDuracion }} Min</div>
            <div> {{ item.cinemaClasificacionPublico }}</div> -->
          </div>
        </div>
      </div>


    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>


</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  items: {
    type: Object,
    required: true
  }
});


// carusel

import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide } from 'vue3-carousel'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const currentSlide = ref(0)
const carousel = ref(null)

const slideTo = (index) => {
  if (carousel.value) {
    carousel.value.slideTo(index)
  }
}


</script>

<style>
.carousel__slide {
  @apply m-0 p-0;
}

.carousel__prev,
.carousel__next {
  svg {
    @apply text-white shadow shadow-lg;
  }
}
</style>