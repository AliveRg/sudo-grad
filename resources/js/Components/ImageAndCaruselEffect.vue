<template>
    <div
        :style="'background-image: url(./images/' + path + ')'"
        class="box p-3 md:order-3 py-5 w-full row-span-2 col-span-2 flex items-center justify-center bg-contain bg-top bg-no-repeat"
    >
        <!-- <div class="w-full h-full">
            <span
                v-for="(item, index) in count"
                :key="index"
                :style="
                    'transform: rotateY(' + index * (360 / count) + 'deg' + ')'
                "
                class="absolute left-1/2 text-sm md:text-xl trans"
            >
                {{ item }}
            </span>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        path: String,
    },
};
</script>

<style>
:root {
    --randDeg: 20deg;
}

.box {
    transform-style: preserve-3d;
    animation: textSerc 15s alternate infinite;
}

.box span {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: translateZ(200px);
}

@keyframes textSerc {
    0% {
        transform: perspective(1000px) rotateY(var(--randDeg)) rotateX(5deg)
            translateY(-30px);
    }
    100% {
        transform: perspective(1000px) rotateY(-20deg) rotateX(-5deg)
            translateY(-30px);
    }
}
</style>
