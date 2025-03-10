<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const showScrollButton = ref(false);
const email = ref("");

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleSubscribe = () => {
  if (email.value) {
    alert("Thank you for subscribing!");
    email.value = "";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <footer class="bg-white text-gray-800 py-12 border-t relative">
    <!-- Background Image -->
    <div 
      class="absolute right-0 top-4 h-full w-1/2 bg-[url('/footer-1.png')] bg-no-repeat bg-contain pointer-events-none"
      style="background-size: auto 100%; background-position: 90% center;"
    ></div>

    <!-- Newsletter Subscription -->
    <div class="max-w-7xl mx-auto px-6 mb-12 relative">
      <div class="border border-gray-200 rounded-md py-8 px-10 bg-gradient-to-r from-white to-gray-50 ">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <!-- Left Section: Text Content -->
          <div class="max-w-lg">
            <h3 class="text-2xl font-bold text-gray-900">Join Our Newsletter</h3>
            <p class="text-md text-gray-600 mt-2">
              Subscribe now and stay updated with exclusive offers, new product launches, and more!
            </p>
          </div>

          <!-- Right Section: Input and Button -->
          <div class="flex w-full md:w-auto gap-2 items-center">
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter your email" 
              class="w-full md:w-80 px-5 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 
                    focus:outline-none focus:border-gray-400 focus:ring-0"
            />
            <button 
              @click="handleSubscribe"
              class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-700 transition-all duration-200 shadow-md"
            >
              Subscribe
              <FontAwesomeIcon :icon="faArrowUp" class="text-white text-sm rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 py-8 relative">
      <!-- Logo and Description -->
      <div>
        <img src="/pharmapluslogo.webp" alt="PharmaPlus Logo" class="h-12 mb-4" />
        <p class="text-base font-medium text-gray-700 leading-relaxed">Your trusted pharmaceutical partner, providing quality health solutions for everyone.</p>
      </div>

      <!-- Footer Navigation -->
      <div>
        <h3 class="footer-title">About Us</h3>
        <ul class="mt-4 space-y-3">
          <li><a href="/about" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">About Us</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Delivery Information</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Refund Policy</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Terms & Conditions</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Help & Support</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Careers</a></li>
        </ul>
      </div>

      <div>
        <h3 class="footer-title">Useful Links</h3>
        <ul class="mt-4 space-y-3">  
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Report Issue</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Payments</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Shipping</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">FAQs</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Cancellation & Returns</a></li>
        </ul>
      </div>

      <div>
        <h3 class="footer-title">Corporate</h3>
        <ul class="mt-4 space-y-3">
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Become a Vendor</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Affiliate Program</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Our Suppliers</a></li>
          <li><a href="#" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Promotions</a></li>
        </ul>
      </div>

      <div class="relative">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="mt-4 space-y-3">
          <li><a href="/account" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Account</a></li>
          <li><a href="/cart" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">View Cart</a></li>
          <li><a href="/wishlist" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">My Wishlist</a></li>
          <li><a href="/track-order" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Track My Order</a></li>
          <li><a href="/submit-prescription" class="text-base font-medium text-gray-600 hover:text-green-600 transition-colors duration-200">Submit Prescription</a></li>
        </ul>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="max-w-7xl mx-auto px-6 flex justify-center gap-6 border-t pt-6 pb-6 relative mt-4 bg-gray-50">
      <img src="/visa.svg" alt="Visa" class="h-8 opacity-75 hover:opacity-100 transition-opacity duration-200" />
      <img src="/mastercard.svg" alt="Mastercard" class="h-8 opacity-75 hover:opacity-100 transition-opacity duration-200" />
      <img src="/paypal.svg" alt="PayPal" class="h-8 opacity-75 hover:opacity-100 transition-opacity duration-200" />
      <img src="/mpesa-1.png" alt="Skrill" class="h-8 opacity-75 hover:opacity-100 transition-opacity duration-200" />
    </div>

    <!-- Bottom Section -->
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t  pt-6 relative">
      <p class="text-sm font-medium text-gray-600">&copy; {{ new Date().getFullYear() }} PharmaPlus. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-green-600 transition-colors duration-200">
          <FontAwesomeIcon :icon="faFacebook" size="lg" />
        </a>
        <a href="#" class="text-gray-400 hover:text-green-600 transition-colors duration-200">
          <FontAwesomeIcon :icon="faInstagram" size="lg" />
        </a>
        <a href="#" class="text-gray-400 hover:text-green-600 transition-colors duration-200">
          <FontAwesomeIcon :icon="faTwitter" size="lg" />
        </a>
        <a href="#" class="text-gray-400 hover:text-green-600 transition-colors duration-200">
          <FontAwesomeIcon :icon="faLinkedin" size="lg" />
        </a>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-10"
    >
      <button
        v-if="showScrollButton"
        @click="scrollToTop"
        class="fixed bottom-4 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transform hover:scale-110 transition-all duration-300 w-12 h-12 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon :icon="faArrowUp" class="text-lg" />
      </button>
    </Transition>
  </footer>
</template>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

button:hover .fa-arrow-up {
  animation: bounce 1s infinite;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  padding-bottom: 0.75rem;
  color: #374151;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150%;
  height: 2px;
  background: #e5e7eb;
  transform-origin: right;
  transition: transform 0.3s ease;
}

.footer-title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150%;
  height: 2px;
  background: #22c55e;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.footer-title:hover::before {
  transform: scaleX(1);
}

.footer-title:hover::after {
  transform: scaleX(0);
}
</style>