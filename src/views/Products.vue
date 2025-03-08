<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Pain Relief Medication',
    category: 'Over-the-Counter',
    description: 'Fast-acting pain relief for various conditions.',
    image: 'https://placehold.co/600x400/png',
    price: '$19.99'
  },
  {
    id: 2,
    name: 'Allergy Medicine',
    category: 'Prescription',
    description: '24-hour relief from seasonal allergies.',
    image: 'https://placehold.co/600x400/png',
    price: '$24.99'
  },
  {
    id: 3,
    name: 'Vitamin C Supplements',
    category: 'Supplements',
    description: 'Boost your immune system naturally.',
    image: 'https://placehold.co/600x400/png',
    price: '$15.99'
  },
  {
    id: 4,
    name: 'First Aid Kit',
    category: 'Medical Supplies',
    description: 'Complete emergency care kit for home use.',
    image: 'https://placehold.co/600x400/png',
    price: '$29.99'
  }
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900">Our Products</h2>
      <p class="mt-4 text-lg text-gray-500">Browse our selection of pharmaceutical products and medical supplies.</p>

      <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none">
            <img :src="product.image" :alt="product.name"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>