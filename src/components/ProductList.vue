<template>
    <div class="p-6 bg-white rounded-lg shadow-md mt-4">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Projects</h2>
            <button class="text-gray-500 hover:text-black">View All <i class="bx bx-right-arrow-alt"></i></button>
        </div>

        <div class="space-y-4">
            <div v-for="project in projects" :key="project.name" class="p-4 bg-gray-100 rounded-lg flex items-center">
                <div class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                    <!-- Replace with actual project icon -->
                </div>
                <div class="ml-4">
                    <h3 class="font-semibold">{{ project.name }}</h3>
                    <p class="text-sm text-gray-500">{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    { name: 'Rectangle', description: 'Product design, Icon design' },
    { name: 'Morva Labs', description: 'Visual design, Branding' },
    { name: 'Simply', description: 'Landing page, Illustration design' },
];
</script>
