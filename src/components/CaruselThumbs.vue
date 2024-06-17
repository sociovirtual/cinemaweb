<template>
  <div>
    {{ item.cinemaTitulo }}
    <div class="carousel__item w-full h-40 bg-slate-400 cursor-pointer" @click="slideTo(slide - 1)">{{ }}
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