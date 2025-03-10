<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, HeartIcon, UserIcon, MagnifyingGlassIcon, ChevronRightIcon, HomeIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faPhone, faQuestionCircle, faLocationDot, faShippingFast } from "@fortawesome/free-solid-svg-icons"
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'

const cart = useCartStore()
const route = useRoute()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const hoveredCategory = ref<string | null>(null)
const hoveredSubCategory = ref<string | null>(null)

const navigation = [
  { name: 'Featured Products', href: '/featured' },
  // { name: 'Prescription', href: '/prescription' },
  { name: 'Popular Brands', href: '/brands' },
  { name: "Today's Deals", href: '/deals' },
  { name: 'Offers', href: '/offers' },
  { name: 'Best Sellers', href: '/best-sellers' }
]

const categories = [
  {
    name: 'Skin Care',
    subcategories: [
      {
        name: 'Facial Care',
        items: [
          { name: 'Facial Cleanser', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Face Cream', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Body Care',
        items: [
          { name: 'Body Lotion', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Body Wash', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Beauty & Cosmetics',
    subcategories: [
      {
        name: 'Makeup',
        items: [
          { name: 'Foundation', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Lipstick', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Nail Care',
        items: [
          { name: 'Nail Polish', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Nail Treatment', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Vitamins & Supplements',
    subcategories: [
      {
        name: 'Vitamins',
        items: [
          { name: 'Multivitamins', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Vitamin D', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Minerals',
        items: [
          { name: 'Calcium', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Iron', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Body Building',
    subcategories: [
      {
        name: 'Protein',
        items: [
          { name: 'Whey Protein', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Mass Gainer', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Pre-Workout',
        items: [
          { name: 'Energy Boost', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Focus Formula', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'General Hygiene',
    subcategories: [
      {
        name: 'Oral Care',
        items: [
          { name: 'Toothpaste', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Mouthwash', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Personal Care',
        items: [
          { name: 'Deodorant', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Hand Sanitizer', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Home Healthcare',
    subcategories: [
      {
        name: 'First Aid',
        items: [
          { name: 'Bandages', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Antiseptics', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Medical Devices',
        items: [
          { name: 'Thermometer', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Blood Pressure Monitor', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Veterinary Products',
    subcategories: [
      {
        name: 'Pet Medicine',
        items: [
          { name: 'Flea Treatment', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Wormers', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Pet Care',
        items: [
          { name: 'Grooming', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Pet Food', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  },
  {
    name: 'Miscellaneous',
    subcategories: [
      {
        name: 'Travel Health',
        items: [
          { name: 'Travel Kit', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Motion Sickness', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      },
      {
        name: 'Seasonal',
        items: [
          { name: 'Allergy Relief', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' },
          { name: 'Cold & Flu', image: 'https://pharmapluspharmacies.co.ke/image/cache/catalog/Beauty/serums/vit%20c%20serun%20dr-550x550.jpg.webp' }
        ]
      }
    ]
  }
]

const breadcrumbs = computed(() => {
  const path = route.path
  const segments = path.split('/').filter(segment => segment)
  
  return segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    return { name, href }
  })
})

const showHomeIcon = computed(() => {
  return route.path !== '/'
})

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  if (!isDropdownOpen.value) {
    hoveredCategory.value = null
    hoveredSubCategory.value = null
  }
}

const handleCategoryHover = (category: string | null) => {
  hoveredCategory.value = category
  if (!category) {
    hoveredSubCategory.value = null
  }
}

const handleSubCategoryHover = (subCategory: string | null) => {
  hoveredSubCategory.value = subCategory
}


const closeDropdownOnOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (isDropdownOpen.value && !target.closest('.category-menu-container')) {
    isDropdownOpen.value = false
    hoveredCategory.value = null
    hoveredSubCategory.value = null
  }
}


onMounted(() => {
  document.addEventListener('click', closeDropdownOnOutsideClick)
})


onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnOutsideClick)
})
</script>

<template>
  <header class="bg-white">
    <!-- Topmost Section -->
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between py-3 text-sm text-gray-700">
        <!-- Left: Announcement-->
        <div class="font-semibold text-gray-800">
          Exclusive Offers & Fast Shipping Worldwide
        </div>

        <!-- Right: Help Center & Contact Us -->
        <div class="flex items-center space-x-6">
          <!-- Help Center -->
          <button class="flex items-center space-x-2 text-gray-800 hover:text-green-600 transition-all">
            <div class="flex items-center justify-center w-8 h-8 border border-green-500 rounded-full">
              <FontAwesomeIcon :icon="faQuestionCircle" class="text-green-500 text-lg" />
            </div>
            <span class="font-medium">Help Center</span>
          </button>

          <!-- Contact Us -->
          <button class="flex items-center space-x-2 text-gray-800 hover:text-green-600 transition-all">
            <div class="flex items-center justify-center w-8 h-8 border border-green-500 rounded-full">
              <FontAwesomeIcon :icon="faPhone" class="text-green-500 text-lg" />
            </div>
            <span class="font-medium">Contact Us</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="/pharmapluslogo.webp" alt="PharmaPlus" class="h-10" />
      </router-link>

      <!-- Search Bar -->
      <div class="hidden lg:flex flex-1 max-w-2xl mx-8">
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for products..."
            class="w-full rounded-full border border-gray-300 pl-5 pr-12 py-3 text-gray-700 focus:border-green-500 focus:ring-0 focus:outline-none"
            @keyup.enter="handleSearch"
          />
          <button
            @click="handleSearch"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-700"
          >
            <MagnifyingGlassIcon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Icons Section -->
      <div class="flex items-center space-x-6">
        <router-link to="/wishlist" class="relative text-gray-700 hover:text-green-600 transition-colors">
          <HeartIcon class="h-7 w-7" />
        </router-link>
        
        <router-link to="/cart" class="relative text-gray-700 hover:text-green-600 transition-colors">
          <ShoppingCartIcon class="h-7 w-7" />
          <span v-if="cart.totalItems > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {{ cart.totalItems }}
          </span>
        </router-link>
        
        <router-link to="/account" class="text-gray-700 hover:text-green-600 transition-colors">
          <UserIcon class="h-7 w-7" />
        </router-link>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav class="hidden lg:flex py-3 bg-gray-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
        <!-- Categories Dropdown -->
        <div class="relative category-menu-container">
          <button 
            @click="toggleDropdown"
            @mouseenter="isDropdownOpen = true"
            class="flex items-center px-5 py-2 bg-red-600 text-white text-md font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <Bars3Icon class="h-6 w-6 mr-2" /> 
            All Categories
            <ChevronDownIcon class="h-5 w-5 ml-2" :class="{ 'transform rotate-180': isDropdownOpen }" />
          </button>

          <!-- Categories Menu - Main Container -->
          <div 
            v-if="isDropdownOpen"
            class="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 category-menu flex"
            @mouseleave="isDropdownOpen = false"
          >
            <!-- Categories Column -->
            <div class="w-64 border-r border-gray-100">
              <div class="py-2">
                <div
                  v-for="category in categories"
                  :key="category.name"
                  class="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors"
                  :class="{ 'bg-gray-50': hoveredCategory === category.name }"
                  @mouseenter="handleCategoryHover(category.name)"
                >
                  <span class="text-gray-700">{{ category.name }}</span>
                  <ChevronRightIcon class="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <!-- Subcategories Column - Appears when category is hovered -->
            <div v-if="hoveredCategory" class="w-64 border-r border-gray-100 subcategory-column">
              <div class="p-4">
                <h3 class="font-semibold text-lg text-red-600 mb-4">{{ hoveredCategory }}</h3>
                <div class="space-y-3">
                  <div
                    v-for="subcategory in categories.find(c => c.name === hoveredCategory)?.subcategories"
                    :key="subcategory.name"
                    class="py-2 px-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors"
                    :class="{ 'bg-gray-50': hoveredSubCategory === subcategory.name }"
                    @mouseenter="handleSubCategoryHover(subcategory.name)"
                  >
                    <span class="text-gray-800">{{ subcategory.name }}</span>
                    <ChevronRightIcon class="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Products Column - Appears when subcategory is hovered -->
            <div v-if="hoveredSubCategory" class="w-80 products-column">
              <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-900 mb-4">{{ hoveredSubCategory }}</h3>
                <div class="grid grid-cols-2 gap-4">
                  <router-link
                    v-for="item in categories
                      .find(c => c.name === hoveredCategory)
                      ?.subcategories.find(s => s.name === hoveredSubCategory)
                      ?.items"
                    :key="item.name"
                    :to="`/product/${item.name.toLowerCase().replace(/\s+/g, '-')}`"
                    class="group cursor-pointer"
                  >
                    <div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <img
                        :src="item.image"
                        :alt="item.name"
                        class="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                      />
                    </div>
                    <p class="mt-2 text-sm text-gray-700 group-hover:text-green-600 transition-colors">
                      {{ item.name }}
                    </p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-6">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-md font-medium text-gray-700 hover:text-green-600 transition-colors"
            :class="{
              'text-green-600 font-semibold': item.name === 'Prescription' || item.name === 'Offers'
            }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Quick Links -->
        <div class="flex items-center space-x-6">
          <!-- Store Locator -->
          <a href="/stores" class="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-all">
            <div class="flex items-center justify-center w-6 h-6 border border-red-600 rounded-full">
              <FontAwesomeIcon :icon="faLocationDot" class="text-red-600 text-sm"/>
            </div>
            <span class="font-medium">Store Locator</span>
          </a>

          <!-- Shipping Info -->
          <a href="/shipping" class="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
            <FontAwesomeIcon :icon="faShippingFast" class="text-green-600" />
            <span class="font-medium">Shipping Info</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Breadcrumb Navigation -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex py-3" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2">
            <li v-if="showHomeIcon" class="flex items-center space-x-2">
              <router-link to="/" class="text-gray-500 hover:text-green-600 inline-flex items-center">
                <HomeIcon class="h-5 w-5 mr-1" />
                <span>Home</span>
              </router-link>
            </li>
            <template v-for="(crumb, index) in breadcrumbs" :key="crumb.href">
              <li class="flex items-center">
                <ChevronRightIcon class="h-5 w-5 text-gray-400 mx-1" />
                <router-link
                  :to="crumb.href"
                  :class="[
                    index === breadcrumbs.length - 1
                      ? 'text-green-600 font-medium'
                      : 'text-gray-500 hover:text-green-600'
                  ]"
                >
                  {{ crumb.name }}
                </router-link>
              </li>
            </template>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <!-- Mobile menu content -->
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <img src="/pharmapluslogo.webp" alt="PharmaPlus" class="h-8" />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>
        
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <!-- Mobile Search -->
            <div class="py-4">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search for products..."
                  class="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 text-gray-700 focus:border-green-500 focus:ring-0 focus:outline-none"
                  @keyup.enter="handleSearch"
                />
                <button
                  @click="handleSearch"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-700"
                >
                  <MagnifyingGlassIcon class="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <!-- Mobile Categories (Accordion Style) -->
            <div class="py-4">
              <div class="mb-2">
                <button class="w-full flex items-center justify-between px-4 py-2 bg-red-600 text-white font-semibold rounded-lg">
                  <span class="flex items-center">
                    <Bars3Icon class="h-5 w-5 mr-2" />
                    ALL CATEGORIES
                  </span>
                  <ChevronDownIcon class="h-5 w-5" />
                </button>
              </div>
              
              <div class="space-y-1 mt-3">
                <div v-for="category in categories" :key="category.name" class="border-b border-gray-100 last:border-0">
                  <button class="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 hover:text-green-600">
                    <span>{{ category.name }}</span>
                    <ChevronRightIcon class="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Mobile Navigation -->
            <div class="space-y-2 py-6">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-all"
                :class="{
                  'text-green-600': item.name === 'Prescription' || item.name === 'Offers'
                }"
              >
                {{ item.name }}
              </router-link>
            </div>
            
            <!-- Mobile Quick Links -->
            <div class="py-6 space-y-4">
              <a href="/stores" class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-green-600">
                <FontAwesomeIcon :icon="faLocationDot" class="text-green-600" />
                <span class="font-medium">Store Locator</span>
              </a>
              
              <a href="/shipping" class="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-green-600">
                <FontAwesomeIcon :icon="faShippingFast" class="text-green-600" />
                <span class="font-medium">Shipping Info</span>
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
.category-menu {
  min-width: 200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.subcategory-column {
  min-height: 300px;
}

.products-column {
  min-height: 300px;
}

/* Animation for smooth transitions */
.category-menu,
.subcategory-column,
.products-column {
  transition: all 0.2s ease-in-out;
}

/* Focus styles */
input:focus {
  box-shadow: none;
  outline: none;
  border-color: #10b981;
}

/* Ensure consistent heights for each category row */
.category-menu .px-4.py-3 {
  height: 46px;
  display: flex;
  align-items: center;
}

.subcategory-column .py-2.px-3 {
  height: 40px;
  display: flex;
  align-items: center;
}
</style>