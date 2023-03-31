<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-center items-center">
                <h1
                    class="font-semibold text-2xl lg:text-4xl text-gray-800 dark:text-gray-50 leading-tight"
                >
                    Уголовные дела
                </h1>
            </div>
        </template>
        <div class="h-auto">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8 my-16 flex gap-20">
                <div
                    class="w-full flex flex-col justify-center gap-6 p-6 md:p-8 rounded-lg shadow-md"
                >
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-10"
                    >
                        <div
                            class="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 transCase bg-[url('./images/ugolovka.jpeg')] flex items-center bg-cover bg-center bg-no-repeat shadow shadow-slate-800 text-center rounded-lg text-xs md:text-base lg:text-xl text-slate-800 dark:text-slate-200"
                        >
                            <p
                                class="h-1/2 flex items-center p-2 backdrop-blur-sm dark:bg-black/40 bg-white/40"
                            >
                                Специализация адвоката в по уголовным делам:
                            </p>
                        </div>
                        <div class="unvisibText w-2/3 p-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Earum cupiditate rerum sit
                                repudiandae sed ipsa quae ducimus dolore officia
                                laboriosam et soluta maiores voluptates ad hic,
                                iusto error laborum quis.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-10"
                    >
                        <div
                            class="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 transCase transf bg-[url('./images/ugolovka.jpeg')] flex items-center bg-cover bg-center bg-no-repeat shadow shadow-slate-800 text-center rounded-lg text-xs md:text-base lg:text-xl text-slate-800 dark:text-slate-200"
                        >
                            <p
                                class="h-1/2 flex items-center p-2 backdrop-blur-sm dark:bg-black/40 bg-white/40"
                            >
                                В чем может потребоваться помощь:
                            </p>
                        </div>
                        <div class="unvisibText w-2/3 p-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Earum cupiditate rerum sit
                                repudiandae sed ipsa quae ducimus dolore officia
                                laboriosam et soluta maiores voluptates ad hic,
                                iusto error laborum quis.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-10"
                    >
                        <div
                            class="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 transCase transf2 bg-[url('./images/ugolovka.jpeg')] flex items-center bg-cover bg-center bg-no-repeat shadow shadow-slate-800 text-center rounded-lg text-xs md:text-base lg:text-xl text-slate-800 dark:text-slate-200"
                        >
                            <p
                                class="h-1/2 flex items-center p-2 backdrop-blur-sm dark:bg-black/40 bg-white/40"
                            >
                                Профессиональная помощь адвоката по уголовным
                                делам:
                            </p>
                        </div>
                        <div class="unvisibText w-2/3 p-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Earum cupiditate rerum sit
                                repudiandae sed ipsa quae ducimus dolore officia
                                laboriosam et soluta maiores voluptates ad hic,
                                iusto error laborum quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-12">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 dark:text-gray-400 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"
                    >
                        <section
                            v-for="(product, index) in products"
                            :key="product.id"
                            :style="
                                'transition-duration:' +
                                ' ' +
                                '1' +
                                index +
                                '0' +
                                '0' +
                                'ms'
                            "
                            :class="'addClass'"
                            @scroll="handleSCroll"
                        >
                            <CardProduct
                                :title="product.title"
                                :content="product.content"
                                :image_path="product.image_path"
                                :product_id="product.product_id"
                            />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import { Alert } from "bootstrap";
export default {
    data() {
        return {};
    },
    props: {
        products: Object,
    },
    name: "DashBoard",
    components: {
        CardProduct,
        CircleLogo,
        SecondaryButton,
    },

    methods: {
        handleSCroll(event) {
            let card = document.querySelectorAll(".addClass");
            for (let index = 0; index < card.length; index++) {
                const element = card[index];
                if (window.scrollY > 1200) {
                    element.classList.add("card_product");
                }
            }
        },
        // animateScroll(event) {
        //     let animTox = document.querySelectorAll(".transCase");

        //     for (let index = 0; index < animTox.length; index++) {
        //         const element = animTox[index];

        //         if (window.scrollY > window.innerHeight / 2) {
        //             element.classList.remove("transf");
        //             element.classList.remove("transf2");
        //             element.classList.add("trans_origin");

        //             setTimeout(() => {
        //                 this.animText();
        //             }, 1000);
        //         }
        //     }
        // },

        // animText() {
        //     let visibled = document.querySelectorAll(".unvisibText");
        //     for (let index = 0; index < visibled.length; index++) {
        //         const element = visibled[index];

        //         element.classList.add("visibText");
        //     }
        // },
    },
    created() {
        window.addEventListener("scroll", this.handleSCroll);
        window.addEventListener("scroll", this.animateScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleSCroll);
        window.removeEventListener("scroll", this.animateScroll);
    },

    computed: {},
};
</script>

<style>
/* .transf {
    transform: translate(540px, -235px);
}

.transf2 {
    transform: translate(1050px, -477px);
}

.trans_origin {
    transition: 1.5s all ease-in-out;
    transform: translateY(0);
}

.unvisibText {
    transition: 1s all ease-in-out;
    opacity: 0;
    transform: translateX(-50px);
}
.visibText {
    opacity: 1;
    transform: translateX(0);
} */

.addClass {
    opacity: 0;
    transition: all ease-in;
    transform: translateY(30%);
}

.card_product {
    opacity: 1;
    transform: translateY(0);
}
</style>
