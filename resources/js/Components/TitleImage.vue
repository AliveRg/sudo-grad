<script setup>
import { ref, onMounted } from "vue";
import SvgImg2 from "@/Components/SvgImage2.vue";

const currentTitle = ref("");
// onMounted(() => {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.intersectionRatio > 0) {
//                 currentTitle.value = entry.target.getAttribute("id");
//             }
//         });
//     });

//     document.querySelectorAll(".title_image").forEach((TitleImage) => {
//         observer.observe(TitleImage);
//     });
// });
</script>

<template>
    <div
        v-for="item in 1"
        :key="item"
        :id="item"
        :class="{
            title_image_active: item == currentTitle,
        }"
        class="title_image flex flex-row md:flex-row text-gray-900 dark:text-gray-400"
    >
        <div
            class="w-full flex flex-col sm:flex-row justify-between items-center gap-8"
            :class="reverse ? 'md:flex-row-reverse' : ''"
        >
            <div class="flex flex-col items-center gap-7">
                <img
                    :class="img ? 'block' : ' hidden'"
                    class="w-[400px] h-[400px] rounded-full flex justify-center items-center bg-cover bg-no-repeat bg-center"
                    v-bind:style="{
                        backgroundImage: 'url(/images/' + img + '.jpg' + ')',
                    }"
                />
                <div :class="svg ? 'block' : ' hidden'">
                    <SvgImg2 />
                </div>
                <p class="text-center" :class="title ? 'block' : ' hidden'">
                    <span class="text-xl font-medium">{{ title }}</span>
                    <br />
                    {{ pretitle }}
                </p>
            </div>
            <div class="w-full md:w-8/12 text-base md:text-xl lg:text-2xl">
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
        svg: Boolean,
        text: String,
        img: String,
        title: String,

        pretitle: String,
    },
};
</script>

<style>
/* .title_image {
    opacity: 0;
    transition: 2s all ease-in-out;
    transform: translateY(20%);
}

.title_image_active {
    opacity: 1;
    transform: translateY(0%);
} */
</style>
