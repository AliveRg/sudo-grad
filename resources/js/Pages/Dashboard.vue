<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import CardProduct from "@/Components/CardProduct.vue";
import CircleLogo from "@/Components/CircleLogo.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SvgImg1 from "@/Components/SvgImage.vue";
import TitleImage from "@/Components/TitleImage.vue";
</script>

<template>
    <Head title="Адвокатская помощь" />

    <AuthenticatedLayout>
        <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col gap-12 md:gap-20"
        >
            <div
                class="flex items-center justify-between text-gray-900 dark:text-gray-400"
            >
                <div class="flex flex-col gap-10">
                    <p class="font-bold text-3xl tracking-wider">
                        Работайте только с <br />
                        проверенными специалистами.
                    </p>
                    <p class="w-1/2 text-lg font-semibold">
                        Наши адвокаты - профессионалы с большим опытом и
                        результативностью.
                    </p>
                    <div
                        class="w-full sm:w-1/2 bg-[#9C9C1A] text-center px-[26px] py-[14px] text-white/80 rounded-3xl hover:bg-white hover:shadow-md hover:font-semibold hover:text-[#9C9C1A] transition-all duration-150"
                    >
                        Заказать консультацию
                    </div>
                </div>
                <div class="w-1/3 h-full hidden sm:block">
                    <SvgImg1 />
                </div>
            </div>
            <div class="grid grid-row-auto gap-24">
                <TitleImage
                    text="Для тех, кто со мной ещё не знаком. Меня зовут Елена Городова.
Я адвокат с 1999 года, состою в Центральной Свердловской Адвокатской конторе г. Белгорода.
Адвокатом мечтала быть ещё в школе. Считаю, что адвокатура — мое призвание, я занимаюсь любимым делом. В начале адвокатской деятельности искала себя во всех отраслях права. Со временем определилась со специализацией. Сейчас это уголовные дела, гражданские дела, семейные и наследственные споры, юридическое обслуживание среднего и малого бизнеса. Я нацелена на достижение максимального результата в защите прав и интересов своих клиентов!"
                    img="09"
                    title="Елена Городова"
                    pretitle="Профессиональный адвокат"
                    :svg="false"
                />
            </div>
            <div class="grid grid-row-auto gap-24">
                <TitleImage
                    text="Для тех, кто со мной ещё не знаком. Меня зовут Елена Городова.
Я адвокат с 1999 года, состою в Центральной Свердловской Адвокатской конторе г. Белгорода.
Адвокатом мечтала быть ещё в школе. "
                    :reverse="true"
                    :svg="true"
                />
            </div>
            <div class="max-w-9xl mx-auto">
                <div class="overflow-hidden sm:rounded-lg">
                    <div
                        class="p-6 text-gray-900 dark:text-gray-400 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6"
                    >
                        <section v-for="product in products" :key="product.id">
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

            <div
                class="mt-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-400 w-full text-center"
            >
                <h2>Наши преймущества</h2>
            </div>
            <div
                class="mb-32 mx-auto w-11/12 grid grid-cols-1 gap-8 dark:text-slate-200"
            >
                <div
                    v-for="item in items"
                    :key="item"
                    class="flex mb-4"
                    @click="alerting($event, item.number)"
                >
                    <div
                        class="text-sm border-b-2 border-l-2 border-[#9C9C1A] rounded-lg w-full grid"
                    >
                        <div
                            class="font-semibold text-base sm:text-2xl flex justify-between pr-8 pl-2"
                        >
                            <h3>{{ item.title }}</h3>
                            <h2 class="text-md text-currentLight">
                                {{ "0" + item.number }}
                            </h2>
                        </div>
                        <div class="overflow-hidden sm:text-lg pl-2">
                            <p
                                :id="'His' + item.number"
                                class="unActive pt-4 h-auto duration-700 md:w-2/3"
                            >
                                {{ item.message }}
                            </p>
                        </div>
                    </div>
                    <span class="inline-flex rounded-sm">
                        <button
                            type="button"
                            class="inline-flex items-start px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                        >
                            <span class="material-symbols-outlined"> add </span>
                        </button>
                    </span>
                </div>
            </div>
            <!-- <div
                class="max-w-9xl mx-auto mb-10 md:mb-16 lg:mb-32 sm:px-6 lg:px-8 mt-10 grid grid-rows-5 md:grid-cols-4 gap-2 md:gap-6"
            >
                <div
                    class="p-3 py-5 pb-0 md:col-span-4 font-bold text-2xl md:text-4xl text-currentBroun tracking-widest"
                >
                    <p>
                        На сайте вы можете заказать услуги адвоката
                        <span class="text-currentCian"
                            >Городовой Елены Николаевны</span
                        >
                        и получить
                        <span class="text-currentCian"
                            >квалифицированную юридическую помощь</span
                        >.
                    </p>
                </div>

                <div
                    class="overflow-hidden order-3 md:order-2 shadow-sm sm:rounded-lg border-l-2 md:border-l-0 md:border-r-2 border-currentBroun md:row-span-2 md:col-span-2 grid grid-row-1 c justify-items-center gap-8 p-3 py-0"
                >
                    <div
                        class="text-sm sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 font-mono text-justify flex items-center pr-3 sm:pr-5 md:pr-8 lg:pr-10 md:leading-7 lg:leading-10"
                    >
                        <p class="h-full">
                            Все услуги адвоката можно получить как физическим,
                            так и юридическим лицам. При этом адвокат
                            гарантирует вам добросовестный подход к решению
                            поставленных клиентом задач, оказание
                            квалифицированной юридической помощи всем
                            обратившимся клиентам.
                            <br />
                            <br />
                            <span class="text-currentBroun text-3xl"
                                >Адвокатские запросы </span
                            ><br />
                            Представляя ваши интересы, адвокат подготовит и
                            направит адвокатские запросы, получит интересующую
                            вас информацию. А в случае неполучения ответа,
                            обжалует эту ситуацию в прокуратуру и получит
                            официальный ответ.
                        </p>
                    </div>
                </div>
                <div
                    style="background-image: url('/images/Stickers_Sale.webp')"
                    class="p-3 py-0 md:order-3 w-full md:row-span-2 md:col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
                ></div>
                <div
                    style="
                        background-image: url('/images/Athena_Stickers-2.webp');
                    "
                    class="p-3 py-0 order-4 md:order-3 w-full col-span-1 md:row-span-2 md:col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
                ></div>
                <div
                    class="order-5 md:order-4 shadow-sm sm:rounded-lg border-l-2 border-currentBroun md:row-span-3 md:col-span-2 grid grid-row-1 justify-items-center p-1"
                >
                    <div
                        class="text-sm sm:text-base md:text-lg lg:text-2xl dark:text-slate-200 font-mono text-justify flex items-center pl-3 sm:pl-5 md:pl-8 lg:pr-10 md:leading-7 lg:leading-10"
                    >
                        <p>
                            <span class="text-currentBroun text-3xl text-left"
                                >Договор обслуживания </span
                            ><br />
                            Также вы можете заключить с адвокатом договор
                            абонентского обслуживания. Наличие данного договора
                            100% гарантирует вам получение квалифицированной
                            юридической услуги адвоката в нужный момент. В том
                            числе, например, вы будете уверены в наличие своего
                            адвоката в случае задержания по уголовному делу. И
                            таким образом, будет в полной мере реализовано ваше
                            право на защиту на всех стадиях производства по
                            уголовному делу.
                        </p>
                    </div>
                </div>
            </div> -->
        </div>
    </AuthenticatedLayout>
</template>

<script>
export default {
    data() {
        return {
            isActive: {
                type: String,
                default: false,
            },
            items: [
                {
                    number: "1",
                    title: "Абонентское обслуживание ",
                    message:
                        "Устное и письменное консультирование по вопросам, возникающим в процессе финансово-хозяйственной деятельности компании; Подготовка экспертных заключений по правовым вопросам; Разработка и правовой анализ различных видов договоров, соглашений и иных документов;Правовое обеспечение трудовых отношений; Участие в переговорах с контрагентами и представление интересов компании при взаимодействии с государственными органами; Обеспечение претензионной деятельности; Правовое обеспечение хозяйственных сделок; Участие и документальное оформление корпоративных процедур; При необходимости, консультирование руководства и сотрудников компании по семейному, жилищному и наследственному праву.",
                },
                {
                    number: "2",
                    title: "Международное право",
                    message:
                        "Международный коммерческий арбитраж; Оспаривание, признание и приведение в исполнение решений международных коммерческих арбитражей и решений иностранных судов; Участие в переговорах по делам в сфере внешнеэкономических сделок; Содействие в заключении мировых соглашений и их реализаций; Консультации и подготовка соглашений, осложненных иностранным элементом с определением арбитражной оговорки; Подготовка меморандумов по фактам для иностранных консультантов; Подготовка юридических заключений и справок по российскому праву;",
                },
                {
                    number: "3",
                    title: "Арбитражные споры",
                    message:
                        "Анализ ситуации и оценка перспективы дела в офисе адвоката либо в офисе клиента; Разработка стратегии дела и позиции клиента с учетом возможных рисков; Сбор доказательной базы всеми доступными правовыми методами , в том числе с помощью адвокатских запросов; Проведение переговоров с контрагентом с целью досудебного урегулирования спора; Личное представительство клиента на всех стадиях судебного процесса; Правовое сопровождение исполнительного производства.",
                },
                {
                    number: "4",
                    title: "Жилищное право",
                    message:
                        " Признание утратившим право пользования жилым помещением; Снятие с регистрационного учета; Восстановление на жилищном учете; Изменение договора социального найма; Заключение договора социального найма; Определение порядка пользования жилым помещение; Вселение и нечинение препятствий в пользовании жилым помещением; Признание права собственности; Признание сделки недействительной (договора купли-продажи, ренты, дарения).",
                },
                {
                    number: "5",
                    title: "Наследственне право",
                    message:
                        "Правовая помощь в международных наследственных делах; Признание завещания недействительным; Выделение доли супругов; Признание обязательной доли наследства; Признание права собственности на имущество в порядке наследования; Установление факта родственных отношений; Восстановление срока для принятия наследства; Установление факта принятия наследства;",
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
        TitleImage,
        SvgImg1,
    },

    methods: {
        // handleSCroll(event) {
        //     let card = document.querySelectorAll(".addClass");
        //     for (let index = 0; index < card.length; index++) {
        //         const element = card[index];
        //         console.log(window.scrollY);
        //         element.classList.add("card_product");
        //         window.removeEventListener("scroll", this.handleSCroll);
        //     }
        // },
        alerting(ev, item) {
            const app = document.getElementById("His" + item);
            app.classList.contains("active")
                ? (app.classList.remove("active"),
                  app.classList.add("unActive"))
                : (app.classList.remove("unActive"),
                  app.classList.add("active"));
        },
    },
    // created() {
    //     window.addEventListener("scroll", this.handleSCroll);
    // },

    computed: {},
};
</script>

<style>
.addClass {
    opacity: 1;
    transform: translateY(0);
    /* opacity: 0;
    transition: all ease-in;
    transform: translateY(30%); */
}

.card_product {
    /* opacity: 1;
    transform: translateY(0); */
}
.unActive {
    margin-top: -600px;
}

.active {
    margin-top: 0;
}
</style>
