<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
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
                        class="p-6 text-gray-900 dark:text-gray-400 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"
                    >
                        <div v-for="product in products" :key="product.id">
                            <CardProduct
                                :title="product.title"
                                :content="product.content"
                                :image_path="product.image_path"
                                :product_id="product.product_id"
                            />
                        </div>
                    </div>

                    <div
                        class="h-full w-full p-6 grid grid-cols-1 gap-20 lg:grid-rows-1 lg:grid-cols-3"
                    >
                        <div class="lg:col-span-2">
                            <h1
                                class="w-full text-2xl font-bold dark:text-gray-300 p-4"
                            >
                                Не нашли нужной категории или не уверены в
                                выборе?
                            </h1>
                            <p
                                class="w-3/4 text-xl font-medium dark:text-gray-400 px-4"
                            >
                                Для этого и нужны адвокаты, мы помогаем людям
                                разобраться в их проблемах и хотим максимально
                                помочь
                            </p>
                        </div>
                        <div class="w-full relative">
                            <div
                                id="text"
                                class="text absolute position-center rotate-90 border-2 rounded-full border-teal-400 h-32 w-32"
                            >
                                <p>
                                    <span
                                        v-for="(item, index) in text"
                                        :key="index"
                                        class="dark:text-gray-200"
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
    props: {
        products: Object,
    },
    name: "DashBoard",
    components: {
        CardProduct,
    },
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
