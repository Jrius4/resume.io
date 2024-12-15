<template>
    <div class="min-h-screen bg-gray-50 p-6">
        <!-- Project Overview -->
        <div class="bg-white shadow-md rounded-lg p-6">
            <div class="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                <div><strong>Client:</strong> {{ project.client }}</div>
                <div><strong>Company:</strong> {{ project.company }}</div>
                <div><strong>Project Type:</strong> {{ project.type }}</div>
                <div><strong>Year:</strong> {{ project.year }}</div>
            </div>

            <h1 class="text-3xl font-bold mb-4">{{ project.name }}</h1>
            <p class="text-gray-500 mb-6">{{ project.description }}</p>

            <!-- Call-to-Action Button -->
            <a @click="gotoProject(project.website)" target="_blank"
                class="inline-block px-4 py-2 bg-black text-white rounded-lg hover:opacity-80">
                Visit Website <i class="bx bx-right-arrow-alt"></i>
            </a>

            <!-- Project Image -->
            <div class="mt-6">
                <img :src="project.image" alt="Project preview" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from './../store/projectStore';

// Access route parameters
const route = useRoute();
const projectId = route.params.id;

// Fetch project data from Pinia store
const projectStore = useProjectStore();
const project = computed(() => projectStore.getProjectById(projectId));
const gotoProject = (link) => {
    window.location.href = link;
}
</script>
