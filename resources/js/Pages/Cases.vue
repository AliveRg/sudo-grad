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

// modules styles

// import Swiper core and required modules
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
                        <div class="flex flex-wrap">
                            <div
                                v-for="arr in subArrays"
                                :key="arr"
                                class="w-1/4"
                            >
                                <div
                                    v-for="product in arr"
                                    :key="product.title"
                                    class="w-full p-6"
                                >
                                    <CardCases
                                        :src="product.image_path"
                                        :title="product.title"
                                    />
                                    <div
                                        class="w-full flex items-center gap-4 pt-3"
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

export default {
    props: {
        products: Array,
        cases: Array,
    },
    components: {
        Swiper,
        SwiperSlide,
    },

    computed: {
        subArrays() {
            let length = Math.ceil(this.cases.length / 4);

            const result = new Array(length).fill().map((i) => {
                return this.cases.splice(0, length);
            });
            return result;
        },
    },

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

    name: "Cases",
};
</script>
