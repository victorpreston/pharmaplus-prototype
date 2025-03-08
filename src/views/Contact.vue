<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  department: 'sales'
})

const departments = [
  { id: 'sales', name: 'Sales' },
  { id: 'support', name: 'Technical Support' },
  { id: 'general', name: 'General Inquiry' },
  { id: 'press', name: 'Press Relations' }
]

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="bg-white">
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for inquiries about our products, services, or partnership opportunities.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        <div>
          <h3 class="text-2xl font-bold tracking-tight text-gray-900">Get in touch</h3>
          <p class="mt-4 leading-7 text-gray-600">
            We're here to help! Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <dl class="mt-8 space-y-6">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <span class="text-gray-900">🏢</span>
              </dt>
              <dd class="text-gray-600">
                123 PharmaPlus Way<br />
                Health District<br />
                Medical City, MC 12345
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <span class="text-gray-900">📞</span>
              </dt>
              <dd>
                <a class="text-primary-600 hover:text-primary-700" href="tel:+1 (555) 234-5678">
                  +1 (555) 234-5678
                </a>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <span class="text-gray-900">📧</span>
              </dt>
              <dd>
                <a class="text-primary-600 hover:text-primary-700" href="mailto:contact@pharmaplus.com">
                  contact@pharmaplus.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-6">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="firstName" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input v-model="form.firstName" type="text" name="firstName" id="firstName" autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input v-model="form.lastName" type="text" name="lastName" id="lastName" autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div class="mt-2.5">
              <input v-model="form.email" type="email" name="email" id="email" autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div class="mt-2.5">
              <input v-model="form.phone" type="tel" name="phone" id="phone" autocomplete="tel"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="department" class="block text-sm font-semibold leading-6 text-gray-900">Department</label>
            <div class="mt-2.5">
              <select v-model="form.department" id="department" name="department"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6">
                <option v-for="department in departments" :key="department.id" :value="department.id">
                  {{ department.name }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea v-model="form.message" name="message" id="message" rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <button type="submit"
            class="btn-primary w-full sm:w-auto">
            Send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>