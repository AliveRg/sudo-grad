const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            rotate: {
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
                95: "75deg",
                100: "100deg",
                105: "105deg",
                110: "110deg",
                115: "115deg",
                120: "120deg",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                purple: "#3f3cbb",
                midnight: "#121063",
                metal: "#565584",
                tahiti: "#3ab7bf",
                silver: "#ecebff",
                "bubble-gum": "#ff77e9",
                bermuda: "#78dcca",
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
