<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Over-the-Counter',
    description: 'Medications available without prescription',
    image: 'https://placehold.co/600x400/png',
    count: '250+ products'
  },
  {
    id: 2,
    name: 'Prescription Medicines',
    description: 'Professional healthcare products',
    image: 'https://placehold.co/600x400/png',
    count: '500+ products'
  },
  {
    id: 3,
    name: 'Medical Supplies',
    description: 'Essential healthcare equipment',
    image: 'https://placehold.co/600x400/png',
    count: '150+ products'
  },
  {
    id: 4,
    name: 'Supplements',
    description: 'Vitamins and nutritional supplements',
    image: 'https://placehold.co/600x400/png',
    count: '300+ products'
  }
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Categories</h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Browse our comprehensive range of pharmaceutical categories
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="category in categories" :key="category.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none">
            <img :src="category.image" :alt="category.name"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-medium text-gray-900">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ category.name }}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ category.description }}</p>
            <p class="mt-1 text-sm font-medium text-primary-600">{{ category.count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>