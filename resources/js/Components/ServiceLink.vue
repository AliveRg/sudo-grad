<script>
export default {
    name: "ServiceLink",
    props: {
        news: Array,
    },
    computed: {
        bg() {
            return `background-image: url("./images/${this.news.img}");`;
        },
    },
};
</script>

<template>
    <a
        href="#"
        class="bg-gray-200 dark:bg-gray-900 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-amber-500 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none w-full"
    >
        <div class="p-5 w-full flex flex-col">
            <div
                class="w-full h-40 mx-auto bg-center bg-no-repeat bg-cover rounded-lg sm:max-w1/2 backdrop-brightness-50 text-xl p-1 style flex justify-center items-center text-white"
                :style="bg"
            >
                {{ news.title }}
            </div>
            <p class="mt-4">
                {{ news.desc }}
            </p>
        </div>
    </a>
</template>
