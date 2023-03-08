<template>
    <div
        id="circle"
        class="h-40 w-40 relative flex justify-center items-center radius"
    >
        <p class="absolute w-full h-full text">
            <span
                v-for="(item, index) in count"
                :key="index"
                :class="'rotate-' + index * 15"
                class="dark:text-gray-200 absolute left-1/2 text-lg trans"
            >
                {{ item }}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
    },
    data: function () {
        return {
            count: this.text.split(""),
        };
    },
};
</script>

<style>
.text {
    animation: rotateText 10s linear infinite;
}

@keyframes rotateText {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

.radius {
    border-radius: 50%;
}

.trans {
    transform-origin: 0 80px;
}
</style>
