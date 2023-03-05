<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                Наши Услуги
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div
                        class="p-6 text-gray-900 dark:text-gray-100 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"
                    >
                        <a
                            v-for="product in products"
                            :key="product.id"
                            href="#"
                            class="bg-gray-200 dark:bg-gray-900 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-amber-500 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none w-full"
                        >
                            <div class="p-5 w-full flex flex-col">
                                <div
                                    class="w-full h-40 mx-auto bg-center bg-no-repeat bg-cover rounded-lg sm:max-w1/2 backdrop-brightness-50 text-xl p-1 style flex justify-center items-center text-white"
                                    v-bind:style="{
                                        backgroundImage:
                                            'url(./images/' +
                                            product.image_path +
                                            ')',
                                    }"
                                >
                                    {{ product.title }}
                                </div>
                                <p class="mt-4">
                                    {{ product.content }}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div
                        class="h-full w-full p-6 grid grid-cols-1 gap-20 lg:grid-rows-1 lg:grid-cols-3"
                    >
                        <div class="lg:col-span-2">
                            <h1 class="w-full text-2xl font-bold">
                                Не нашли нужной категории или не уверены в
                                выборе?
                            </h1>
                            <p class="w-3/4 text-xl font-medium">
                                Для этого и нужны адвокаты, мы помогаем людям
                                разобраться в их проблемах и хотим максимально
                                помочь
                            </p>
                        </div>
                        <div class="w-full relative">
                            <div
                                id="text"
                                class="text absolute position-center rotate-90 border-2 rounded-full border-amber-400 h-32 w-32"
                            >
                                <p>
                                    <span
                                        v-for="(item, index) in text"
                                        :key="index"
                                    >
                                        {{ item }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
const text = "Gorodova - Advokate".split("");

export default {
    data() {},
    props: {
        products: Object,
    },
    name: "DashBoard",
};
</script>

<style>
.position-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
