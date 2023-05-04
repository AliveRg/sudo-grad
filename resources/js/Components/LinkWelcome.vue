<template>
    <div class="flex">
        <div>
            <div>
                <div
                    class="h-16 w-16 bg-currentCian/30 dark:bg-teal-800/20 flex items-center justify-center rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="w-7 h-7 stroke-currentBroun"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                </div>
            </div>
            <h2
                class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
            >
                {{ title }}
            </h2>

            <p
                class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
            >
                {{ content }}
            </p>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="self-center shrink-0 stroke-currentBroun w-6 h-6 mx-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
        </svg>
    </div>
</template>

<script>
export default {
    props: ["title", "content"],
};
</script>
