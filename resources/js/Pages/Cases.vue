<script setup>
import { ref } from "vue";
import NavLink from "@/Components/NavLink.vue";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import CardCases from "@/Components/CardCases.vue";
import useBreakpoints from "vue-next-breakpoints";

import { Head } from "@inertiajs/vue3";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";
</script>

<template>
    <Head title="Практика" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-center items-center">
                <h1
                    class="font-semibold text-2xl lg:text-4xl text-gray-800 dark:text-gray-50 leading-tight"
                >
                    Наши Дела
                </h1>
            </div>
        </template>
        <div class="main">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <swiper
                            :breakpoints="{
                                700: { slidesPerView: 1 },
                                900: { slidesPerView: 3 },
                            }"
                            :spaceBetween="30"
                            :slidesPerGroup="1"
                            :autoplay="{
                                delay: 4500,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                            :navigation="true"
                            :pagination="{
                                dynamicBullets: true,
                                clickable: true,
                            }"
                            :modules="modules"
                        >
                            <swiper-slide
                                v-for="product in products"
                                :key="product.id"
                                class="text-center p-6"
                            >
                                <NavLink :href="'/cases/' + product.product_id">
                                    <div
                                        class="text-md lg:text-lg text-black dark:text-white hover:border-none"
                                    >
                                        {{ product.title }}
                                    </div>
                                </NavLink>
                            </swiper-slide>
                        </swiper>
                        <div class="border-b-2 border-slate-500">
                            <div
                                class="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
                            >
                                <div
                                    v-for="product in cases"
                                    :key="product.title"
                                    class="break-inside-avoid w-full p-3"
                                >
                                    <div class="bg-slate-200 p-0 rounded-lg">
                                        <CardCases
                                            :src="product.image_path"
                                            :title="product.title"
                                        />
                                        <div
                                            class="w-full flex items-center gap-4 p-3"
                                        >
                                            <div class="">
                                                <div
                                                    class="w-8 h-8 rounded-full bg-black"
                                                ></div>
                                            </div>
                                            <div class="w-full">
                                                <span
                                                    class="font-medium dark:text-black"
                                                    >{{ product.title }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mx-auto w-3/4 flex justify-evenly items-center mb-6 p-5"
                    >
                        <button disabled="disabled">Назад</button>
                        <button disabled="disabled">Вперед</button>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>
.swiper-pagination {
    padding-top: 20px;
}

.swiper-wrapper {
    height: 120px;
}

.swiper-initialized {
    display: flex;
    align-items: center;
}

.swiper-slide {
    display: flex;
    justify-content: center;
}
</style>

<script>
SwiperCore.use([Pagination, Navigation, Autoplay]);
const heightScreen = window.screen.height;

// Register the package

export default {
    name: "Cases",
    props: {
        products: Array,
        cases: Array,
    },

    data() {
        return {
            page: 1,
            windowHeight: window.innerHeight,
        };
    },

    mounted() {
        window.onresize = () => {
            this.windowHeight = window.innerHeight;
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },

    methods: {
        filterPage() {
            return this.subArrays.slice(start, end);
        },
    },

    computed: {},

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>
