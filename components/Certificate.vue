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
</script>
<template>
    <section>
        <div
            class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col justify-between mb-8 text-gray-900 dark:text-gray-300"
        >
            <h2 class="text-2xl header">Certificate</h2>
            <p class="subHeader">Some Certifications I Have Earned</p>
        </div>
        <div>
            <UCarousel
                v-slot="{ item }"
                :items="certificates"
                :ui="{ item: 'basis-full lg:basis-1/3' }"
                class="rounded-lg overflow-hidden"
                arrows
            >
                <img
                    :src="item"
                    class="w-full cursor-pointer"
                    draggable="false"
                    @click="viewCertificate(certificates.indexOf(item))"
                />
            </UCarousel>
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
                            class="absolute top-4 right-4 text-gray-300 text-3xl font-bold bg-black bg-opacity-50 p-2 w-[30px] h-[30px] rounded-full hover:bg-opacity-75 flex items-center justify-center"
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
