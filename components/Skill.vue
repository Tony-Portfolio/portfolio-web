<script lang="ts" setup>
const skills = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "HTML", level: "Intermediate (Advanced)" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Nuxt.js", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
];
</script>
<template>
    <section class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-8">Skills</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 class="text-xl font-medium mb-2">{{ skill.name }}</h3>
                    <p class="text-gray-900">{{ skill.level }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
