<script lang="ts" setup>
const { enabled } = useTheme();
const projects = [
    {
        title: "EMIS Kemenag 4",
        description: "Platform Sistem Pendataan Pendidikan Kementrian Agama",
        image: "/images/EMIS.png",
        skills: ["React.js", "React Native", "Redux", "Git"],
        link: "https://emis.kemenag.go.id/",
        role: "Front-End Developer",
    },
    {
        title: "Ferizy",
        description:
            "Ferizy is an electronic ticketing system that simplifies booking and managing ferry tickets. It focuses on enhancing user convenience and improving service efficiency.",
        image: "/images/Ferizy.jpg",
        skills: ["Vue.js", "Nuxt.js", "Pinia", "Git"],
        link: "https://trip.ferizy.com/",
        role: "Front-End Developer",
    },
];
</script>

<template>
    <section id="project">
        <div
            class="border-b-[1px] dark:border-slate-500 p-2 flex flex-col justify-between mb-8"
        >
            <h2 class="text-2xl header">Projects</h2>
            <p>Projects I've contributed to over the past years</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 -mx-4 gap-8 p-2">
            <UCard
                v-for="(project, index) in projects"
                :key="index"
                class="w-full dark-mode p-2 rounded-lg shadow-lg"
            >
                <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-48 object-cover rounded-t-lg"
                />
                <div class="p-4">
                    <div>
                        <a
                            class="flex gap-2 items-center w-fit relative"
                            :href="project.link"
                            target="_blank"
                        >
                            <div
                                class="absolute bg-white bottom-2 left-0 w-full h-[2px]"
                            ></div>
                            <h3 class="text-xl font-bold mb-2">
                                {{ project.title }}
                            </h3>
                            <svg
                                class="mb-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="14"
                                :fill="enabled ? 'white' : 'black'"
                            >
                                <path
                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div class="text-gray-700 dark:text-gray-300 mb-4">
                        <div class="project">
                            <ul class="gap-2 flex flex-col">
                                <li>
                                    <strong>Role:</strong> {{ project.role }}
                                </li>
                                <li>
                                    <strong>Overview:</strong>
                                    {{ project.description }}
                                </li>
                                <!-- 
                                <li>
                                    <strong>My Contribution:</strong> I
                                    contributed to the development of the refund
                                    and reschedule feature within the ETIS. This
                                    functionality allows users to modify or
                                    cancel their bookings, adding flexibility
                                    and enhancing the user experience. I
                                    collaborated with a team to design and
                                    implement this feature, ensuring it met user
                                    needs and project requirements.
                                </li> -->
                                <li>
                                    <strong>Technologies Used:</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <UChip
                            v-for="(item, index2) in project.skills"
                            :key="index2"
                            :show="false"
                        >
                            <UButton>{{ item }}</UButton>
                        </UChip>
                    </div>
                </div>
            </UCard>
        </div>
    </section>
</template>
