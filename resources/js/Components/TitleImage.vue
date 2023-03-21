<template>
    <div class="w-full flex flex-col md:flex-row justify-between">
        <div class="w-full md:w-1/2">
            <div
                class="h-32 md:h-full bg-green-800 rounded-lg flex justify-center items-center"
            >
                <h1 class="block">{{ num }}</h1>
            </div>
        </div>
        <div class="w-full md:w-5/12">
            <h2 class="overflow-scroll h-auto inline align-middle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                commodi est illo laborum reprehenderit atque eaque at dolore
                repellendus aliquid? Lorem ipsum dolor sit amet consectetur
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                reiciendis sapiente non veritatis voluptatibus? Rem maiores
                perspiciatis non dolores necessitatibus sit culpa ab. Qui quia
                neque dolores eum cumque quidem!
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        num: Number,
        reverse: String,
    },
};
</script>

<style></style>
