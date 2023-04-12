<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import HistoryButton from "@/Components/HistoryButton.vue";
import { Link } from "@inertiajs/vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextAdress from "@/Components/TextAdress.vue";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav
                class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
            >
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('welcome')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
                                    />
                                </Link>
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
                                    :href="route('about')"
                                    :active="route().current('about')"
                                >
                                    О Нас
                                </NavLink>
                                <NavLink
                                    :href="route('contact')"
                                    :active="route().current('contact')"
                                >
                                    Заказать консультацию
                                </NavLink>
                                <NavLink
                                    :href="route('cases')"
                                    :active="route().current('cases')"
                                >
                                    Кейсы
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
                        <ResponsiveNavLink
                            :href="route('about')"
                            :active="route().current('about')"
                        >
                            О Нас
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            :href="route('contact')"
                            :active="route().current('contact')"
                        >
                            Заказать консультацию
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            :href="route('cases')"
                            :active="route().current('cases')"
                        >
                            Кейсы
                        </ResponsiveNavLink>
                    </nav>
                </div>
            </nav>

            <!-- Page Heading -->
            <header
                class="bg-white dark:bg-gray-800 shadow family"
                v-if="$slots.header"
            >
                <section class="relative overflow-hidden">
                    <div class="flex">
                        <div
                            class="w-full"
                            :style="'height:' + windowHeight / 1.1 + 'px'"
                        ></div>
                        <div
                            class="mirror hidden md:block mirror-0 z-20 overflow-hidden"
                        >
                            <div
                                class="w-screen bg-[url('./images/title-page.jpeg')] dark:bg-[url('./images/title-page-dark.jpeg')] bg-cover md:bg-120% bg-fixed bg-center bg-no-repeat"
                                :style="'height:' + windowHeight / 1.1 + 'px'"
                            ></div>
                        </div>
                        <div
                            class="mirror hidden md:block mirror-1 w-full z-20 overflow-hidden"
                        >
                            <div
                                class="w-screen bg-[url('./images/title-page.jpeg')] dark:bg-[url('./images/title-page-dark.jpeg')] bg-cover md:bg-120% bg-fixed bg-center bg-no-repeat"
                                :style="'height:' + windowHeight / 1.1 + 'px'"
                            ></div>
                        </div>

                        <div
                            class="absolute w-full mx-auto bg-[url('./images/title-page.jpeg')] dark:bg-[url('./images/title-page-dark.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat"
                            :style="'height:' + windowHeight / 1.1 + 'px'"
                        ></div>
                    </div>

                    <div
                        class="absolute flex justify-center items-center gap-2 sm:gap-8 position-center z-10 py-6 w-full bg-slate-200 dark:bg-slate-900/50 bg-opacity-50 backdrop-blur-sm"
                    >
                        <div
                            class="flex justify-center items-center font-semibold text-2xl lg:text-4xl text-currentBroun dark:text-currentCian leading-tight text-center"
                        >
                            <slot name="header" />
                        </div>
                        <div
                            class="animate-bounce w-10 h-10 md:w-10 md:h-10 mr-3 bg-slate-300 bg-opacity-40 shadow-md flex items-center justify-center rounded-full"
                            onselectstart="return false"
                            onmousedown="return false"
                            @click="scrollTop"
                        >
                            <span
                                class="material-symbols-outlined text-currentBroun dark:text-currentCian"
                            >
                                south
                            </span>
                        </div>
                    </div>
                </section>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <footer>
                <div
                    class="mt-6 sm:mt-12 py-28 flex items-center justify-center h-min bg-fixed bg-center bg-cover custom-img"
                >
                    <div
                        class="h-full w-full p-6 grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2"
                    >
                        <div class="m-2 flex columns-2 gap-10">
                            <div class="">
                                <CircleLogo
                                    color="white"
                                    text="SD-Gorodova-Advokate-GD-"
                                />
                            </div>
                            <div
                                class="text-zinc-600 dark:text-slate-100 text-sm sm:text-lg lg:text-2xl font-semibold bg-white/80 dark:bg-black/80 w-32 sm:w-full p-2 rounded-lg"
                            >
                                <p class="w-full h-full">
                                    С @ Адвокатская контора <br />
                                    "Белгород"
                                </p>
                            </div>
                        </div>

                        <TextAdress />
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
    data() {
        return {
            windowHeight: window.innerHeight,
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowHeight = window.innerHeight;
        };
    },
    methods: {
        scrollTop() {
            let scrTop =
                document.documentElement.clientHeight - window.pageYOffset;
            window.scrollTo({ top: scrTop, behavior: "smooth" });
        },
    },
};
</script>

<style>
.family {
    font-family: "Golos Text", sans-serif;
    font-weight: 400;
}

.mirror {
    position: absolute;
}

.mirror-0 {
    clip-path: polygon(100% 0, 77% 0, 100% 100%, 50% 100%);
    top: 0;
    left: -65vw;
}
.mirror-1 {
    clip-path: polygon(25% 0%, 100% 0%, 150% 150%, 0% 150%);
    left: 80%;
}

.custom-img {
    background-image: url(./images/under_main-paralax.jpg);
}
.position-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
