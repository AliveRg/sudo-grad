<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import CartHoverRotate from "@/Components/CartHoverRotate.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

import useBreakpoints from "vue-next-breakpoints";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { FreeMode, Scrollbar, Navigation, Autoplay } from "swiper";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/scrollbar";

// swiper core styles
import "swiper/swiper.min.css";
import TitleImage from "@/Components/TitleImage.vue";
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <template #header>
            <h1>Уголовные дела</h1>
        </template>
        <div
            class="max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10 grid grid-rows-3 md:grid-cols-4 gap-2 md:gap-6"
        >
            <div
                class="p-3 py-5 col-span-2 font-bold text-2xl md:text-4xl text-currentBroun tracking-widest"
            >
                <p>
                    <span class="text-currentCian"
                        >Квалифицированная помощь</span
                    >
                    на любой стадии уголовного дела
                </p>
            </div>

            <div
                class="overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 border-currentBroun row-span-3 col-span-2 grid grid-row-1 justify-items-center gap-8 p-3 py-5"
            >
                <div
                    class="h-max text-xs sm:text-base md:text-lg lg:text-2xl text-justify dark:text-slate-200 flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"
                >
                    <p>
                        Неожиданное задержание, вызов на допрос в
                        правоохранительные органы, обыск в жилище или офисе
                        компании, повестка в суд- всегда сильный стресс не
                        только для того, с кем это событие произошло , но и для
                        близких людей. <br />
                        <br />
                        В этой непростой ситуации противостоять
                        правоохранительным органам в одиночку практически
                        невозможно. Опыт и каждодневная практика адвоката по
                        уголовным делам может оказаться решающим фактором для
                        преодоления сложных периодов жизни. <br /><br />
                        Участие защитника возможно на любой стадии уголовного
                        процесса, вам нужно только позвонить адвокату и мы
                        вместе найдем законный выход из сложившейся ситуации.
                    </p>
                </div>
            </div>
            <div
                style="background-image: url('./images/Apollo_Sticker.webp')"
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
            class="relative max-w-9xl mx-auto sm:px-6 lg:px-8 mb-8 mt-24 flex gap-20 overflow-hidden"
        >
            <swiper
                :breakpoints="{
                    200: { slidesPerView: 1 },
                    400: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                }"
                :spaceBetween="20"
                :slidesPerGroup="1"
                :autoplay="{
                    delay: 5500,
                    disableOnInteraction: false,
                }"
                :loop="true"
                :loopFillGroupWithBlank="true"
                :navigation="false"
                :freeMode="true"
                :scrollbar="{
                    hide: true,
                }"
                :modules="modules"
            >
                <swiper-slide v-for="card in cards" :key="card" class="p-10">
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
                </swiper-slide>
            </swiper>

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
SwiperCore.use([Scrollbar, Navigation, Autoplay, FreeMode]);
export default {
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
            modules: [Autoplay, Navigation, Scrollbar, A11y, FreeMode],
        };
    },
    data() {
        return {
            cards: [
                {
                    title: "Защита",
                    img: "state_1",
                    content:
                        "Защита обвиняемого (подозреваемого) на стадии предварительного расследования.",
                },
                {
                    title: "Задержание",
                    img: "state_2",
                    content: "Юридическая помощь при задержании гражданина.",
                },
                {
                    title: "Изменение меры",
                    img: "state_3",
                    content: "Отмена или изменение меры пресечения",
                },
                {
                    title: "Первая инстанция",
                    img: "state_4",
                    content:
                        "Защита подсудимого в суде первой апелляционной и кассационной инстанции.",
                },
                {
                    title: "Посещение",
                    img: "state_5",
                    content:
                        "Посещение обвиняемого , подсудимого в следственном изоляторе.",
                },
                {
                    title: "Защита несовершеннолетнего",
                    img: "state_6",
                    content:
                        "Защита прав и интересов несовершеннолетнего в уголовном процессе.",
                },
                {
                    title: "Примирительные",
                    img: "state_7",
                    content: "Примирительные процедуры в уголовном процессе.",
                },
                {
                    title: "Свидетели",
                    img: "state_8",
                    content:
                        "Представление интересов свидетелей в рамках дознания и предварительного расследования.",
                },
                {
                    title: "Представление потерпевшего",
                    img: "state_9",
                    content:
                        "Yа стадии проверки уголовного дела, на стадии расследования и в процессе судебного разбирательства.",
                },
                {
                    title: "Условно-досрочное",
                    img: "state_10",
                    content:
                        "Оказание помощи осужденному в условно-досрочном освобождении и замена наказания более мягким видом и изменение вида исправительного учреждения.",
                },
                {
                    title: "Освобождение от наказания",
                    img: "state_11",
                    content:
                        "Оказание помощи в освобождении от наказания в связи с болезнью обвиняемого или осужденного.",
                },
            ],
        };
    },
    props: {
        products: Object,
    },
    name: "DashBoard",
    components: {
        CardProduct,
        CircleLogo,
        SecondaryButton,
        Swiper,
        SwiperSlide,
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
.cube {
    transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateZ(0deg)
        translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg);
    animation: transslide 35s infinite linear;
}

.hideCard {
    animation-play-state: paused;
    /* opacity: 0; */
}

@media (min-width: 1024px) {
    @keyframes transslide {
        0% {
            transform: translateX(-900px) rotateY(-15deg);
        }
        100% {
            transform: translateX(1350px) rotateY(-15deg);
        }
    }
}
@keyframes transslide {
    0% {
        transform: translateX(-600px) rotateY(-15deg);
    }
    100% {
        transform: translateX(1850px) rotateY(-15deg);
    }
}

.cube-wrap {
    perspective: 724px;
    perspective-origin: 50% 50%;
}

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
