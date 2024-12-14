<script setup>
import Header from "./components/Header.vue"
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 flex flex-col gap-4">
    <Header />
    <router-view />
  </div>
</template>

<style scoped></style>
