<template>
    <div>
        <UButton label="Open" @click="isOpen = true" />

        <UModal
            v-model="isOpen"
            :overlay="overlay"
            :transition="transition"
            :prevent-close="preventClose"
            :fullscreen="fullscreen"
        >
            <UCard
                :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    base: fullscreen ? 'h-full flex flex-col' : '',
                    rounded: fullscreen ? '' : '',
                    body: {
                        base: fullscreen ? 'grow' : '',
                    },
                }"
            >
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3
                            class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-300"
                        >
                            Modal
                        </h3>
                        <UButton
                            color="gray"
                            variant="ghost"
                            icon="i-heroicons-x-mark-20-solid"
                            class="-my-1"
                            @click="isOpen = false"
                        />
                    </div>
                </template>

                <slot name="content" class="h-48"></slot>

                <template #footer>
                    <slot name="footer" class="h-8"></slot>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
interface ModalProps {
    overlay?: boolean;
    transition?: boolean;
    preventClose?: boolean;
    fullscreen?: boolean;
}

const { overlay, transition, preventClose, fullscreen } = withDefaults(
    defineProps<ModalProps>(),
    {
        overlay: true,
        transition: true,
        preventClose: true,
        fullscreen: false,
    },
);

const isOpen = ref(false);

// Shortcuts
defineShortcuts({
    escape: {
        usingInput: true,
        whenever: [isOpen],
        handler: () => {
            isOpen.value = false;
        },
    },
});
</script>
