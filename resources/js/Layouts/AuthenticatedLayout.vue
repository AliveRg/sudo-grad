<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import { Link } from "@inertiajs/vue3";
import TextAdress from "@/Components/TextAdress.vue";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-[40vh]">
            <nav class="bg-white dark:bg-slate-900">
                <!-- Primary Navigation Menu -->
                <header>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex">
                                <!-- Logo -->
                                <div class="shrink-0 flex items-center mr-32">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
                                    />
                                </div>

                                <!-- Navigation Links -->
                                <nav
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <NavLink
                                        :href="route('dashboard')"
                                        :active="route().current('dashboard')"
                                    >
                                        Услуги
                                    </NavLink>

                                    <NavLink
                                        :href="route('contact')"
                                        :active="route().current('contact')"
                                    >
                                        Заказать консультацию
                                    </NavLink>
                                </nav>
                            </div>

                            <!-- Hamburger -->
                            <div class="-mr-2 flex items-center sm:hidden">
                                <button
                                    @click="
                                        showingNavigationDropdown =
                                            !showingNavigationDropdown
                                    "
                                    class="inline-flex items-center justify-center p-2 rounded-sm text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        class="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            :class="{
                                                hidden: showingNavigationDropdown,
                                                'inline-flex':
                                                    !showingNavigationDropdown,
                                            }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            :class="{
                                                hidden: !showingNavigationDropdown,
                                                'inline-flex':
                                                    showingNavigationDropdown,
                                            }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- Responsive Navigation Menu -->
                <div
                    :class="{
                        block: showingNavigationDropdown,
                        hidden: !showingNavigationDropdown,
                    }"
                    class="sm:hidden"
                >
                    <nav class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                        >
                            Услуги
                        </ResponsiveNavLink>
                        <!-- <ResponsiveNavLink
                            :href="route('about')"
                            :active="route().current('about')"
                        >
                            О Нас
                        </ResponsiveNavLink> -->
                        <ResponsiveNavLink
                            :href="route('contact')"
                            :active="route().current('contact')"
                        >
                            Заказать консультацию
                        </ResponsiveNavLink>
                    </nav>
                </div>
            </nav>

            <!-- Page Content -->
            <main>
                <div class="dark:bg-slate-900">
                    <slot />
                </div>
            </main>
            <footer>
                <div
                    class="relative py-28 flex items-center justify-center h-min bg-cover md:bg-fixed bg-center bg-[url('/images/under_main-paralax.jpg')] dark:bg-[url('/images/under_main-paralax.jpg')]"
                >
                    <div
                        class="relative h-full p-6 grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2 bg-white/60 dark:bg-black/60 rounded-lg"
                    >
                        <div
                            class="absolute z-0 top-0 left-[85%] md:left-[90%] xl:left-[100%] -translate-x-1/2 -translate-y-1/2 text-slate-900 font-bold"
                        >
                            <CircleLogo
                                color=""
                                text="SD-Gorodova-Advokate-GD-"
                            />
                        </div>
                        <div
                            class="h-full w-full text-zinc-700 dark:text-slate-100 text-sm sm:text-lg lg:text-2xl font-semibold"
                        >
                            <p class="w-full h-1/2">
                                С @ Адвокатская контора <br />
                                "Белгород"
                            </p>
                            <iframe
                                src="https://yandex.ru/sprav/widget/rating-badge/152442756522?type=rating"
                                width="150"
                                height="50"
                                frameborder="0"
                            ></iframe>
                        </div>

                        <TextAdress
                            adress="улица Маяковского, 26, Белгород"
                            tel="+7-980-326-97-94"
                            tel2="31-25-05"
                            mail="gorodova.work49280@gmail.com"
                        />
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
const heightScreen = window.screen.height;

export default {
    components: {
        TextAdress,
    },
};
</script>

<style>
.family {
    font-family: "Golos Text", sans-serif;
    font-weight: 400;
}
</style>
