<script setup>
import { Head, Link } from "@inertiajs/vue3";
import LinkWelcome from "@/Components/LinkWelcome.vue";

defineProps({
    canLogin: Boolean,
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
        <div
            v-if="canLogin"
            class="sm:fixed z-10 sm:top-0 sm:right-0 p-6 text-right"
        >
            <Link
                v-if="$page.props.auth.user"
                :href="'dashboard'"
                class="px-2 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                >Наши Услуги</Link
            >

            <template v-else>
                <Link
                    :href="'login'"
                    class="px-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                    >Вход</Link
                >

                <Link
                    v-if="canRegister"
                    :href="'register'"
                    class="ml-4 px-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                    >Регистрация</Link
                >
            </template>
        </div>

        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <div class="flex justify-center">
                <svg
                    class="h-16 w-auto bg-wight dark:bg-transparent"
                    width="2500"
                    height="2500"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                >
                    <path
                        d="M248.352 84.462a127.947 127.947 0 0 0-29.656-46.777l-.414.76v41.527l.414.76c.16.013.114.478.274.492 9.168.792 19.041 1.885 28.917 3.499.206.034.258-.295.465-.261"
                        fill="#C0D84B"
                    />
                    <path
                        d="M218.696 80.732V37.685a128.397 128.397 0 0 0-36.452-25.626l-.621 1.353V78.62l.62 1.06c.154-.005.743.5.895.496 11.07-.324 22.742-.024 35.036.986.32.026.202-.457.522-.43"
                        fill="#65C1ED"
                    />
                    <path
                        d="M174.068 80.051c.217-.013.614.348.832.335 2.22-.128 4.434-.176 6.705-.252.261-.009.377-.446.638-.454V12.058a126.999 126.999 0 0 0-36.449-10.797l-.743.874v60.526l.743 1.213c10.785 2.985 20.437 8.643 28.274 16.177"
                        fill="#2F95D2"
                    />
                    <path
                        d="M182.244 89.464l.334-.534v-8.76l-.334-.49c-2.762.086-5.488.21-8.175.37 2.998 2.882 5.756 6.015 8.175 9.414"
                        fill="#1C75BC"
                    />
                    <path
                        d="M128 61.45c6.167 0 12.128.855 17.794 2.424V1.261A128.885 128.885 0 0 0 128 .002c-6.339 0-12.567.48-18.661 1.37l-.603.698v61.306l.603.745A66.58 66.58 0 0 1 128 61.45"
                        fill="#2A75BB"
                    />
                    <path
                        d="M109.34 64.12V1.373A127.026 127.026 0 0 0 72.894 12.45l-.734 1.466V89.93l.734.75c8.586-12.653 21.416-22.177 36.444-26.56"
                        fill="#BF65A7"
                    />
                    <path
                        d="M72.896 90.68V12.45c-13.671 6.53-25.983 15.426-36.45 26.14l-.665.837v98.141l.665 1.191c.14-.142.345.426.487.284a192.613 192.613 0 0 1 24.815-20.934c.238-.168.415-1.047.654-1.215A66.159 66.159 0 0 1 72.896 90.68z"
                        fill="#F37321"
                    />
                    <path
                        d="M36.445 138.76V38.589C13.908 61.663 0 93.2 0 128.003c0 16.2 3.05 31.675 8.544 45.937.183-.292.573.14.76-.153 6.754-10.65 15.431-22.162 26.411-33.355.31-.316.416-1.357.73-1.672"
                        fill="#FFCF01"
                    />
                    <path
                        d="M8.545 173.94a128.23 128.23 0 0 0 27.9 43.474l.507-1.293v-76.145l-.506-1.217c-11.731 11.797-20.882 23.988-27.901 35.18"
                        fill="#FAA61A"
                    />
                    <path
                        d="M61.45 128.003c0-3.788.342-7.493.951-11.108a192.681 192.681 0 0 0-25.955 21.865v78.655c10.466 10.713 22.78 19.608 36.45 26.139l.696-.75V167.18l-.696-1.856c-7.223-10.645-11.447-23.49-11.447-37.321"
                        fill="#ED1C24"
                    />
                    <path
                        d="M182.244 79.68v9.784c7.74 10.878 12.31 24.17 12.31 38.539 0 14.367-4.57 27.659-12.31 38.538v77.403a128.364 128.364 0 0 0 36.452-25.628l1.181-2.467V81.802l-1.18-1.07c-12.819-1.087-24.962-1.407-36.453-1.052"
                        fill="#27AAE1"
                    />
                    <path
                        d="M72.896 165.323v78.23a127.125 127.125 0 0 0 36.444 11.081l.828-1.027v-60.916l-.828-.808c-15.03-4.382-27.858-13.909-36.444-26.56"
                        fill="#92278F"
                    />
                    <path
                        d="M128 194.552c-6.48 0-12.734-.941-18.661-2.67v62.752A128.899 128.899 0 0 0 128 256c6.043 0 11.977-.447 17.794-1.258l.558-1.396v-60.394l-.558-.822A66.6 66.6 0 0 1 128 194.552"
                        fill="#21409A"
                    />
                    <path
                        d="M145.794 192.13v62.611a126.985 126.985 0 0 0 36.45-10.798l.944-1.855V167.7l-.944-1.16c-8.743 12.28-21.543 21.461-36.45 25.59"
                        fill="#1C75BC"
                    />
                    <path
                        d="M255.143 113.37c-1.138-10.038-3.466-19.711-6.79-28.908-10.27-1.696-20.149-2.922-29.657-3.731v137.584c19.811-19.895 33.102-46.278 36.447-75.68.547-4.807.857-9.681.857-14.633 0-4.953-.31-9.828-.857-14.632"
                        fill="#8DC63F"
                    />
                </svg>
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <!-- Next Path -->

                    <section v-if="canLogin">
                        <a
                            v-if="$page.props.auth.user"
                            :href="'contact'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="Заказать консультацию"
                                content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end."
                            />
                        </a>

                        <div v-else>
                            <a
                                :href="'login'"
                                class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                            >
                                <LinkWelcome
                                    title="Заказать консультацию"
                                    content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end. "
                                />
                            </a>
                        </div>
                    </section>
                    <!-- Next Path -->

                    <section v-if="canLogin">
                        <a
                            v-if="$page.props.auth.user"
                            :href="'dashboard'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="Наши Уcлуги"
                                content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end. "
                            />
                        </a>

                        <div v-else>
                            <a
                                :href="'login'"
                                class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                            >
                                <LinkWelcome
                                    title="Наши Услуги"
                                    content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end. "
                                />
                            </a>
                        </div>
                    </section>

                    <!-- Next Path -->

                    <section v-if="canLogin">
                        <a
                            v-if="$page.props.auth.user"
                            :href="'about'"
                            class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                        >
                            <LinkWelcome
                                title="О Нас"
                                content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end. "
                            />
                        </a>

                        <div v-else>
                            <a
                                :href="'login'"
                                class="min-h-full scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
                            >
                                <LinkWelcome
                                    title="О Нас"
                                    content=" Laravel has wonderful documentation covering every aspect of the
                                        framework. Whether you are a newcomer or have prior experience
                                        with Laravel, we recommend reading our documentation from
                                        beginning to end."
                                />
                            </a>
                        </div>
                    </section>

                    <!-- Next Path -->

                    <section v-if="canLogin">
                        <div
                            v-if="$page.props.auth.user"
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
                                    Laravel's robust library of first-party
                                    tools and libraries, such as
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Forge</a
                                    >,
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Envoyer</a
                                    >
                                    help you take your projects to the next
                                    level. Pair them with powerful open source
                                    libraries like
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Cashier</a
                                    >,
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Dusk</a
                                    >,
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-300 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Sanctum</a
                                    >,
                                    <a
                                        :href="'login'"
                                        class="underline hover:text-teal-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Telescope</a
                                    >, and more.
                                </p>
                            </div>
                        </div>

                        <div
                            v-else
                            class="min-h-full bg-image-welcome bg-no-repeat bg-cover bg-center backdrop-opacity-30 scale-100 p-6 bg-white/70 dark:bg-gray-800/80 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-currentDarkNext"
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
                                    class="mt-6 text-xl font-semibold text-gray-900 dark:text-white"
                                >
                                    Наши Работы
                                </h2>

                                <p
                                    class="mt-4 text-gray-50 dark:text-gray-50 text-sm leading-relaxed"
                                >
                                    Laravel's robust library of first-party
                                    tools and libraries, such as
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Forge</a
                                    >,
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Envoyer</a
                                    >
                                    help you take your projects to the next
                                    level. Pair them with powerful open source
                                    libraries like
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Cashier</a
                                    >,
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Dusk</a
                                    >,
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Sanctum</a
                                    >,
                                    <a
                                        href="#"
                                        class="underline hover:text-amber-00 focus:outline focus:outline-2 focus:rounded-sm focus:outline-currentDarkNext"
                                        >Telescope</a
                                    >, and more.
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
    background-image: url(./images/foto_1.png);
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
