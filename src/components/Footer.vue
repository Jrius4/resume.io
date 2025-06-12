<template>
  <footer class="bg-gray-900 text-gray-300 py-12 px-4 md:px-8  rounded-lg shadow-md">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Navigation Column -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4">Navigation</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition">Home</a></li>
          <li><a href="#" class="hover:text-white transition">About</a></li>
          <li><a href="#" class="hover:text-white transition">Expertise</a></li>
          <li><a href="#" class="hover:text-white transition">Website Service</a></li>
        </ul>
      </div>

      <!-- Services Column -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4">Services</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition">Business-Focused Solutions</a></li>
          <li><a href="#" class="hover:text-white transition">UI/UX Design</a></li>
          <li><a href="#" class="hover:text-white transition">System Development</a></li>
          <li><a href="#" class="hover:text-white transition">Analytics & Conversion Tracking</a></li>
        </ul>
      </div>

      <!-- Social Media Column -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4">Social Media</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition">WhatsApp</a></li>
          <li><a href="#" class="hover:text-white transition">Twitter</a></li>
          <li><a href="#" class="hover:text-white transition">Instagram</a></li>
          <li><a href="#" class="hover:text-white transition">LinkedIn</a></li>
        </ul>
      </div>

      <!-- Contact Column -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4">Information</h3>
        <div class="space-y-4">
          <p class="flex items-start">
            <span class="mr-2">📧</span>
            <a href="mailto:juliusjuniorkazibwe@gmail.com?subject=Hire%20Me&body=Hi%20Julius,%0D%0A%0D%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.%0D%0A%0D%0AThank%20you!" class="hover:text-white transition">juliusjuniorkazibwe@gmail.com</a>
          </p>
          <p class="flex items-start">
            <span class="mr-2">📍</span>
            <span>Kampala, Uganda</span>
          </p>
          <p class="flex items-start">
            <span class="mr-2">📞</span>
            <a href="tel:+256700393413" class="hover:text-white transition">(+256) 700393413</a>
          </p>
        </div>

        <div class="mt-6">
          <p class="text-xl font-bold text-white mb-4">Be Creative,<br>Be Solutive</p>
          <div class="flex">
            <input
                type="email"
                placeholder="Enter your email"
                class="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
            <button  @click.prevent="emailMe" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
      <p>© 2018 My Portfolio. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Using Composition API
import { ref } from 'vue';

const email = ref('');

// You can add functions here if needed
// const subscribe = () => {
//   console.log('Subscribed with:', email.value);
//   email.value = '';
// }

const emailMe = ()=>{
  window.location.href = `mailto:juliusjuniorkazibwe@gmail.com?subject=Hire%20Me&body=Hi%20Julius,%0D%0A%0D%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.%0D%0A%0D%0AThank%20you!`;
}
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>