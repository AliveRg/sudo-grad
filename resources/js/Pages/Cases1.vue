<script setup>
import { ref } from "vue";
import Cases from "@/Pages/Cases.vue";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
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
    <Cases>
        <p class="text-1">test</p>
    </Cases>
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
        products: Object,
        cases: Object,
    },
    name: "Cases1",
};
</script>
