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
        class="title_image flex flex-row md:odd:flex-row-reverse md:even:flex-row"
    >
        <div class="w-full flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-1/2">
                <div
                    class="h-32 md:h-full bg-indigo-500 rounded-lg flex justify-center items-center"
                >
                    <h1 class="block">{{ item }}</h1>
                </div>
            </div>
            <div class="w-full md:w-5/12">
                <h2 class="overflow-scroll h-auto inline align-middle">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iure commodi est illo laborum reprehenderit atque eaque at
                    dolore repellendus aliquid? Lorem ipsum dolor sit amet
                    consectetur Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vero reiciendis sapiente non veritatis
                    voluptatibus? Rem maiores perspiciatis non dolores
                    necessitatibus sit culpa ab. Qui quia neque dolores eum
                    cumque quidem!
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
