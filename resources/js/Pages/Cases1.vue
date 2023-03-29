<script setup>
import { ref } from "vue";
import Cases from "@/Pages/Cases.vue";
import { Head } from "@inertiajs/vue3";
import HistoryButton from "@/Components/HistoryButton.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
</script>

<template>
    <Cases>
        <template #header>
            <div class="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2
                    class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
                >
                    УГОЛОВНЫЕ ДЕЛА
                </h2>
                <div class="absolute z-10 bottom-14 left-4">
                    <HistoryButton :href="'/cases'">
                        <div class="font-semibold text-lg text-black">
                            Go Back
                        </div>
                    </HistoryButton>
                </div>
            </div>
        </template>

        <div class="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div
                class="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
                <div class="">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="">
                            <div class="grid grid-cols-2">
                                <div class="grid"></div>
                                <div class="grid content-center items-center">
                                    <p
                                        class="w-full text-lg md:text-2xl text-white font-bold"
                                    >
                                        hello
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div
                class="bg-white mt-12 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
                <div class="p-6 text-gray-900 dark:text-gray-100"></div>
            </div>
        </div>
    </Cases>
</template>

<style></style>

<script>
export default {
    components: {
        HistoryButton,
    },
    props: {
        products: Array,
        cases: Array,
    },

    name: "Cases1",
};
</script>
