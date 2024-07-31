<script lang="ts" setup>
const certificates = ref([
    "/images/certificate-1.jpg",
    "/images/certificate-2.jpg",
    "/images/certificate-3.jpg",
    "/images/certificate-4.jpg",
    "/images/certificate-5.JPG",
]);

const currentCertificate = ref(null);

const viewCertificate = (index: any) => {
    currentCertificate.value = index;
};

const closeView = () => {
    currentCertificate.value = null;
};

const slide = (direction: "next" | "prev") => {
    const carousel = document.querySelector(".overflow-x-scroll");
    if (!carousel) {
        return;
    }
    const scrollAmount = carousel.clientWidth;
    let scrollDistance;
    if (direction === "next") {
        scrollDistance = scrollAmount;
    } else {
        scrollDistance = -scrollAmount;
    }
    carousel.scrollBy({
        left: scrollDistance,
        top: 0,
        behavior: "smooth",
    });
};
</script>
<template>
    <section>
        <div
            class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col justify-between mb-8"
        >
            <h2 class="text-2xl header">Certificate</h2>
            <p>I've done several projects in the past years</p>
        </div>
        <div class="relative group">
            <div
                ref="carousel"
                class="flex overflow-x-scroll no-scrollbar duration-500 ease-in-out"
            >
                <div
                    v-for="(certificate, index) in certificates"
                    :key="index"
                    class="flex-none w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                    <img
                        class="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-fill h-[250px] w-[350px] m-auto block"
                        :src="certificate"
                        :draggable="false"
                        @click="viewCertificate(index)"
                    />
                </div>
            </div>
            <transition name="fade">
                <div
                    v-if="currentCertificate !== null"
                    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    @click="closeView"
                >
                    <div
                        class="relative max-w-4xl mx-4 my-8 p-4 bg-white rounded-lg shadow-lg"
                        @click.stop
                    >
                        <img
                            :src="certificates[currentCertificate]"
                            class="w-full h-auto"
                        />
                        <button
                            class="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 w-[30px] h-[30px] rounded-full hover:bg-opacity-75 flex items-center justify-center"
                            @click="closeView"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                fill="white"
                                width="20"
                                height="20"
                            >
                                <path
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </transition>
            <div class="absolute inset-y-0 left-[10px] flex items-center">
                <button
                    class="bg-gray-800/70 w-[30px] h-[30px] flex items-center opacity-0 group-hover:opacity-100 transition duration-300 justify-center font-bold text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
                    @click="slide('prev')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="white"
                        width="10"
                        height="10"
                    >
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                        />
                    </svg>
                </button>
            </div>
            <div class="absolute inset-y-0 right-[10px] flex items-center">
                <button
                    class="bg-gray-800/70 w-[30px] h-[30px] flex items-center opacity-0 group-hover:opacity-100 transition duration-300 justify-center font-bold text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
                    @click="slide('next')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="white"
                        width="10"
                        height="10"
                    >
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
