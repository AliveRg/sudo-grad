<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
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
                        class="flex items-center justify-center h-min mb-12 bg-fixed bg-center bg-cover custom-img"
                    >
                        <div
                            class="h-full w-full p-6 grid grid-cols-1 gap-8 lg:gap-20 lg:grid-rows-1 lg:grid-cols-3"
                        >
                            <div class="grid lg:col-span-2 gap-4">
                                <h1
                                    class="w-full text-2xl font-bold text-gray-50 p-4"
                                >
                                    Не нашли нужной категории или не уверены в
                                    выборе?
                                </h1>
                                <CircleLogo text="SD-Gorodova-Advokate-GD-" />

                                <SecondaryButton class="ml-4" type="submit">
                                    Заказать Консультацию
                                </SecondaryButton>
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
    props: {
        products: Object,
    },
    name: "DashBoard",
    components: {
        CardProduct,
        CircleLogo,
        SecondaryButton,
    },
};
</script>

<style>
.custom-img {
    background-image: url(./images/under_main-paralax.png);
}
</style>
