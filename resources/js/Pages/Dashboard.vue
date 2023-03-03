<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import ServiseLink from "@/Components/ServiceLink.vue";
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
                        <ServiseLink
                            :products="product"
                            v-for="product in products"
                            :key="product.id"
                        />
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
                                class="text absolute position-center rotate-90 border-2 rounded-full border-amber-400 h-32 w-32"
                            >
                                <p>Gorodova - Advokate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
export default {
    name: "DashBoard",
    components: {
        ServiseLink,
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
