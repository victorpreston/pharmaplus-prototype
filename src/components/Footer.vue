<script setup lang="ts">
const navigation = {
  solutions: [
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Research', href: '#' },
    { name: 'Innovation', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Documentation', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Support', href: '#' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Policies', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: '📱'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: '📸'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: '💼'
    }
  ]
}
</script>

<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <div class="text-2xl font-bold text-white">PharmaPlus</div>
          <p class="text-sm leading-6 text-gray-300">
            Making the world a healthier place through innovative pharmaceutical solutions.
          </p>
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href"
              class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">{{ item.name }}</span>
              {{ item.icon }}
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; {{ new Date().getFullYear() }} PharmaPlus. All rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>