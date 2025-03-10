<script setup lang="ts">
const recentProducts = [
  {
    id: 1,
    name: "Premium Vitamin C Serum",
    price: 12.99,
    image: "https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp",
    url: "#"
  },
  {
    id: 2,
    name: "Hyaluronic Acid Treatment",
    price: 15.99,
    image: "https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/acnes%20set-550x550w.jpg.webp",
    url: "#"
  },
  {
    id: 3,
    name: "Retinol Night Cream",
    price: 18.99,
    image: "https://pharmapluspharmacies.co.ke/image/cache/catalog/Supplements/B0073-550x550.jpg.webp",
    url: "#"
  },
  {
    id: 4,
    name: "Collagen Peptide Complex",
    price: 22.99,
    image: "https://pharmapluspharmacies.co.ke/image/cache/catalog/Supplements/C0866-550x550h.jpg.webp",
    url: "#"
  }
];
</script>

<template>
  <section class="bg-gray-50 py-12 mt-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="product in recentProducts" 
          :key="product.id" 
          class="bg-white rounded-lg border border-gray-200 p-4 flex items-center space-x-4 hover:shadow-md transition-shadow relative group"
        >
          <img :src="product.image" :alt="product.name" class="w-20 h-20 object-contain" />
          <div class="flex-1">
            <h4 class="text-sm font-medium text-gray-800 line-clamp-2">{{ product.name }}</h4>
            <p class="text-black font-medium text-sm mt-1">Ksh. {{ product.price }}</p>
          </div>
          <a 
            :href="product.url" 
            class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-100 hover:bg-gray-200 rounded-full p-1.5"
            title="View product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>