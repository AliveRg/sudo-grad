<script setup>
import { ref } from "vue";
import NavLink from "@/Components/NavLink.vue";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Head } from "@inertiajs/vue3";
import { Swiper, SwiperSlide } from "swiper/vue";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
</script>

<template>
    <Head title="AboutUs" />

    <AuthenticatedLayout>
        <template #header>
            <div>
                <swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :slidesPerGroup="1"
                    :loop="true"
                    :loopFillGroupWithBlank="true"
                    :navigation="true"
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

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div
                        v-if="router.query('/cases')"
                        class="p-6 text-gray-900 dark:text-gray-100"
                    >
                        testx
                    </div>
                    <div v-else class="p-6 text-gray-900 dark:text-gray-100">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
SwiperCore.use([Pagination, Navigation]);

export default {
    components: {
        Swiper,
        SwiperSlide,
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },

    props: {
        products: Array,
        cases: Array,
    },
    name: "Cases",
};
</script>
