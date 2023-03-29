<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import TitleImage from "@/Components/TitleImage.vue";
import Dropdown from "@/Components/Dropdown.vue";

function selectDate() {}
</script>

<template>
    <Head title="О компании" />

    <AuthenticatedLayout>
        <template #header>
            <div class="h-full flex justify-center items-center">
                <h1
                    class="font-semibold text-2xl lg:text-4xl text-gray-800 dark:text-gray-50 leading-tight"
                >
                    О Нас
                </h1>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-9xl mx-auto sm:px-4 lg:px-6">
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        class="p-2 flex flex-col gap-7 md:gap-10 text-gray-900 dark:text-gray-100"
                    >
                        <div class="grid grid-row-auto gap-24">
                            <TitleImage />
                        </div>
                        <div class="flex flex-col gap-12">
                            <div
                                class="text-left text-2xl sm:text-3xl md:text-5xl lg:text-7xl w-full"
                            >
                                <h1>Who we are</h1>
                            </div>
                            <div
                                class="flex flex-col md:flex-row gap-8 justify-between ml-auto mr-16 sm:mr-32 text-left text-lg md:text-xl lg:text-2xl w-full"
                            >
                                <img
                                    src="/images/about-gif.gif"
                                    class="w-full md:w-1/3"
                                />

                                <div
                                    class="flex flex-col justify-center w-full md:w-1/2 gap-8"
                                >
                                    <h3 class="max-h-72 overflow-y-auto">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsum, magnam aperiam
                                        quibusdam soluta quasi et dolor porro
                                        amet quo, distinctio ex sint aspernatur
                                        nisi.
                                    </h3>

                                    <h3 class="max-h-72 overflow-y-auto">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ipsum, magnam aperiam
                                        quibusdam soluta quasi et dolor porro
                                        amet quo, distinctio ex sint aspernatur
                                        nisi, expedita possimus enim repellendus
                                        consequuntur veniam magni id!
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div
                            class="mt-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center"
                        >
                            <h2>History</h2>
                        </div>
                        <div class="mb-32 grid grid-cols-1 gap-8">
                            <div
                                v-for="item in items"
                                :key="item"
                                class="flex mb-4"
                            >
                                <div
                                    class="text-sm border-b-2 border-l-2 border-indigo-500 rounded-lg w-full grid"
                                >
                                    <div
                                        class="font-semibold text-base sm:text-2xl flex justify-between pr-8 pl-2"
                                    >
                                        <h3>{{ item.title }}</h3>
                                        <h2 class="text-md text-orange-300">
                                            {{ "0" + item.number }}
                                        </h2>
                                    </div>
                                    <div
                                        class="overflow-hidden sm:text-lg pl-2"
                                    >
                                        <p
                                            :id="'His' + item.number"
                                            class="unActive pt-4 h-auto duration-1000 md:w-1/2"
                                        >
                                            {{ item.message }}
                                        </p>
                                    </div>
                                </div>
                                <span class="inline-flex rounded-sm">
                                    <button
                                        type="button"
                                        @click="alerting($event, item.number)"
                                        class="inline-flex items-start px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <span class="material-symbols-outlined">
                                            add
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </div>
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
            isActive: {
                type: String,
                default: false,
            },
            items: [
                {
                    number: "1",
                    title: "1982",
                    message:
                        "Lorem ipsum dolor sit, ametconsectetur adipisicing elit. Nihil,tempore! Lorem ipsum dolor sit ametconsectetur adipisicing elit.",
                },
                {
                    number: "2",
                    title: "1991",
                    message:
                        "Lorem ipsum dolor sit ametconsectetur adipisicing elit.",
                },
                {
                    number: "3",
                    title: "2004",
                    message:
                        "aspernatur liberoiste nesciunt aut? Harum, ipsam!",
                },
                {
                    number: "4",
                    title: "2011",
                    message:
                        " Lorem ipsum dolor sit, ametconsectetur adipisicing elit. Nihil,tempore! Lorem ipsum dolor sit ametconsectetur adipisicing elit.Adipisci blanditiis, recusandaeaccusamus tenetur aspernatur liberoiste nesciunt aut? Harum, ipsam!",
                },
                {
                    number: "5",
                    title: "2022",
                    message:
                        " Lorem ipsum dolor sit, ametconsectetur adipisicing elit. Nihil,tempore! Lorem ipsum dolor sit ametconsectetur adipisicing elit.Adipisci blanditiis, recusandaeaccusamus tenetur aspernatur liberoiste nesciunt aut? Harum, ipsam!iste nesciunt aut?",
                },
                {
                    number: "6",
                    title: "2023",
                    message:
                        " Lorem ipsum dolor sit, ametconsectetur adipisicing elit. Nihil,tempore! Lorem ipsum dolor sit ametconsectetur adipisicing elit.Adipisci blanditiis, recusandaeaccusamus tenetur aspernatur liberoiste nesciunt aut? Harum, ipsam!",
                },
            ],
        };
    },
    methods: {
        alerting(ev, item) {
            const app = document.getElementById("His" + item);

            app.classList.contains("active")
                ? (app.classList.remove("active"),
                  app.classList.add("unActive"))
                : (app.classList.remove("unActive"),
                  app.classList.add("active"));
        },
    },
    components: {
        TitleImage,
    },
};
</script>

<style>
.unActive {
    margin-top: -200px;
}

.active {
    margin-top: 0;
}
</style>
