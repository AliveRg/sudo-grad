const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    options: {
        safelist: ["dark"],
    },

    safelist: [
        { pattern: /rotate-./ },
        {
            pattern: /text-(black|white)/,
        },
    ],

    theme: {
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "120%": "120%",
            "160%": "160%",
        },

        extend: {
            translate: {
                550: "550px",
                1050: "1050px",
            },
            rotate: {
                0: "0deg",
                5: "5deg",
                10: "10deg",
                15: "15deg",
                20: "20deg",
                25: "25deg",
                30: "30deg",
                35: "35deg",
                40: "40deg",
                45: "45deg",
                50: "50deg",
                55: "55deg",
                60: "60deg",
                65: "65deg",
                70: "70deg",
                75: "75deg",
                80: "80deg",
                85: "85deg",
                90: "90deg",
                95: "95deg",
                100: "100deg",
                105: "105deg",
                110: "110deg",
                115: "115deg",
                120: "120deg",
                135: "135deg",
                150: "150deg",
                165: "165deg",
                180: "180deg",
                195: "195deg",
                210: "210deg",
                225: "225deg",
                240: "240deg",
                255: "255deg",
                270: "270deg",
                285: "285deg",
                300: "300deg",
                315: "315deg",
                320: "320deg",
                330: "330deg",
                335: "335deg",
                345: "345deg",
                350: "350deg",
                365: "365deg",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                black: "#000000",
                purple: "#3f3cbb",
                midnight: "#121063",
                metal: "#565584",
                tahiti: "#3ab7bf",
                silver: "#ecebff",
                "bubble-gum": "#ff77e9",
                bermuda: "#78dcca",
                currentDark: "#755E66",
                currentDarkNext: "#DC4733",
                currentLight: "#FEA68E",
                currentBroun: "#BA6927",
                currentCian: "#F2AD4E",
            },
            width: {
                "card-web": "400px",
                "card-mobile": "200px",
            },
            height: {
                "card-web": "400px",
                "card-mobile": "200px",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
