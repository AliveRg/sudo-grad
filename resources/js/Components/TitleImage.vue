<script setup>
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
    <div
        v-for="item in 1"
        :key="item"
        :id="item"
        :class="{
            title_image_active: item == currentTitle,
        }"
        class="title_image flex flex-row md:flex-row"
    >
        <div
            class="w-full flex flex-col sm:flex-row justify-between gap-8"
            :class="reverse ? 'md:flex-row-reverse' : ''"
        >
            <div
                class="h-[23rem] sm:h-[25rem] md:h-[39rem] w-full sm:w-1/3 rounded-lg flex justify-center items-center bg-cover bg-no-repeat bg-center"
                v-bind:style="{
                    backgroundImage: 'url(/images/' + img + '.jpg' + ')',
                }"
            >
                <h1 class="block"></h1>
            </div>

            <div
                class="w-full md:w-6/12 dark:text-slate-200 text-base md:text-xl lg:text-3xl"
            >
                <h2 class="overflow-scroll h-auto inline align-middle">
                    {{ text }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reverse: Boolean,
        text: String,
        img: String,
    },
};
</script>

<style>
.title_image {
    opacity: 0;
    transition: 2s all ease-in-out;
    transform: translateY(20%);
}

.title_image_active {
    opacity: 1;
    transform: translateY(0%);
}
</style>
