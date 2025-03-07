<script lang="ts" setup>
const { enabled } = useTheme();
// const { reveal } = useScrollReveal();
// const enabled = false;
</script>

<template>
    <section id="about" class="section">
        <div
            class="border-b-[1px] dark:border-slate-500 p-2 flex justify-between mb-8 text-gray-900 dark:text-gray-300"
        >
            <h2 class="text-2xl header">About Me</h2>
            <a
                href="https://www.linkedin.com/in/raka-okto-ramadhan/"
                target="_blank"
                class="flex gap-4 items-center dark:text-gray-300"
                >View my Linkedin
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :fill="enabled ? 'white' : 'black'"
                    height="1em"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                </svg>
            </a>
        </div>
        <div class="flex justify-between gap-8 p-2 md:flex-row flex-col">
            <div class="basis-6/12 text-gray-900 flex flex-col gap-4">
                <p>
                    Hi, I'm Raka Okto Ramadhan! I'm a web developer passionate
                    about building scalable, high-performance applications with
                    a strong focus on clean code and user experience. I thrive
                    in remote work environments, ensuring efficient project
                    management and seamless collaboration using tools like Git,
                    Jira, and Figma.
                </p>
                <p>
                    My expertise includes Laravel, Nuxt.js, React, and API
                    development, along with frontend and backend technologies
                    such as Vue.js, Tailwind, Bootstrap, and database management
                    with MySQL, PostgreSQL, and SQL Server. I continuously
                    expand my knowledge to stay ahead in modern web development.
                </p>
            </div>
            <div class="basis-6/12 flex flex-col gap-6">
                <h3>Timeline Experience</h3>
                <div class="flex gap-6">
                    <!-- Timeline Line & Dots -->
                    <div class="relative flex flex-col items-center">
                        <!-- Vertical Line -->
                        <div
                            class="absolute w-0.5 bg-gray-300 dark:bg-gray-600 top-[10px] bottom-0 z-[0]"
                        ></div>
                    </div>

                    <!-- Experience List -->
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2 relative">
                            <span
                                class="w-4 h-4 bg-primary-500 rounded-full border-2 left-[-32px] top-[5px] absolute border-white dark:border-gray-900 z-10"
                            ></span>
                            <h4
                                class="text-xl text-gray-900 dark:text-gray-300"
                            >
                                Fullstack Developer - Intern
                            </h4>
                            <p class="text-slate-900">
                                PT Juke Solusi Teknologi
                                <span
                                    class="font-normal text-base transition-none"
                                    >- Remote</span
                                >
                            </p>
                            <p
                                class="text-slate-900 dark:text-gray-400 text-sm"
                            >
                                August 2024 - January 2024
                            </p>
                        </div>
                        <UDivider />

                        <div class="flex flex-col gap-2 relative">
                            <span
                                class="w-4 h-4 bg-primary-500 rounded-full border-2 left-[-32px] top-[5px] absolute border-white dark:border-gray-900 z-10"
                            ></span>
                            <h4
                                class="text-xl text-gray-900 dark:text-gray-300"
                            >
                                Frontend Developer - Intern
                            </h4>
                            <p class="text-slate-900">
                                PT Juke Solusi Teknologi
                                <span
                                    class="font-normal text-base transition-none"
                                    >- Remote</span
                                >
                            </p>
                            <p
                                class="text-slate-900 dark:text-gray-400 text-sm"
                            >
                                July 2023 - June 2024
                            </p>
                        </div>
                        <UDivider />

                        <div class="flex flex-col gap-2 relative">
                            <span
                                class="w-4 h-4 bg-primary-500 rounded-full border-2 left-[-32px] top-[5px] absolute border-white dark:border-gray-900 z-10"
                            ></span>
                            <h4
                                class="text-xl text-gray-900 dark:text-gray-300"
                            >
                                Android & Microcontroller Development - Intern
                            </h4>
                            <p class="text-slate-900">
                                APKOMINDO
                                <span
                                    class="font-normal text-base transition-none"
                                    >- On site</span
                                >
                            </p>
                            <p
                                class="text-slate-900 dark:text-gray-400 text-sm"
                            >
                                January 2023 - March 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
