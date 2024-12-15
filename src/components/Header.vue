<template>
    <div class="flex justify-between items-center p-4 shadow-md bg-white rounded-lg">
        <!-- Navigation Links -->
        <div class="flex gap-4 text-2xl">
            <router-link to="/resume.io" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-home"></i></span></router-link>
            <router-link to="/projects" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-briefcase"></i></span></router-link>
            <router-link to="/contact" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-user-circle"></i></span></router-link>
        </div>
        <!-- Hire Me Button -->
        <button class="px-4 py-2 bg-black text-white rounded-lg hover:opacity-80">
            Hire Me <i class="bx bx-phone"></i>
        </button>
    </div>
</template>
