<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

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
  },
  // Add more products...
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
  },
  // Add more deals...
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
    <!-- Hero Section -->
    <div class="relative">
      <Carousel :autoplay="5000" :wrap-around="true">
        <Slide v-for="i in 3" :key="i">
          <div class="relative h-[500px] bg-gray-100">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Special Offer {{ i }}</h2>
                <p class="text-xl text-gray-600 mb-8">Save up to 50% on selected items</p>
                <router-link to="/products" class="btn-primary">
                  Shop Now
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

    <!-- Features -->
    <div class="bg-gray-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-center justify-center text-center">
            <div>
              <span class="text-4xl">🚚</span>
              <h3 class="mt-4 text-lg font-medium">Free Shipping</h3>
              <p class="mt-2 text-gray-500">On orders over $99</p>
            </div>
          </div>
          <div class="flex items-center justify-center text-center">
            <div>
              <span class="text-4xl">💯</span>
              <h3 class="mt-4 text-lg font-medium">Quality Guarantee</h3>
              <p class="mt-2 text-gray-500">100% genuine products</p>
            </div>
          </div>
          <div class="flex items-center justify-center text-center">
            <div>
              <span class="text-4xl">📞</span>
              <h3 class="mt-4 text-lg font-medium">24/7 Support</h3>
              <p class="mt-2 text-gray-500">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>