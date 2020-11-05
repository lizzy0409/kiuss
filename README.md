# Kiuss

## Kiuss art-group's website portfolio

Instruments: HTML5, CSS3, Flexbox, JS, Babel, Nuxt.js, vue.js, jQuery, Webpack, VS Code, npm

##  About the art-group

Kiuss Group was formed in 2012 and is based in Krasnodar. The main areas of interest are street activities, neosuprematism and screen painting. The founders of the cultural center “The Mansion of Culture” and the gallery “The High of Culture”, developers of web-application for psychogeography research “Dérive”, the authors of the essay “Instructions for Semiotics”. The latest projects were the Strange Posters, The Simulation of Welfare and The Threads series, and the largest cursor in the world, drawn on the roof of the "Moskovsky" shopping mall.

## Project implementation

![](https://stranno.su/src/assets/images/design.png)

The project is a SPA-application with SSR, each individual project is implemented as a single file vue-component. The main task is to make images of the maximum size, as well as hide all elements of the interface, because 90% of the content of the site will be image galleries.

Features:
- custom scroll-bar
- use of the current-device js-library to determine the device type for more precise adjustment of media-queries
- bilingualism (languages are switched with animation by pressing the button, i.e. no need to switch to a separate subdomain)
- emphasis on the secondary nature of the interface elements and the highlighting of images
- separate mobile version
- lazyload
- component routing
- splitting the js-code into chunks, each of which is tightened only when necessary (as a consequence, markup, styles, images and texts are also tightened as necessary)
- each "post" on the page is pulled up from the json-data of the GET-request (with the help of vue-resource plugin)

You can check the website by clicking here:
https://stranno.su

# Кюс

## Сайт-портфолио арт-группы Кюс

Инструменты: HTML5, CSS3, Flexbox, JS, Babel, Nuxt.js, vue.js, jQuery, Webpack, VS Code, npm

## Об арт-группе

Группа Кюс образована в 2012 году, базируется в Краснодаре. Специализируется на таких направлениях как стрит-арт, неосупрематизм, живопись экрана. Изредка участвует в выставках. Последними проектами были постеры «Странно», серия «Симуляция благополучия» и «Нити», а также самый большой курсор в мире, нарисованный на крыше местного ТРЦ. Учредители культурного центра «Особняк Культуры» и галереи «Вершина Культуры».

## Реализация проекта

Проект является SPA-приложением с SSR, каждый отдельный проект реализован в виде однофайлового vue-компонента. Основная задача — сделать изображения максимальной величины, а также скрыть по возможности все элементы интерфейса, так как 90% контента сайта будут представлять собой галереи изображений.

Особенности:
- кастомный скролл-бар
- использование js-библиотеки current-device для определения типа устройства для более точной подстройки медиа-запросов
- двуязычие (языки переключаются с анимацией по нажатию на кнопку, то есть не нужно переходить на отдельный поддомен)
- акцент на второстепенности элементов интерфейса и вывод на первый план изображений
- отдельная мобильная версия сайта
- "ленивая" загрузка изображений
- роутинг компонентов
- разбиение js-кода на чанки, каждый из которых подтягивается только при необходимости (как следствие, по необходимости также подтягиваются разметка, стили, изображения и тексты)
- каждый "пост" на странице подтягивается из json-данных GET-запросом (с помощью плагина vue-resource)

Сайт доступен по адресу:
https://stranno.su
