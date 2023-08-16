<script setup></script>

<template>
    <form
        class="w-full flex flex-col md:w-1/2 gap-3"
        ref="form"
        @submit.prevent="sendMail"
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
        <div class="w-full flex justify-between items-center flex-wrap">
            <button @click="success" class="button w-fit">
                <input
                    class="px-5 py-3 bg-[#9C9C1A] text-slate-800 dark:text-white dark:bg-[#9C9C1A] rounded-xl"
                    type="submit"
                    value="Отправить"
                />
            </button>
            <div class="flex items-center h-full min-w-fit">
                <a
                    :href="route('privacy')"
                    class="underline text-sky-600 cursor-pointer"
                >
                    Политика конфиденциальности
                </a>
            </div>
        </div>
    </form>
</template>

<script>
import emailjs from "emailjs-com";
import { ref } from "vue";

document.addEventListener("submit", (e) => {
    // Отключаем событие по умолчанию

    // Очищаем поля формы
    e.target.reset();
});

export default {
    setup() {
        const form = ref(null);
        const inputFieldReset = ref(null);

        const sendMail = () => {
            emailjs
                .sendForm(
                    "service_mw6ouzg",
                    "template_q6vr08j",
                    form.value,
                    "HApXh8Y7mK6mSQcK3"
                )
                .then(
                    (result) => {
                        const contactForm = document.querySelectorAll("form");
                        console.log("SUCCESS!", result.text);
                        const contactForm1 = document.querySelectorAll("form1");
                        console.log("SUCCESS!", result.text);
                        alert("Success!");
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                        alert("FAILED!");
                    }
                );
        };
        return {
            form,
            inputFieldReset,
            sendMail,
        };
    },
};
</script>
