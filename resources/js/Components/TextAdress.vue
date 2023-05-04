<template>
    <div
        class="text-zinc-600 dark:text-slate-100 text-sm sm:text-lg lg:text-2xl font-semibold flex items-start justify-start md:justify-center"
    >
        <ul
            class="flex flex-col gap-5 bg-white/60 dark:bg-currentBroun/60 p-2 rounded-lg"
        >
            <li class="w-full flex gap-3 flex-col">
                <div
                    class="mb-3 sm:mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl"
                >
                    <p>Адрес</p>
                </div>
                <div class="flex gap-3 items-center">
                    <span class="material-symbols-outlined -mb-1">
                        pin_drop
                    </span>
                    <span>{{ adress }}</span>
                </div>
            </li>
            <li class="w-full flex-col flex gap-5">
                <a :href="'tel:' + ' ' + tel" class="flex gap-3 items-center">
                    <span class="material-symbols-outlined -mb-1"> call </span>
                    <span>{{ tel }}</span>
                </a>
                <a :href="'tel:' + tel2" class="flex gap-3 items-center">
                    <span class="material-symbols-outlined -mb-1"> call </span>
                    <span>{{ tel2 }}</span>
                </a>
            </li>
            <li>
                <a
                    :href="'mailto:' + mail"
                    class="w-full flex gap-3 items-center"
                >
                    <span class="material-symbols-outlined -mb-1"> mail </span>
                    <span>{{ mail }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tel: String,
        mail: String,
        tel2: String,
        adress: String,
    },
};
</script>

<style></style>
