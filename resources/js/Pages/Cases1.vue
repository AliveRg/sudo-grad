<script setup>
import { ref } from "vue";
import Cases from "@/Pages/Cases.vue";
import { Head } from "@inertiajs/vue3";
import HistoryButton from "@/Components/HistoryButton.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
</script>

<template>
    <Cases>
        <HistoryButton :href="'/cases'">
            <CircleLogo color="black" text="exit- cases- exit-cases-"
        /></HistoryButton>
        <p class="text-1">aaaaaaaaaa</p>
    </Cases>
</template>

<script>
export default {
    components: {
        HistoryButton,
        CircleLogo,
    },
    props: {
        products: Array,
        cases: Array,
    },

    name: "Cases1",
};
</script>
