<script setup></script>

<template>
    <a
        :href="'/dashboard/Page' + product_id"
        :class="
            route().current('products' + product_id)
                ? 'outline outline-2 outline-currentCian focus:outline-currentCian scale-[1.01] filter'
                : ''
        "
        class="h-full flex motion-safe:hover:scale-[1.01] transition-all duration-250 hover:outline hover:outline-2 hover:outline-currentCian focus:outline-currentCian via-transparent dark:ring-inset dark:ring-white/5 rounded-lg w-full"
    >
        <div class="cardOdserver p-5 w-full flex flex-col">
            <h3
                class="w-full h-40 mx-auto bg-center bg-no-repeat bg-cover rounded-lg sm:max-w1/2 backdrop-brightness-50 text-xl p-1 style flex justify-center items-center text-gray-100"
                v-bind:style="{
                    backgroundImage: 'url(/images/' + image_path + ')',
                }"
            >
                {{ title }}
            </h3>
            <p class="mt-4">
                {{ content }}
            </p>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        active: Boolean,
        title: String,
        content: String,
        image_path: String,
        product_id: Number,
        value: Boolean,
    },
};

const card = function (value) {
    value ? console.log("hi") : "";
};
</script>

<style>
.transitionObserv {
    background-color: red;
}
.filter {
    filter: brightness(70%);
    -ms-filter: brightness(70%);
    -webkit-filter: brightness(70%);
    -moz-filter: brightness(70%);
    -o-filter: brightness(70%);
    transition: all 0.3s;
}
</style>
