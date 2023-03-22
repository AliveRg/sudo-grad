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
                        <div class="flex flex-col gap-4">
                            <div
                                class="text-left text-2xl sm:text-3xl md:text-5xl lg:text-7xl w-full"
                            >
                                <h1>Who we are</h1>
                            </div>
                            <div
                                class="flex flex-col gap-8 ml-auto mr-16 sm:mr-32 text-left text-md md:text-lg lg:text-xl w-1/2"
                            >
                                <h3 class="max-h-72 overflow-y-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, magnam aperiam
                                    quibusdam soluta quasi et dolor porro amet
                                    quo, distinctio ex sint aspernatur nisi,
                                    expedita possimus enim repellendus
                                    consequuntur veniam magni id! Harum
                                    voluptate ipsam corrupti voluptatem ad fugit
                                    porro dignissimos. Nam ea repellat illum
                                    sint culpa magnam perspiciatis commodi.
                                </h3>
                                <h3 class="max-h-72 overflow-y-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, magnam aperiam
                                    quibusdam soluta quasi et dolor porro amet
                                    quo, distinctio ex sint aspernatur nisi,
                                    expedita possimus enim repellendus
                                    consequuntur veniam magni id! Harum
                                    voluptate ipsam corrupti voluptatem ad fugit
                                    porro dignissimos. Nam ea repellat illum
                                    sint culpa magnam perspiciatis commodi.
                                </h3>
                                <h3 class="max-h-72 overflow-y-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsum, magnam aperiam
                                    quibusdam soluta quasi et dolor porro amet
                                    quo, distinctio ex sint aspernatur nisi,
                                    expedita possimus enim repellendus
                                    consequuntur veniam magni id! Harum
                                    voluptate ipsam corrupti voluptatem ad fugit
                                    porro dignissimos. Nam ea repellat illum
                                    sint culpa magnam perspiciatis commodi.
                                </h3>
                            </div>
                        </div>
                        <div
                            class="mt-16 text-xl sm:text-2xl md:text-3xl lg:text-5xl w-full text-center"
                        >
                            <h2>History</h2>
                        </div>
                        <div
                            class="mb-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        >
                            <div v-for="item in 6" :key="item" class="flex">
                                <div
                                    class="text-sm border-b-2 border-indigo-500 w-full grid"
                                >
                                    <div class="font-semibold text-base">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                    </div>
                                    <div class="overflow-hidden">
                                        <p
                                            :id="'His' + item"
                                            class="unActive pt-4 h-auto duration-1000"
                                        >
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Nihil,
                                            tempore!
                                        </p>
                                    </div>
                                </div>
                                <span class="inline-flex rounded-sm">
                                    <button
                                        type="button"
                                        @click="alerting($event, item)"
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
        };
    },
    methods: {
        alerting(ev, item) {
            const app = document.getElementById("His" + item);
            app.classList.contains("active")
                ? (app.classList.remove("active"),
                  console.log("nice"),
                  app.classList.add("unActive"))
                : (app.classList.remove("unActive"),
                  console.log("not nice"),
                  app.classList.add("active"));
            console.log(app);
        },
    },
    components: {
        TitleImage,
    },
};
</script>

<style>
.unActive {
    margin-top: -100px;
}

.active {
    margin-top: 0;
}
</style>
