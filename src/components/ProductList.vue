<template>
    <div class="p-6 bg-white rounded-lg shadow-md mt-4">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Projects</h2>
            <button class="text-gray-500 hover:text-black">View All <i class="bx bx-right-arrow-alt"></i></button>
        </div>

        <div class="space-y-4">
            <a @click="goto(project)" v-for="project in projects" :key="project.name"
                class="p-4 bg-gray-100 rounded-lg flex items-center hover:bg-slate-200 hover:cursor-pointer">
                <div class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                    <!-- Replace with actual project icon -->
                </div>
                <div class="ml-4">
                    <h3 class="font-semibold">{{ project.name }}</h3>
                    <p class="text-sm text-gray-500">{{ project.description }}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useProjectStore } from "./../store/projectStore";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const projectsStore = useProjectStore();


const projects = computed(() => {
    return projectsStore.projects;
});
const goto = (project) => {
    // Navigate to project details page
    // Replace with actual navigation logic
    console.log("Navigating to project details page", { project });
    router.push(`/projects/${project.id}`);
}
</script>
