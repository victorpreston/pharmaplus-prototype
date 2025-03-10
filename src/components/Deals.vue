<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import ProductImageCarousel from './ProductImageCarousel.vue';
import CountdownTimer from './CountdownTimer.vue';
import RecentlyViewed from './RecentlyViewed.vue';

const cart = useCartStore();

// Deal products data with multiple images
const dealProducts = ref([
  {
    id: 1,
    name: 'Premium Vitamin C Serum',
    price: 9.00,
    originalPrice: 12.59,
    discount: 7,
    images: [
      'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp',
      'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/acnes%20set-550x550w.jpg.webp',
      'https://pharmapluspharmacies.co.ke/image/cache/catalog/Supplements/B0073-550x550.jpg.webp'
    ],
    rating: 4.3,
    reviews: 100,
    stock: true,
    sold: 200
  },
  // Add more products with multiple images...
]);

// Add to cart function
const addToCart = (product: any) => {
  cart.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.images[0]
  });
};

// Winter clearance promotional offer
const winterClearanceOffer = {
  title: "Limited Time Offer",
  description: "Up to 40% off on premium skincare products",
  image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
};
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-12 gap-8">
        <!-- Left Sidebar -->
        <div class="col-span-12 md:col-span-3">
          <!-- Main Promo Banner -->
          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="relative py-8 px-6">
              <div class="relative z-10">
                <h3 class="text-2xl font-bold text-white mb-2">Grab Up Exciting Deals</h3>
                <p class="text-white opacity-90 mb-4">Free Shipping Over $50</p>
                <button class="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                  Check All Products
                </button>
              </div>
            </div>
          </div>
          
          <!-- Limited Time Offer Card -->
          <div class="rounded-lg overflow-hidden relative h-[400px]">
            <img 
              :src="winterClearanceOffer.image" 
              :alt="winterClearanceOffer.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-2">{{ winterClearanceOffer.title }}</h3>
                <p class="text-white opacity-90 mb-4">{{ winterClearanceOffer.description }}</p>
                <button class="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main Content Area -->
        <div class="col-span-12 md:col-span-9">
          <!-- Deals Header with Timer -->
          <div class="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 class="text-2xl font-bold text-gray-900">Deals of The Day</h1>
                <p class="text-gray-500 text-sm mt-1">Sale up to 30% off on selected items.</p>
              </div>
              
              <CountdownTimer />
            </div>
            
            <!-- Sort & Filter Controls -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
              <div class="flex items-center space-x-2">
                <button class="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">All Deals</button>
                <button class="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Featured</button>
                <button class="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Trending</button>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="flex items-center">
                  <label for="sortBy" class="text-sm text-gray-700 mr-2">Sort by:</label>
                  <select id="sortBy" class="border border-gray-300 rounded-md text-sm py-1.5 px-3">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="product in dealProducts" 
              :key="product.id" 
              class="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <!-- Discount Badge -->
              <div class="relative">
                <div class="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs px-3 py-1 rounded-sm font-medium">
                  {{ product.discount }}% OFF
                </div>
                
                <!-- Product Image Carousel -->
                <ProductImageCarousel :images="product.images" />
              </div>
              
              <!-- Product Info -->
              <div class="p-4 border-t border-gray-100">
                <h3 class="text-gray-900 font-medium text-base mb-2">{{ product.name }}</h3>
                
                <!-- Status and Ratings -->
                <div class="flex items-center justify-between mb-3">
                  <div v-if="product.stock" class="bg-green-600 text-white text-xs px-2 py-1 rounded-sm font-medium">
                    IN STOCK
                  </div>
                  
                  <div class="flex items-center bg-gray-100 rounded-full px-2 py-1">
                    <span class="text-yellow-500 mr-1">★</span>
                    <span class="text-gray-700 text-xs">{{ product.rating }} ({{ product.reviews }})</span>
                  </div>
                </div>
                
                <!-- Price and Add to Cart -->
                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center">
                    <span class="text-lg font-medium text-gray-900">Ksh{{ product.price.toFixed(2) }}</span>
                    <span class="text-gray-400 text-sm line-through ml-2">Ksh{{ product.originalPrice.toFixed(2) }}</span>
                  </div>
                  
                  <button 
                    @click="addToCart(product)"
                    class="flex items-center bg-gray-900 text-white rounded-md px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="flex justify-center mt-8">
            <nav class="flex items-center space-x-2">
              <button class="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button class="px-4 py-2 rounded-md border border-gray-900 bg-gray-900 text-white">1</button>
              <button class="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
              <button class="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
              <button class="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recently Viewed Section -->
    <RecentlyViewed />
  </div>
</template>