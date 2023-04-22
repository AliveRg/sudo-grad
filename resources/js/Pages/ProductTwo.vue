<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import CartHoverRotate from "@/Components/CartHoverRotate.vue";

import SecondaryButton from "@/Components/SecondaryButton.vue";

import TitleImage from "@/Components/TitleImage.vue";
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <template #header>
            <h1>Наследственные Споры</h1>
        </template>
        <div
            class="max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10 grid grid-rows-3 md:grid-cols-4 gap-2 md:gap-6"
        >
            <div
                class="p-3 py-5 col-span-2 font-bold text-2xl md:text-4xl text-currentBroun tracking-widest"
            >
                <p>
                    Адвокат
                    <span class="text-currentCian">
                        Городова Елена Николаевна </span
                    >занимается наследственными делами и поможет
                    <span class="text-currentCian">
                        вступить или оспорить наследство.
                    </span>
                </p>
            </div>

            <div
                class="overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 border-currentBroun row-span-3 col-span-2 grid grid-row-1 justify-items-center gap-8 p-3 py-5"
            >
                <div
                    class="h-max text-xs sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 text-justify flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"
                >
                    <p>
                        Наследственные споры относятся к категории сложных дел.
                        Вступление в наследство не всегда проходит гладко.
                        Частой бывает ситуация когда наследники не могут прийти
                        к согласию по поводу раздела наследственного имущества.
                        Кто-то может пропустить срок вступления в наследство и
                        лишиться наследственного имущества. Наследника может
                        ожидать неприятный сюрприз в виде завещания на
                        постороннего человека.<br />
                        <br />
                        В данных ситуациях разобраться и помочь может только
                        опытный адвокат с многолетней собственной практикой в
                        судебных делах по наследственным спорам.
                        <br /><br />
                        <span
                            class="font-bold text-2xl md:text-4xl text-currentBroun tracking-widest"
                            >Принципы и методы работы адвоката по наследственным
                            спорам:</span
                        >
                        Наследственные споры относятся к категории сложных дел.
                        Вступление в наследство не всегда проходит гладко.
                        Частой бывает ситуация когда наследники не могут прийти
                        к согласию по поводу раздела наследственного имущества.
                        Кто-то может пропустить срок вступления в наследство и
                        лишиться наследственного имущества. Наследника может
                        ожидать неприятный сюрприз в виде завещания на
                        постороннего человека.<br />
                        <br />
                        В данных ситуациях разобраться и помочь может только
                        опытный адвокат с многолетней собственной практикой в
                        судебных делах по наследственным спорам.
                    </p>
                </div>
            </div>
            <div
                style="background-image: url('/images/lawyer_state.webp')"
                class="p-3 md:order-3 py-5 w-full row-span-2 col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
            ></div>
        </div>

        <div
            style="
                -moz-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none;
                user-select: none;
            "
            class="relative max-w-9xl mx-auto sm:px-6 lg:px-8 mb-8 mt-24 flex gap-10 flex-wrap justify-center sm:justify-betwee"
        >
            <div v-for="card in cards" :key="card" class="w-72">
                <div
                    class="text-black backdrop-blur-md text-sm sm:text-base md:text-lg lg:text-2xl flex items-center justify-center mb-5 h-10"
                >
                    {{ card.title }}
                </div>
                <CartHoverRotate
                    class="mx-auto"
                    :textFront="card.title"
                    :textBack="card.content"
                    :img__path="card.img"
                />
            </div>

            <!-- <div class="w-[150%] h-[23rem] md:h-[25rem] lg:h-[50rem] my-5">
                <div class="cube-wrap flex">
                    <div class="cube absolute -right-80 flex gap-16 py-5 px-16">
                        <div
                                class="fixed text-md lg:text-2xl -top-12 lg:-top-16 text-white tracking-widest font-sans"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam recusandae odit
                                accusantium vitae, aliquid sit totam unde
                                tempora saepe praesentium. Lorem ipsum dolor sit
                                amet consectetur, adipisicing elit. Quasi saepe
                                inventor.
                            </div> 
                        <div
                            v-for="card in cards"
                            :key="card"
                            class="front w-44 h-56 lg:w-80 lg:h-96 hover:scale-125 duration-150 shadow-xl rounded-lg flex flex-row-reverse items-center justify-center rotate-y-4"
                            @click.stop="modulCard($event)"
                        >
                            <CartHoverRotate
                                textFront="Сопровождение"
                                textBack="Сопровождение при допросе клиента в качестве свидетеля по уголовному делу."
                            />
                        </div>
                        <div
                                class="fixed text-md lg:text-2xl -bottom-14 lg:-bottom-16 text-white tracking-widest font-sans"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam recusandae odit
                                accusantium vitae, aliquid sit totam unde
                                tempora saepe praesentium. Lorem ipsum dolor sit
                                amet consectetur, adipisicing elit. Quasi saepe
                                inventor.
                            </div>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10">
            <div
                class="overflow-hidden shadow-sm sm:rounded-lg flex flex-col gap-20 p-10"
            >
                <TitleImage />
                <TitleImage />
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
export default {
    data() {
        return {
            cards: [
                {
                    title: "Правовая помощь",
                    img: "state_2",
                    content:
                        "Правовая помощь в международных наследственных делах.",
                },
                {
                    title: "Признания завещания",
                    img: "state_11",
                    content: "Признание завещания недействительным. ",
                },
                {
                    title: "Признание права собственности",
                    img: "state_10",
                    content:
                        "Признание права собственности  в порядке наследования.",
                },
                {
                    title: "Восстановление срока принятия наследства",
                    img: "state_7",
                    content: "Восстановление срока для принятия наследства.",
                },
            ],
        };
    },
    props: {
        products: Object,
    },

    components: {
        CardProduct,
        CircleLogo,
        SecondaryButton,

        TitleImage,
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
        modulCard: function (event) {
            event.target.classList.toggle("hideCard");
            console.log(event.target);
            // some code to filter users
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
