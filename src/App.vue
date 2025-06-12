<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-2 flex flex-col gap-4">
    <Header />
    <router-view />
    <Footer class="mt-auto" />
  </div>
</template>

<style scoped></style>
