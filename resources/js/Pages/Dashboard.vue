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
            <h1 class="">Наши Услуги</h1>
        </template>

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
            <div
                class="max-w-9xl mx-auto mb-10 md:mb-16 lg:mb-32 sm:px-6 lg:px-8 mt-10 grid grid-rows-5 md:grid-cols-4 gap-2 md:gap-6"
            >
                <div
                    class="p-3 py-5 pb-0 md:col-span-4 font-bold text-2xl md:text-4xl text-currentBroun tracking-widest"
                >
                    <p>
                        На сайте вы можете заказать услуги адвоката
                        <span class="text-currentCian"
                            >Городовой Елены Николаевны</span
                        >
                        и получить
                        <span class="text-currentCian"
                            >квалифицированную юридическую помощь</span
                        >.
                    </p>
                </div>

                <div
                    class="overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-currentBroun md:row-span-2 md:col-span-2 grid grid-row-1 c justify-items-center gap-8 p-3 py-0"
                >
                    <div
                        class="text-sm sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 font-mono text-justify flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"
                    >
                        <p class="h-full">
                            Все услуги адвоката можно получить как физическим,
                            так и юридическим лицам. При этом адвокат
                            гарантирует вам добросовестный подход к решению
                            поставленных клиентом задач, оказание
                            квалифицированной юридической помощи всем
                            обратившимся клиентам.
                            <br />
                            <br />
                            <span class="text-currentBroun text-3xl"
                                >Адвокатские запросы </span
                            ><br />
                            Представляя ваши интересы, адвокат подготовит и
                            направит адвокатские запросы, получит интересующую
                            вас информацию. А в случае неполучения ответа,
                            обжалует эту ситуацию в прокуратуру и получит
                            официальный ответ.
                        </p>
                    </div>
                </div>
                <div
                    style="background-image: url('./images/Stickers_Sale.webp')"
                    class="p-3 py-0 md:order-3 w-full md:row-span-2 md:col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
                ></div>
                <div
                    style="
                        background-image: url('./images/Athena_Stickers-2.webp');
                    "
                    class="p-3 py-0 order-4 md:order-3 w-full col-span-1 md:row-span-2 md:col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
                ></div>
                <div
                    class="order-5 md:order-4 shadow-sm sm:rounded-lg border-l-2 border-currentBroun md:row-span-3 md:col-span-2 grid grid-row-1 justify-items-center p-1"
                >
                    <div
                        class="text-sm sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 font-mono text-justify flex items-center pl-3 sm:pl-5 md:pl-8 lg:pr-10 md:leading-7 lg:leading-10"
                    >
                        <p>
                            <span class="text-currentBroun text-3xl text-left"
                                >Договор обслуживания </span
                            ><br />
                            Также вы можете заключить с адвокатом договор
                            абонентского обслуживания. Наличие данного договора
                            100% гарантирует вам получение квалифицированной
                            юридической услуги адвоката в нужный момент. В том
                            числе, например, вы будете уверены в наличие своего
                            адвоката в случае задержания по уголовному делу. И
                            таким образом, будет в полной мере реализовано ваше
                            право на защиту на всех стадиях производства по
                            уголовному делу.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
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
                if (window.scrollY > 300) {
                    element.classList.add("card_product");
                }
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.handleSCroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleSCroll);
    },

    computed: {},
};
</script>

<style>
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
