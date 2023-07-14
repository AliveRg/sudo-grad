<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextAdress from "@/Components/TextAdress.vue";
import { Head } from "@inertiajs/vue3";
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

    let centermap_1 = [55.758084325129424, 37.6090622602577];
    var map = new ymaps.Map("map_1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: centermap_1,
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
    });
    let placemark_1 = new ymaps.Placemark(
        centermap_1,
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

    map.geoObjects.add(placemark_1);
}
ymaps.ready(init);
</script>

<template>
    <Head title="Контакты адвоката в Белгороде" />

    <AuthenticatedLayout>
        <!-- <template #header>
            <h1>Заказать консультацию</h1>
        </template> -->

        <div class="py-12">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="shadow-sm sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"
                    >
                        <iframe
                            id="map"
                            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=152442756522"
                            class="map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"
                        ></iframe>
                        <div
                            class="flex flex-col md:flex-row justify-center gap-6"
                        >
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

                    <div
                        class="p-6 relative text-gray-900 dark:text-gray-100 flex flex-col gap-14 h-min"
                    >
                        <div
                            id="map_1"
                            class="map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"
                        ></div>
                        <div
                            class="flex flex-col md:flex-row justify-center gap-6"
                        >
                            <TextAdress
                                class="mt-7"
                                adress="г.Москва, Газетный пер.,9, стр. 2"
                                tel="+7 (916) 444-41-33"
                                tel2="31-25-05"
                                mail="info@gorodova-advokat.ru"
                            />
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import emailjs from "@emailjs/browser";
document.addEventListener("submit", (e) => {
    // Отключаем событие по умолчанию

    // Очищаем поля формы
    e.target.reset();
});

export default {
    components: {
        TextAdress,
        FormContact,
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm(
                    "service_8r2js99",
                    "template_q6vr08j",
                    this.$refs.form,
                    "HApXh8Y7mK6mSQcK3"
                )
                .then(
                    (result) => {
                        const contactForm = document.querySelectorAll("form");

                        console.log("SUCCESS!", result.text);
                        const contactForm1 = document.querySelectorAll("form1");

                        console.log("SUCCESS!", result.text);
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        },
    },
};
</script>
<style>
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
