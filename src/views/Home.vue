<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCartStore } from '../stores/cart'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'
import Deals from '../components/Deals.vue'

const cart = useCartStore()

// Define the type for the slide state
const currentSlide = ref<number>(0)

const goToSlide = (index: number): void => {
  currentSlide.value = index
}

// Add watcher for autoplay with proper typing
watch(currentSlide, (newVal: number) => {
  // The newVal parameter is now properly typed
  console.log('Slide changed to:', newVal)
})

const mainSlides = [
  {
    id: 1,
    title: "PUBLIC CHARGING STATIONS: HOW DO THEY WORK?",
    subtitle: "CAR BATTERY",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    buttonText: "CHECK PRODUCTS"
  },
  {
    id: 2,
    title: "REVOLUTIONARY DRIVING EXPERIENCE",
    subtitle: "NEW ARRIVALS",
    image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    buttonText: "SHOP NOW"
  }
]

const featuredProducts = [
  {
    id: 1,
    name: 'Pain Relief Plus',
    price: 19.99,
    image: 'https://placehold.co/300x300/png',
    category: 'Pain Relief',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Vitamin C Complex',
    price: 24.99,
    image: 'https://placehold.co/300x300/png',
    category: 'Vitamins',
    rating: 4.8,
    reviews: 256
  }
]

const deals = [
  {
    id: 1,
    name: 'First Aid Kit Pro',
    originalPrice: 49.99,
    salePrice: 39.99,
    image: 'https://placehold.co/300x300/png',
    discount: 20,
    timeLeft: '2 days'
  }
]

const addToCart = (product: any) => {
  cart.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image
  })
}
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section with Main Slider and Two Right Cards -->
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-12 gap-4">
        <!-- Main Slider (Left) - Increased width -->
        <div class="col-span-12 md:col-span-9">
          <Carousel 
            :autoplay="5000" 
            :wrap-around="true"
            class="hero-carousel h-[600px] rounded-lg overflow-hidden bg-gray-100"
          >
            <Slide 
              v-for="slide in mainSlides" 
              :key="slide.id"
              class="h-full"
            >
              <div class="relative h-full flex">
                <!-- Text Content (Left) -->
                <div class="relative z-10 w-1/2 flex flex-col justify-center p-12">
                  <div class="inline-block bg-[#7FE95B] text-black px-4 py-1 text-sm mb-4 w-fit">
                    {{ slide.subtitle }}
                  </div>
                  <h2 class="text-5xl font-bold text-black mb-8 leading-tight">
                    {{ slide.title }}
                  </h2>
                  <button class="bg-[#E74C3C] text-white px-8 py-3 flex items-center gap-2 w-fit group">
                    {{ slide.buttonText }}
                    <span class="text-xl transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
                
                <!-- Image (Right) -->
                <div 
                  class="absolute right-0 w-2/3 h-full bg-cover bg-center"
                  :style="{ backgroundImage: `url(${slide.image})` }"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                </div>
              </div>
            </Slide>

            <!-- Custom Navigation Dots -->
            <template #addons>
              <div class="absolute right-8 bottom-8 z-20 flex flex-col gap-3">
                <button 
                  v-for="i in mainSlides.length" 
                  :key="i"
                  class="w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-all"
                  :class="{ 'bg-white': currentSlide === i - 1 }"
                  @click="goToSlide(i - 1)"
                ></button>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- Right Cards - Reduced width -->
        <div class="col-span-12 md:col-span-3 flex flex-col gap-4">
          <!-- Top Card - Image Right -->
          <div class="flex-1 rounded-lg overflow-hidden relative h-[290px] group">
            <div class="absolute inset-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558537348-c0f8e733989d"
                alt="Premium Audio"
                class="object-cover h-full w-full transform scale-100 group-hover:scale-110 transition-transform duration-700"
                style="object-position: right center;"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end">
              <div class="inline-block bg-[#E74C3C] text-white px-3 py-1 text-xs mb-2 w-fit">
                EXCLUSIVE DEALS
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">
                Premium Audio Systems
              </h3>
              <button class="bg-white text-black px-4 py-2 text-sm w-fit hover:bg-gray-100 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <!-- Bottom Card - Image Left -->
          <div class="flex-1 rounded-lg overflow-hidden relative h-[290px] group">
            <div class="absolute inset-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd"
                alt="Car Maintenance"
                class="object-cover h-full w-full transform scale-100 group-hover:scale-110 transition-transform duration-700"
                style="object-position: left center;"
              />
              <div class="absolute inset-0 bg-gradient-to-l from-black/70 to-black/20"></div>
            </div>
            <div class="relative h-full p-6 flex flex-col justify-end items-end">
              <div class="inline-block bg-[#3498DB] text-white px-3 py-1 text-xs mb-2 w-fit">
                SAVE 20%
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 text-right">
                Car Maintenance Kits
              </h3>
              <button class="bg-white text-black px-4 py-2 text-sm w-fit hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Deals />

    <!-- Featured Categories -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="relative rounded-lg overflow-hidden group">
          <img src="https://placehold.co/400x300/png" alt="Category" class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 class="text-white text-xl font-bold">Category {{ i }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="bg-gray-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="product in featuredProducts" :key="product.id"
            class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
            <div class="relative aspect-square mb-4">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover rounded-lg" />
              <button @click="addToCart(product)"
                class="absolute bottom-4 right-4 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700">
                <ShoppingCartIcon class="h-5 w-5" />
              </button>
            </div>
            <div>
              <p class="text-sm text-gray-500">{{ product.category }}</p>
              <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
              <div class="flex items-center mt-1">
                <span class="text-primary-600 font-bold">${{ product.price }}</span>
                <div class="ml-2 flex items-center">
                  <span class="text-yellow-400">★</span>
                  <span class="ml-1 text-sm text-gray-500">{{ product.rating }} ({{ product.reviews }})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Today's Deals -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Today's Deals</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="deal in deals" :key="deal.id"
          class="bg-white rounded-lg shadow-sm p-4 border border-red-100 hover:shadow-md transition-shadow">
          <div class="relative aspect-square mb-4">
            <img :src="deal.image" :alt="deal.name" class="w-full h-full object-cover rounded-lg" />
            <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
              -{{ deal.discount }}%
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900">{{ deal.name }}</h3>
            <div class="flex items-center mt-1">
              <span class="text-red-600 font-bold">${{ deal.salePrice }}</span>
              <span class="ml-2 text-sm text-gray-500 line-through">${{ deal.originalPrice }}</span>
            </div>
            <p class="text-sm text-gray-500 mt-1">Ends in {{ deal.timeLeft }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-carousel :deep(.carousel__slide) {
  @apply overflow-hidden;
}

.hero-carousel :deep(.carousel__pagination) {
  @apply bottom-6;
}

.hero-carousel :deep(.carousel__pagination-button) {
  @apply w-3 h-3 bg-white/50;
}

.hero-carousel :deep(.carousel__pagination-button--active) {
  @apply bg-white;
}

.hero-carousel :deep(.carousel__prev),
.hero-carousel :deep(.carousel__next) {
  @apply bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-white/30;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-carousel {
    height: 400px !important;
  }
}
</style>