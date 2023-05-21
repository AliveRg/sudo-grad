<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import CartHoverRotate from "@/Components/CartHoverRotate.vue";

import SecondaryButton from "@/Components/SecondaryButton.vue";

import TitleImage from "@/Components/TitleImage.vue";
import TextAdress from "@/Components/TextAdress.vue";
import FormContact from "@/Components/FormContact.vue";

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
function init() {
    let center = [50.611073431601994, 36.59083218508088];
    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: center,
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
    });
    let placemark = new ymaps.Placemark(
        center,
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "/images/marker_map.webp",
            iconImageSize: [40, 40],
            iconImageOffset: [-19, -44],
        }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}
ymaps.ready(init);
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <template #header>
            <h1>Семейные споры</h1>
        </template>
        <div
            class="max-w-9xl mx-auto sm:px-6 lg:px-8 mt-10 grid grid-rows-3 md:grid-cols-4 gap-2 md:gap-6"
        >
            <div
                class="p-3 py-5 col-span-2 font-bold text-2xl md:text-4xl text-currentBroun"
            >
                <p>
                    <span class="text-currentCian">
                        Городова Елена Николаевна </span
                    >поможет урегулировать семейный спор
                    <span class="text-currentCian"> любой сложности.</span>
                </p>
            </div>

            <div
                class="overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 border-currentBroun row-span-3 col-span-2 grid grid-row-1 justify-items-center gap-8 p-3 py-5"
            >
                <div
                    class="h-max text-xs sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 text-justify flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"
                >
                    <p>
                        Во время развода люди сталкиваются с

                        <span class="text-currentCian">
                            множеством проблем:
                        </span>
                        раздел имущества, выплата алиментов и дальнейшее
                        проживание детей с одним из родителей, вопрос о
                        родительских правах. Со всеми этими вопросами может
                        справиться лишь специалист по семейным спорам. Адвокат
                        по семейным делам переведет конфликт в юридическую
                        плоскость, окажет необходимую юридическую поддержку и
                        урегулирует возникший конфликт. Если вам кажется, что с
                        разногласиями справиться просто, есть смысл обратиться к
                        адвокату. <br />
                        <br />
                        <br />
                        <span
                            class="font-bold text-2xl md:text-4xl text-currentBroun"
                        >
                            Даже раздел совместно нажитого имущества может
                            принести множество неприятных сюрпризов.</span
                        >
                        <br />
                        <br />
                        Уже на ранних стадиях бракоразводного процесса адвокат
                        по семейным делам поможет уладить возможные конфликты к
                        обоюдной выгоде и с минимальными потерями. <br /><br />
                    </p>
                </div>
            </div>
            <div
                style="background-image: url('/images/sticker-books.webp')"
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
                                class="fixed text-md lg:text-2xl -top-12 lg:-top-16 text-white  font-sans"
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
                                class="fixed text-md lg:text-2xl -bottom-14 lg:-bottom-16 text-white  font-sans"
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
                <div
                    class="p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"
                >
                    <iframe
                        id="map"
                        src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522"
                        class="map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"
                    ></iframe>
                    <div class="flex flex-col md:flex-row justify-center gap-6">
                        <TextAdress
                            class="mt-7"
                            adress="улица Маяковского, 26, Белгород"
                            tel="+7-980-326-97-94"
                            tel2="31-25-05"
                            mail="gorodova.work49280@gmail.com"
                        />

                        <FormContact />
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
export default {
    data() {
        return {
            cards: [
                {
                    title: "Архитектурная",
                    img: "state_17",
                    content:
                        "Проектная и архитектурная деятельность. Проведение переговоров с контрагентом с целью досудебного урегулирования спора.",
                },
                {
                    title: "Строительная отрасль",
                    img: "state_10",
                    content:
                        "Сбор доказательной базы всеми доступными правовыми методами , в том числе с помощью адвокатских запросов.",
                },
                {
                    title: "Торговля и договоры поставки",
                    img: "state_19",
                    content:
                        "Личное представительство клиента на всех стадиях судебного процесса.",
                },
                {
                    title: "Транспортные услуги",
                    img: "state_14",
                    content:
                        "Личное представительство клиента на всех стадиях судебного процесса.",
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

        TextAdress,
        TitleImage,
        FormContact,
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
.map {
    filter: brightness(70%);
    -ms-filter: brightness(70%);
    -webkit-filter: brightness(70%);
    -moz-filter: brightness(70%);
    -o-filter: brightness(70%);
    transition: all 0.3s;
}
.map:hover {
    filter: brightness(100%);
    -ms-filter: brightness(100%);
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -o-filter: brightness(100%);
}
</style>
