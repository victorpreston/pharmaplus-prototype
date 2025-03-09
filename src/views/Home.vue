<!-- <script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCartStore } from '../stores/cart'
import { ShoppingCartIcon, HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'

const cart = useCartStore()

const heroSlides = [
  {
    id: 1,
    title: "The most ingenious pet products on the planet!",
    subtitle: "We have prepared the most special discounts for you on the most popular products you need. Don't miss these opportunities...",
    buttonText: "Shop Now!!",
    buttonLink: "/products",
    bgImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "Quality Healthcare Products",
    subtitle: "Premium pharmaceutical solutions backed by scientific research",
    buttonText: "Learn More",
    buttonLink: "/about",
    bgImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
]

const productOfTheDay = {
  id: 1,
  name: "DNA Motoring TOOLS-0026",
  originalPrice: 51.99,
  salePrice: 54.99,
  image: "https://placehold.co/300x300/png",
  timeLeft: {
    hours: 5,
    minutes: 5,
    seconds: 5
  },
  soldCount: 20
}

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
    <div class="container mx-auto px-4 py-6">
      <div class="flex gap-6">

        <div class="flex-grow">
          <Carousel 
            :autoplay="5000" 
            :wrap-around="true"
            :transition="1000"
            class="hero-carousel rounded-lg overflow-hidden"
          >
            <Slide 
              v-for="slide in heroSlides" 
              :key="slide.id"
              class="relative h-[500px]"
            >
              <div 
                class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: `url(${slide.bgImage})` }"
              >
                <div class="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div class="relative h-full flex items-center">
                <div class="px-8">
                  <div class="max-w-2xl">
                    <h1 class="text-4xl font-bold text-white mb-6 leading-tight">
                      {{ slide.title }}
                    </h1>
                    <p class="text-xl text-white/90 mb-8">
                      {{ slide.subtitle }}
                    </p>
                    <router-link 
                      :to="slide.buttonLink"
                      class="inline-block bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                    >
                      {{ slide.buttonText }}
                    </router-link>
                  </div>
                </div>
              </div>
            </Slide>
            
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>


        <div class="w-[300px] bg-white rounded-lg shadow-lg p-4">
          <div class="text-center mb-4">
            <h2 class="text-xl font-bold text-gray-900">Product of The Day</h2>
            <p class="text-sm text-gray-600">Special price only valid today!</p>
            <p class="text-sm text-gray-600">Visit every day, win!</p>
          </div>

          <div class="flex justify-center gap-2 mb-4">
            <div class="bg-red-600 text-white px-3 py-2 rounded">
              {{ productOfTheDay.timeLeft.hours.toString().padStart(2, '0') }}
            </div>
            <div class="bg-red-600 text-white px-3 py-2 rounded">
              {{ productOfTheDay.timeLeft.minutes.toString().padStart(2, '0') }}
            </div>
            <div class="bg-red-600 text-white px-3 py-2 rounded">
              {{ productOfTheDay.timeLeft.seconds.toString().padStart(2, '0') }}
            </div>
          </div>


          <div class="relative group">
            <img 
              :src="productOfTheDay.image" 
              :alt="productOfTheDay.name"
              class="w-full h-auto rounded-lg mb-4"
            />
            <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
              % 5
            </div>

            <div class="absolute right-2 flex flex-col gap-2">
              <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <HeartIcon class="h-5 w-5 text-gray-600" />
              </button>
              <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <EyeIcon class="h-5 w-5 text-gray-600" />
              </button>
              <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <ShoppingCartIcon class="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>


          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ productOfTheDay.name }}</h3>
          <div class="flex items-center justify-between mb-2">
            <div>
              <span class="text-red-600 font-bold text-xl">${{ productOfTheDay.salePrice }}</span>
              <span class="ml-2 text-sm text-gray-500 line-through">${{ productOfTheDay.originalPrice }}</span>
            </div>
          </div>


          <div class="mb-2">
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-red-600 h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>

          <p class="text-sm text-gray-600">Hurry Up!!</p>
          <p class="text-sm text-gray-600">Sold: {{ productOfTheDay.soldCount }}</p>
        </div>
      </div>
    </div>


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
</style> -->


<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCartStore } from '../stores/cart'
import { ShoppingCartIcon, HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'

const cart = useCartStore()

const leftSlides = [
  {
    id: 1,
    title: "PUBLIC CHARGING STATIONS: HOW DO THEY WORK?",
    subtitle: "CAR BATTERY",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    buttonText: "CHECK PRODUCTS"
  }
]

const centerSlides = [
  {
    id: 1,
    title: "The most ingenious pet products on the planet!",
    subtitle: "We have prepared the most special discounts for you on the most popular products you need. Don't miss these opportunities...",
    buttonText: "Shop Now!!",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
]

const productOfTheDay = {
  id: 1,
  name: "DNA Motoring TOOLS-0026",
  originalPrice: 51.99,
  salePrice: 54.99,
  image: "https://placehold.co/300x300/png",
  timeLeft: {
    hours: 5,
    minutes: 5,
    seconds: 5
  },
  soldCount: 20
}

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
    <!-- Hero Section with Three Columns -->
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-12 gap-6">
        <!-- Left Slider -->
        <div class="col-span-4">
          <Carousel 
            :autoplay="5000" 
            :wrap-around="true"
            class="hero-carousel h-[600px] rounded-lg overflow-hidden bg-black"
          >
            <Slide 
              v-for="slide in leftSlides" 
              :key="slide.id"
              class="h-full"
            >
              <div class="relative h-full flex flex-col">
                <div class="flex-grow flex items-end p-8 bg-gradient-to-t from-black to-transparent">
                  <div>
                    <div class="inline-block bg-[#7FE95B] text-black px-4 py-1 text-sm mb-4">
                      {{ slide.subtitle }}
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-6">
                      {{ slide.title }}
                    </h2>
                    <button class="bg-transparent border-2 border-white text-white px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                      {{ slide.buttonText }}
                      <span class="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>

        <!-- Center Slider -->
        <div class="col-span-5">
          <Carousel 
            :autoplay="5000" 
            :wrap-around="true"
            class="hero-carousel h-[600px] rounded-lg overflow-hidden"
          >
            <Slide 
              v-for="slide in centerSlides" 
              :key="slide.id"
              class="h-full"
            >
              <div 
                class="relative h-full bg-cover bg-center"
                :style="{ backgroundImage: `url(${slide.image})` }"
              >
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="relative h-full flex items-center p-8">
                  <div>
                    <h2 class="text-3xl font-bold text-white mb-4">
                      {{ slide.title }}
                    </h2>
                    <p class="text-white/90 mb-6">
                      {{ slide.subtitle }}
                    </p>
                    <button class="bg-[#E17055] text-white px-6 py-3 rounded hover:bg-[#E17055]/90 transition-colors">
                      {{ slide.buttonText }}
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>

        <!-- Product of the Day -->
        <div class="col-span-3">
          <div class="bg-white rounded-lg shadow-lg p-4 h-[600px] flex flex-col">
            <div class="text-center mb-4">
              <h2 class="text-xl font-bold text-gray-900">Product of The Day</h2>
              <p class="text-sm text-gray-600">Special price only valid today!</p>
              <p class="text-sm text-gray-600">Visit every day, win!</p>
            </div>

            <!-- Timer -->
            <div class="flex justify-center gap-2 mb-4">
              <div class="bg-red-600 text-white px-3 py-2 rounded">
                {{ productOfTheDay.timeLeft.hours.toString().padStart(2, '0') }}
              </div>
              <div class="bg-red-600 text-white px-3 py-2 rounded">
                {{ productOfTheDay.timeLeft.minutes.toString().padStart(2, '0') }}
              </div>
              <div class="bg-red-600 text-white px-3 py-2 rounded">
                {{ productOfTheDay.timeLeft.seconds.toString().padStart(2, '0') }}
              </div>
            </div>

            <!-- Product Image and Actions -->
            <div class="relative group flex-grow">
              <img 
                :src="productOfTheDay.image" 
                :alt="productOfTheDay.name"
                class="w-full h-auto rounded-lg mb-4"
              />
              <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                % 5
              </div>
              <!-- Quick Action Buttons -->
              <div class="absolute right-2 flex flex-col gap-2">
                <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <HeartIcon class="h-5 w-5 text-gray-600" />
                </button>
                <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <EyeIcon class="h-5 w-5 text-gray-600" />
                </button>
                <button class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <ShoppingCartIcon class="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <!-- Product Details -->
            <div class="mt-auto">
              <h3 class="text-lg font-medium text-gray-900 mb-2">{{ productOfTheDay.name }}</h3>
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="text-red-600 font-bold text-xl">${{ productOfTheDay.salePrice }}</span>
                  <span class="ml-2 text-sm text-gray-500 line-through">${{ productOfTheDay.originalPrice }}</span>
                </div>
              </div>

              <!-- Progress Bar -->
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-600 h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>

              <p class="text-sm text-gray-600">Hurry Up!!</p>
              <p class="text-sm text-gray-600">Sold: {{ productOfTheDay.soldCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
</style>