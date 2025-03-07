<script lang="ts" setup>
// const { enabled } = useTheme();
// const { reveal } = useScrollReveal();
</script>

<template>
    <div class="relative w-full max-w mx-auto h-[100vh]">
        <div class="w-full h-full flex justify-center align-center">
            <!-- Ice Mountain Image -->
            <img
                src="/images/mountain.jpg"
                alt="Cold Ice Mountain"
                class="w-full h-full object-cover rounded-none filter brightness-50 contrast-110 saturate-50"
            />
            <!-- Black Overlay -->
            <div class="absolute inset-0 bg-black/40"></div>
        </div>
        <div
            class="w-full h-full flex justify-center align-center absolute inset-0"
        >
            <div
                class="flex flex-col justify-center align-center text-center gap-2 text-white"
            >
                <img
                    src="/images/profile-white.png"
                    alt="profile picture"
                    class="h-[220px] w-[220px] object-cover rounded-full mx-auto"
                />
                <h2 class="text-4xl font-extrabold">Raka Okto Ramadhan</h2>
                <p class="font-semibold">
                    Web developer entushiast & Fullstack developer
                </p>
                <div class="mt-8">
                    <a href="#about" class="inline-block">
                        <!-- Outer Box -->
                        <div
                            class="relative w-8 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center overflow-hidden"
                        >
                            <!-- Moving Dot -->
                            <div
                                class="w-3 h-3 bg-white rounded-full absolute animate-scroll-dot"
                            ></div>
                        </div>
                    </a>
                    <p>scroll down</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@keyframes scroll-dot {
    0% {
        transform: translateY(-80%);
    }
    20% {
        transform: translateY(-20%);
    }
    40% {
        transform: translateY(-60%);
    }
    60% {
        transform: translateY(40%);
    }
    80% {
        transform: translateY(80%);
    }
    100% {
        transform: translateY(-80%);
    }
}

.animate-scroll-dot {
    animation: scroll-dot 2s ease-in-out infinite;
}
</style>
