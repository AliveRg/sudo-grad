<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import TitleImage from "@/Components/TitleImage.vue";
import { ref, onMounted } from "vue";

const currentTitle = ref("");
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                currentTitle.value = entry.target.getAttribute("id");
            }
        });
    });
    document.querySelectorAll(".title_image").forEach((TitleImage) => {
        observer.observe(TitleImage);
    });
});
</script>

<template>
    <Head title="О компании" />

    <AuthenticatedLayout>
        <template #header>
            <div class="h-full flex justify-center items-center">
                <h1
                    class="font-semibold text-2xl lg:text-4xl text-gray-800 dark:text-gray-50 leading-tight"
                >
                    О Нас
                </h1>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <div class="grid grid-row-auto gap-56">
                            <TitleImage
                                v-for="item in 3"
                                :key="item"
                                :id="item"
                                :num="item"
                                :class="{ active: item == currentTitle }"
                                class="title_image flex flex-row md:odd:flex-row-reverse md:even:flex-row"
                                :reverse="'reverse'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
export default {
    return: {
        response: {
            data: [],
        },
    },
    components: {
        TitleImage,
    },
    setup: {},
};
</script>
