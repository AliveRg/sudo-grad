<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import TextAdress from "@/Components/TextAdress.vue";
import { Head } from "@inertiajs/vue3";
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
        <template #header>
            <h1>Заказать консультацию</h1>
        </template>

        <div class="py-12">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="shadow-sm sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 dark:text-gray-100 flex gap-14 flex-col h-min"
                    >
                        <div
                            id="map"
                            class="map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"
                        ></div>
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

                            <form
                                class="w-full flex flex-col md:w-1/2"
                                ref="form"
                                @submit.prevent="sendEmail"
                            >
                                <label
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    for="name"
                                    >Имя:</label
                                >
                                <input
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Иванов Иван"
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                                <label
                                    for="email"
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    >Email:</label
                                >

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    placeholder="you@example.com"
                                    size="30"
                                    required
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />

                                <label for="message"
                                    >Расскажите подробнее:</label
                                >
                                <textarea
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    name="message"
                                ></textarea>
                                <label
                                    for="subject"
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    >Телефон:</label
                                >
                                <input
                                    name="subject"
                                    maxlength="20"
                                    placeholder="+7(___)___-__-__"
                                    type="tel"
                                    required
                                    id="subject"
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />
                                <label for="date">Укажите дату:</label>
                                <input
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    name="date"
                                    type="date"
                                    value="2023-07-22"
                                />
                                <input
                                    class="px-5 py-3 w-1/2 mx-auto mt-3 bg-currentCian text-slate-800 dark:text-white dark:bg-currentDark rounded-xl"
                                    type="submit"
                                    value="Отправить"
                                />
                            </form>
                        </div>
                    </div>

                    <div
                        class="p-6 relative text-gray-900 dark:text-gray-100 flex flex-col gap-14 h-min"
                    >
                        <div
                            id="map_1"
                            class="map w-screen -ml-6 sm:-ml-14 h-80 bg-teal-500 rounded-lg"
                        ></div>
                        <div class="flex flex-col md:flex-row gap-6">
                            <TextAdress
                                class="mt-7"
                                adress="г.Москва, Газетный пер.,9, стр. 2"
                                tel="+7 (916) 444-41-33"
                                tel2="31-25-05"
                                mail="info@gorodova-advokat.ru"
                            />
                            <form
                                class="w-full flex flex-col md:w-1/2"
                                ref="form1"
                                @submit.prevent="sendEmail"
                            >
                                <label
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    for="name"
                                    >Имя:</label
                                >
                                <input
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Иванов Иван"
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                                <label
                                    for="email"
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    >Email:</label
                                >

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    placeholder="you@example.com"
                                    size="30"
                                    required
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />

                                <label for="message"
                                    >Расскажите подробнее:</label
                                >
                                <textarea
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    name="message"
                                ></textarea>
                                <label
                                    for="subject"
                                    class="after:content-['*'] after:ml-0.5 after:text-red-500"
                                    >Телефон:</label
                                >
                                <input
                                    name="subject"
                                    maxlength="20"
                                    placeholder="+7(___)___-__-__"
                                    type="tel"
                                    required
                                    id="subject"
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />
                                <label for="date">Укажите дату:</label>
                                <input
                                    class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    name="date"
                                    type="date"
                                    value="2023-07-22"
                                />
                                <input
                                    class="px-5 py-3 w-1/2 mx-auto mt-3 bg-currentCian text-slate-800 dark:text-white dark:bg-currentDark rounded-xl"
                                    type="submit"
                                    value="Отправить"
                                />
                            </form>
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
