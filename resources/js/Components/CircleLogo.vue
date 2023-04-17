<template>
    <div
        id="circle"
        class="h-20 w-20 md:h-28 md:w-28 relative flex justify-center items-center radius"
    >
        <p class="absolute w-full h-full text rounded-full">
            <span
                v-for="(item, index) in count"
                :key="index"
                :class="'rotate-' + index * 15"
                :style="'color:' + color"
                class="absolute left-1/2 text-xs md:text-base trans"
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
        color: String,
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
    transform-origin: 0 40px;
}

@media (min-width: 768px) {
    .trans {
        transform-origin: 0 58px;
    }
}
</style>
