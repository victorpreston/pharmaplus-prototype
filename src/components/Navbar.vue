<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, HeartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Featured Products', href: '/featured' },
  { name: 'Today\'s Deals', href: '/deals' },
  { name: 'Best Sellers', href: '/best-sellers' },
  { name: 'Categories', href: '/categories' },
]

const handleSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value)
}
</script>

<template>
  <header class="bg-white">
    <!-- Top banner -->
    <div class="bg-primary-600 px-4 py-2 text-white text-center text-sm font-medium">
      FREE SHIPPING FOR ALL ORDERS OVER $99
    </div>

    <!-- Main header -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <span class="text-2xl font-bold text-primary-600">PharmaPlus</span>
        </router-link>

        <!-- Search bar -->
        <div class="hidden lg:flex flex-1 max-w-2xl mx-8">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="w-full rounded-lg border-gray-300 pl-4 pr-10 focus:border-primary-500 focus:ring-primary-500"
              @keyup.enter="handleSearch"
            />
            <button
              @click="handleSearch"
              class="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-gray-600"
            >
              <MagnifyingGlassIcon class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Navigation icons -->
        <div class="flex items-center space-x-6">
          <router-link to="/wishlist" class="text-gray-700 hover:text-primary-600">
            <HeartIcon class="h-6 w-6" />
          </router-link>
          <router-link to="/cart" class="text-gray-700 hover:text-primary-600 relative">
            <ShoppingCartIcon class="h-6 w-6" />
            <span v-if="cart.totalItems > 0"
              class="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cart.totalItems }}
            </span>
          </router-link>
          <router-link to="/account" class="text-gray-700 hover:text-primary-600">
            <UserIcon class="h-6 w-6" />
          </router-link>
        </div>
      </div>

      <!-- Navigation menu -->
      <nav class="hidden lg:flex mt-4 space-x-8">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-medium text-gray-700 hover:text-primary-600"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>

    <!-- Mobile menu -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <!-- Mobile menu content -->
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="text-2xl font-bold text-primary-600">PharmaPlus</span>
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>