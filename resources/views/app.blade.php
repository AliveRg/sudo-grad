<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Адвокатская помощь в Белгороде. Бесплатная консультация, полезные советы и тчательная проработка вашей ситуации. Помощь адвоката с более чем 23 летним опытом. ">
    <meta name="keywords"
        content=" Адвокат, Адвокат в Белгороде, Адвокатская помощь, Уголовные дела, Семейные споры, Гражданские дела, Арбитражные споры, Наследственные споры, Жилищьные споры, Земельные споры, Бесплатная консультация, Лучший адвокат в Белгороде.">
    <script src="https://api-maps.yandex.ru/2.1/?apikey=1a731c5e-4bb8-4b66-ba0b-61601227cd7b&lang=ru_RU"
        type="text/javascript"></script>


    <title inertia>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

</body>

</html>
