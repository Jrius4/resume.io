<template>
    <div class="flex justify-between items-center p-4 shadow-md bg-white rounded-lg">
        <!-- Navigation Links -->
        <div class="flex gap-4 text-2xl">
            <router-link to="/" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-home"></i></span></router-link>
            <router-link to="/projects" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-briefcase"></i></span></router-link>
            <router-link to="/contact" class="text-gray-600 hover:text-black"><span><i
                        class="bx bx-user-circle"></i></span></router-link>
        </div>
        <!-- Hire Me Button -->
        <button class="px-4 py-2 bg-black text-white rounded-lg hover:opacity-80">
            Hire Me <i class='bx  bx-envelope'  ></i>
        </button>
    </div>
</template>
<script setup>
const emailMe = ()=>{
  window.location.href = `mailto:juliusjuniorkazibwe@gmail.com?subject=Hire%20Me&body=Hi%20Julius,%0D%0A%0D%0AI%20would%20like%20to%20hire%20you%20for%20a%20project.%0D%0A%0D%0AThank%20you!`;
}
// No script needed for this component
</script>

