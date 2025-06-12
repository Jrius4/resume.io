<template>
    <div class="p-6 bg-white rounded-lg shadow-lg text-center">
        <span class="text-gray-600 font-medium">Full Stack Software Engineer</span>
        <!-- Status -->
        <div class="text-sm font-semibold text-green-600 mt-1">
            ✅ AVAILABLE FOR WORK
        </div>

        <!-- Avatar -->
        <div class="flex justify-center mt-4">
            <img :src="avatar" alt="Profile" class="w-24 h-24 rounded-full">
        </div>

        <!-- Name & Description -->
        <h1 class="text-3xl font-bold mt-4">I'm Eng. Julius Junior Kazibwe</h1>
        <p class="text-gray-500 my-2">
            Full Stack Software Engineer from Kampala, Uganda. <br> Currently Head of Technology and Lead Senior Software Engineer at
            Trail Analytics
            Limited.
        </p>
      <p class="text-gray-500 mb-2">
            Passionate about building scalable web applications and working with modern technologies. <br> Let's connect
            and build something great together!
      </p>
        <!-- Social Links -->




        <!-- Buttons -->
        <div class="flex justify-center gap-4 mt-6">
            <button class="px-4 py-2 bg-black text-white rounded-lg" @click.prevent="contactMe">Hire Me</button>
            <button class="px-4 py-2 bg-gray-200 rounded-lg" @click.prevent="emailMe">Copy Email</button>
        </div>
    </div>
</template>
<script setup>
// import avatar from "./../icons/avatar.png"
import { ref } from 'vue';

const emailMe = ()=>{
  window.location.href = `mailto:juliusjuniorkazibwe@gmail.com?subject=Hire%20Me&body=Hi%20Julius,%0D%0A%0D%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.%0D%0A%0D%0AThank%20you!`;
}

const avatar = new URL("../icons/avatar.png", import.meta.url).href;

const contactMe = ()=>{
  window.location.href = `tel:+256-701-123-456`;
}
</script>
