<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps(["href"]);
</script>

<template>
    <Link
        :href="href"
        class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 hover:scale-110 animate-pulse transition duration-150 ease-in-out"
    >
        <slot />
    </Link>
</template>
