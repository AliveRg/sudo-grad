<template>
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
        <button @click="success" class="button">
            <span class="submit">Submit</span>
        </button>
    </form>
</template>

<script>
import emailjs from "@emailjs/browser";
document.addEventListener("submit", (e) => {
    // Отключаем событие по умолчанию

    // Очищаем поля формы
    e.target.reset();
});

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
        },
    },
};
</script>
