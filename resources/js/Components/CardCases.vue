<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img
            :src="'./images/' + src"
            alt=""
            class="rounded-t-lg drop-shadow-2xl"
        />
        <div
            v-if="hover"
            class="absolute w-full h-full bg-neutral-900 opacity-50 inset-0 rounded-lg"
        ></div>
        <div
            v-if="hover"
            class="absolute top-0 w-full h-full flex flex-col justify-between p-2"
        >
            <div class="absolut w-full max-h-24 h-full">
                <p class="text-white text-clip">
                    {{ title }}
                </p>
            </div>
            <div class="flex items-center justify-between">
                <button type="button" name="button" class="flex items-center">
                    <p class="font-semibold text-white">more</p>
                    <span class="material-symbols-outlined text-white">
                        expand_more
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        title: String,
    },
    data() {
        return {
            vide: false,
            hover: false,
        };
    },
};
</script>

<style></style>
