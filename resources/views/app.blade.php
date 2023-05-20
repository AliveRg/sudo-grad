<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Адвокатская помощь в Белгороде. Бесплатная консультация, полезные советы и тчательная проработка вашей ситуации. Помощь адвоката с более чем 23 летним опытом. ">
    <meta name="keywords"
        content=" Адвокат, Адвокат в Белгороде, Адвокатская помощь, Уголовные дела, Семейные споры, Гражданские дела, Арбитражные споры, Наследственные споры, Жилищьные споры, Земельные споры, Бесплатная консультация, Лучший адвокат в Белгороде.">
    <meta name="yandex-verification" content="c6d9a7746b7367e1" />

    <script src="https://api-maps.yandex.ru/2.1/?apikey=1a731c5e-4bb8-4b66-ba0b-61601227cd7b&lang=ru_RU"
        type="text/javascript"></script>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(
                k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(93647487, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            ecommerce: "dataLayer"
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/93647487" style="position:absolute; left:-9999px;" alt="" />
        </div>
    </noscript>
    <!-- /Yandex.Metrika counter -->


    <title inertia>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
    <meta name="google-site-verification" content="DFJEVxUh72k4WBD0iFIz65MKiGlDBQpcu-0azSyuo_k" />
</head>

<body class="font-sans antialiased">
    @inertia

</body>

</html>
