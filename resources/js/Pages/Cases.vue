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
    <Head title="AboutUs" />

    <AuthenticatedLayout>
        <template #header>
            <div>
                <swiper
                    :breakpoints="{
                        600: { slidesPerView: 1 },
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
                        class="text-center"
                    >
                        <NavLink
                            :href="'/cases/' + product.product_id"
                            :active="
                                route().current('/cases/' + product.product_id)
                            "
                        >
                            {{ product.title }}
                        </NavLink>
                    </swiper-slide>
                </swiper>
            </div>
        </template>
        <div class="main">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white mt-12 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <div class="">
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
                                                <span class="font-medium">{{
                                                    product.title
                                                }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mx-auto w-1/2 flex justify-evenly items-center mb-6 p-5"
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
    height: 80px;
}
</style>

<script>
SwiperCore.use([Pagination, Navigation, Autoplay]);

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
