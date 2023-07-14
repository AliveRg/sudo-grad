<template>
    <div class="relative w-52 h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 mx-auto">
        <div
            class="CartHoverTranRot absolute w-52 h-64 md:w-64 md:h-72 lg:w-72 lg:h-80"
        >
            <div
                v-bind:style="{
                    backgroundImage:
                        'url(/images/state/' + img__path + '.webp' + ')',
                }"
                class="FrontHoverTranRot rounded-lg bg-cover bg-center bg-no-repeat flex md:text-2xl justify-center items-end text-center"
            >
                <div
                    class="rext-dff w-full text-white bg-black/70 backdrop-blur-md text-sm sm:text-base md:text-lg lg:text-2xl flex items-center justify-center pb-3 min-h-[100px]"
                >
                    {{ textFront }}
                </div>
                <!-- <div
                    class="absolute w-1/5 h-full left-0 bottom-0 bg-currentCian/30 text-black backdrop-blur-md text-sm sm:text-base md:text-lg lg:text-2xl flex items-center justify-center leading-loose overflow-hidden"
                >
                    <p class="absolute rotate-90 inline w-80 text-center">
                        {{ textFront }}
                    </p>
                </div> -->
            </div>
            <div class="BackHoverTranRot bg-currentBroun/25">
                <div
                    class="h-full p-3 md:p-6 lg:p-7 text-black dark:text-slate-100 text-base sm:text-lg lg:text-2xl text-start tracking-tight flex items-start"
                >
                    <p>{{ textBack }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        textFront: String,
        textBack: String,
        img__path: String,
    },
};
</script>

<style>
.CartHoverTranRot {
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.CartHoverTranRot:hover .FrontHoverTranRot {
    transform: perspective(600px) rotateY(-180deg);
}
.CartHoverTranRot:hover .rext-dff {
    display: none;
}

.CartHoverTranRot:hover .BackHoverTranRot {
    transform: perspective(600px) rotateY(0);
}

.FrontHoverTranRot,
.BackHoverTranRot {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform 0.5s ease;
    border-radius: 10px;
}

.FrontHoverTranRot {
    transform: perspective(600px) rotateY(0);
}

.FrontHoverTranRot img {
    width: 100%;
    height: auto;
    background-image: url();
}

.BackHoverTranRot {
    transform: perspective(600px) rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
