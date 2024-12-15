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
        <h1 class="text-3xl font-bold mt-4">I'm Julius Junior Kazibwe</h1>
        <p class="text-gray-500 mt-2">
            Full Stack Software Engineer from Kampala, Uganda. <br> Currently a Senior Full Stack Software Engineer at
            Trail Analytics
            Limited.
        </p>

        <!-- Buttons -->
        <div class="flex justify-center gap-4 mt-6">
            <button class="px-4 py-2 bg-black text-white rounded-lg">Hire Me</button>
            <button class="px-4 py-2 bg-gray-200 rounded-lg">Copy Email</button>
        </div>
    </div>
</template>
<script setup>
import avatar from "./../icons/avatar.png"
</script>
