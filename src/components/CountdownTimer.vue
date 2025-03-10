<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref(5);
const hours = ref(56);
const minutes = ref(30);
const seconds = ref(12);

const updateTimer = () => {
  if (seconds.value > 0) {
    seconds.value--;
  } else {
    seconds.value = 59;
    if (minutes.value > 0) {
      minutes.value--;
    } else {
      minutes.value = 59;
      if (hours.value > 0) {
        hours.value--;
      } else {
        hours.value = 23;
        if (days.value > 0) {
          days.value--;
        }
      }
    }
  }
};

let timerInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<template>
  <div class="flex items-center">
    <p class="text-gray-900 font-medium mr-4">Hurry up to take advantage of offer</p>
    <div class="flex space-x-2">
      <div class="relative">
        <div class="bg-white border border-red-600 rounded w-12 h-12 flex items-center justify-center text-red-600 font-bold">
          {{ days.toString().padStart(2, '0') }}
        </div>
        <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">Days</span>
      </div>
      <div class="relative">
        <div class="bg-white border border-red-600 rounded w-12 h-12 flex items-center justify-center text-red-600 font-bold">
          {{ hours.toString().padStart(2, '0') }}
        </div>
        <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">Hours</span>
      </div>
      <div class="relative">
        <div class="bg-white border border-red-600 rounded w-12 h-12 flex items-center justify-center text-red-600 font-bold">
          {{ minutes.toString().padStart(2, '0') }}
        </div>
        <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">Mins</span>
      </div>
      <div class="relative">
        <div class="bg-white border border-red-600 rounded w-12 h-12 flex items-center justify-center text-red-600 font-bold">
          {{ seconds.toString().padStart(2, '0') }}
        </div>
        <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">Secs</span>
      </div>
    </div>
  </div>
</template>