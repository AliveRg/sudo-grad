<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <template #header>
            <h1 class="">Наши Услуги</h1>
        </template>
    </AuthenticatedLayout>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style></style>
