<script lang="ts" setup>
// const { enabled } = useTheme();
// const { reveal } = useScrollReveal();
const enabled = false;
</script>

<template>
    <section class="section py-12 relative">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="text-center md:text-left md:w-1/2">
                <div class="flex mb-4 gap-2">
                    <img src="/icon/waving.svg" width="40" />
                    <h1 class="text-4xl font-bold">Hi There!</h1>
                </div>
                <p class="text-lg mb-6">
                    Welcome to my personal portfolio! I'm passionate about web
                    development and specialize in creating modern, responsive
                    websites using the latest technologies. Explore my work and
                    feel free to get in touch!
                </p>
                <UButton
                    class="inline-block bg-blue-500 text-white py-2 px-4 rounded"
                >
                    <a href="/cv.pdf" download>Download CV</a>
                </UButton>
            </div>
            <div class="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src="/images/foto.png"
                    alt="Profile Picture"
                    class="w-48 h-48 rounded-full shadow-lg object-cover object-top"
                />
            </div>
        </div>
        <!-- <div class="absolute bottom-4 w-full text-center">
            <a href="#next-section" class="text-gray-600 hover:text-gray-800">
                <svg
                    class="w-6 h-6 mx-auto animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
                <span class="mt-2 block">Scroll Down</span>
            </a>
        </div> -->
    </section>
</template>
