<script setup>
import { ref } from "vue";
import Cases from "@/Pages/Cases.vue";
import { Head } from "@inertiajs/vue3";
import HistoryButton from "@/Components/HistoryButton.vue";

import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
</script>

<template>
    <Cases>
        <HistoryButton :href="'/cases'"> test</HistoryButton>
        <p class="text-1">test</p>
    </Cases>
</template>

<script>
export default {
    components: {
        HistoryButton,
    },
    props: {
        products: Array,
        cases: Array,
    },

    name: "Cases1",
};
</script>
