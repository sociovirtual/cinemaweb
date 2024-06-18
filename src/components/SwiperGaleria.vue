<template>
  <div>

    <swiper :modules="[Autoplay, Pagination, Navigation]" :slidesPerView="1" :pagination="{ dynamicBullets: true }"
      :navigation="true" :loop="true" :lazy="true" :autoplay="{ delay: 2500, disableOnInteraction: false }"
      class="mySwiper">

      <swiper-slide v-for="item in items" :key="item">

        <img :src=item.cinemaFondo :alt=item.cinemaTitulo class=" absolute inset-0 h-full w-full object-cover "
          loading="lazy" />

      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const props = defineProps({
  items: {
    type: Object,
    required: true
  }
});


</script>

<style>
.mySwiper {
  @apply h-[35rem];
}

:root {
  --swiper-navigation-color: white;
  --swiper-pagination-color: #fff;
}
</style>