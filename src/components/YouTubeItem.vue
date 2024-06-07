<template>
  <div>
    <img :src="cinemaTrailerThumbnail" alt="Trailer Thumbnail" @click="openModal" class="youtube-imagen" />

    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 w-screen">
        <div class=" bg-transparent p-0 rounded-md h-96 aspect-video">
          <button @click="closeModal" class="float-right text-white text-5xl font-bold">&times;</button>
          <iframe :src="youtubeEmbedUrl" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="w-full aspect-video "></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Definir las props que recibirá el componente
const props = defineProps({
  cinemaTrailerThumbnail: {
    type: String,
    required: true
  },
  cinemaTrailerId: {
    type: String,
    required: true
  }
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const youtubeEmbedUrl = computed(() => `https://www.youtube.com/embed/${props.cinemaTrailerId}?autoplay=1`);
</script>

<style>
.youtube-imagen {
  @apply cursor-pointer w-80 my-4;
}

.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
