<script setup>
import { Head, Link } from "@inertiajs/vue3";
import LinkWelcome from "@/Components/LinkWelcome.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

defineProps({
    cancases: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Услуги адвоката - адвокатская помощь, Белгород" />

    <div
        class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-currentDarkNext selection:text-white"
    >
        <div class="sm:fixed z-10 sm:top-0 sm:right-0 p-6 text-right">
            <Link
                :href="'dashboard'"
                class="px-2 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                >Наши Услуги</Link
            >
        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <div class="flex justify-center">
                <img src="/images/LogoSVG.svg" alt="" class="w-36" />
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <!-- Next Path -->

                    <section>
                        <a
                            :href="'contact'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="Заказать консультацию"
                                content="
                                        Получите быструю, бесплатную, квалифицированную помощь
                                         в решении ваших вопросов по юридическим делам!
                                          Мы помогаем людям уже более 23 лет и готовы браться 
                                          за самые сложные дела. Мы делаем максимум для каждого из наших клиентов! Вы сможете прочитать об этом подробнее в разделе 'О Нас'. Ждем вашего звонка! "
                            />
                        </a>
                    </section>
                    <!-- Next Path -->

                    <section>
                        <a
                            :href="'dashboard'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="Наши Уcлуги"
                                content="
                                        Для вашего удобства мы разделили дела по категориям и предоставили возможность посмотреть, как будет происходить процесс работы с вами в каждой из них! Во всех делах, мы с вами подписываем договор закрепленный законом, он пригодится для множества вещей, которые вам очень понравятся в нашей работе, но основная его задача - это ваша зашита и душевное спокойствие. Мы заботимся о каждом клиенте!"
                            />
                        </a>
                    </section>

                    <!-- Next Path -->

                    <section>
                        <a
                            :href="'about'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="О Нас"
                                content="Многие работают с нами на постоянной основе, для защиты своих прав и свобод, и уже знают как это - не волноваться за нарушение своих прав и не изучать всю 'судебную истину', вместе с 'написанием исков и аппеляционных жалоб'. Для новых же клиентов представимся, Городова Елена Николаевна и Городова Лариса Николаевна. Если вы дочитали до этого момента, предлагаю почитать немного о нас и о нашей судебной практике. Уверяю, вам понравится и вы узнаете действительно интересные вещи! "
                            />
                        </a>
                    </section>

                    <!-- Next Path -->

                    <section>
                        <div
                            class="min-h-full bg-0-50 bg-image-welcome bg-no-repeat bg-cover bg-center backdrop-opacity-30 scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <div>
                                <div
                                    class="h-16 w-16 bg-teal-50 dark:bg-teal-800/20 flex items-center justify-center rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        class="w-7 h-7 stroke-currentDarkNext"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                                        />
                                    </svg>
                                </div>

                                <h2
                                    class="mt-6 text-xl font-semibold text-gray-50 dark:text-white"
                                >
                                    Наши Работы
                                </h2>

                                <p
                                    class="mt-4 text-gray-50 dark:text-gray-50 text-sm leading-relaxed"
                                >
                                    Тут представлены самые интересные и
                                    интригующие дела в нашей практике и поверьте
                                    названия дел ниже вас не обманывают!

                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Пропавший дом!</a
                                    >,
                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Envoyer</a
                                    >
                                    Вы можете ознакомится с ними и основываясь
                                    уже на этом принять решение о консультации
                                    или полноценном найме для получении помощи.
                                    Приятного прочтения!
                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Cashier</a
                                    >,
                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Dusk</a
                                    >,
                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-300 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Sanctum</a
                                    >,
                                    <a
                                        :href="'cases'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Telescope</a
                                    >, и так далее.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-image-welcome {
    background-image: url(/images/foto_1.png);
}

.bg-dots-darker {
    background-color: #c0d2e6;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='552' height='552' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23C6DAE1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%231C666D'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-color: #6d6d6d;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='552' height='552' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23C6DAE1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C6DAE1'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    }
}
</style>
