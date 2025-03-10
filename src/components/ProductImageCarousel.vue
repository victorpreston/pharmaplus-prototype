<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  images: string[];
}>();

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? props.images.length - 1 
    : currentImageIndex.value - 1;
};
</script>

<template>
  <div class="relative group">
    <img 
      :src="images[currentImageIndex]" 
      :alt="`Product image ${currentImageIndex + 1}`"
      class="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
    
    <!-- Navigation Arrows -->
    <button 
      @click="previousImage"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    
    <button 
      @click="nextImage"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    
    <!-- Image Indicators -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
      <div 
        v-for="(_, index) in images" 
        :key="index"
        :class="[
          'w-1.5 h-1.5 rounded-full transition-all',
          currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-400'
        ]"
      ></div>
    </div>
  </div>
</template>