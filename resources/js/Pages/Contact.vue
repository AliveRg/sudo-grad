<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head title="Контакты адвоката в Белгороде" />

    <AuthenticatedLayout>
        <template #header>
            <div class="h-full flex justify-center items-center">
                <h1
                    class="font-semibold text-2xl lg:text-4xl text-gray-800 dark:text-gray-50 leading-tight"
                >
                    Контакты
                </h1>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-9xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 dark:text-gray-100 flex flex-col gap-6 md:flex-row h-min"
                    >
                        <div
                            id="map"
                            class="map w-full h-92 bg-amber-500 rounded-lg"
                        ></div>
                        <form
                            class="w-full flex flex-col md:w-1/2"
                            ref="form"
                            @submit.prevent="sendEmail"
                        >
                            <label for="name">Имя:</label>
                            <input
                                class="mt-1 px-3 py-2 dark:bg-gray-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Иванов Иван"
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

                            <label for="message">Расскажите подробнее:</label>
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
                                pattern="\\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
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
                                class="px-5 py-3 w-1/2 mx-auto mt-3 bg-amber-500 text-slate-800 dark:text-white dark:bg-amber-700 rounded-xl"
                                type="submit"
                                value="Отправить"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
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
                        const contactForm = document.querySelector("form");
                        contactForm.reset();
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
