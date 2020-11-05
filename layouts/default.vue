<template>
  <div>
    <menu-component />

    <transition name="fade">
    <nuxt />
    </transition>

    <!-- Кнопка смены языка -->
    <button class="language" onclick="ruen();" type="button">
      <p id="begin" class="text-center">ru / en</p>
    </button>
    <!-- /Кнопка смены языка -->

    <!-- Кнопка "наверх" в десктопной версии -->
    <a href="#" class="scrollup scrollupButton"><img style="width: 26px;" src="/favicons/top.png" alt=""></a>
    <!-- /Кнопка "наверх" в десктопной версии -->
  </div>
</template>

<script>
import MenuComponent from "~/components/Menu.vue";

export default {

  components: {
    MenuComponent
  },

  // Общие мета-теги для всех страниц
  head: {
    meta: [
      { charset: "utf-8" },
      { hid: "description", name: "description", content: "Kiuss Group Official Site | Официальный сайт группы Кюс" },
      { name: "viewport", content: "width=device-width" },
      { name: "keywords", content: "Max Alyokhin, Макс Алёхин, Кюс, Kiuss, арт-группа Кюс, стритарт, streetart, street-art, стрит-арт, арт, art, design, инсталляция, mural, canvas, photography, фотография, Krasnodar, Краснодар" },
      { name: "apple-mobile-web-app-title", content: "Kiuss Group" },
      { name: "application-name", content: "Kiuss Group" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "favicons/mstile-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      { name: "yandex-tableau-widget", content: "logo=https://stranno.su/favicons/yandex-icon.png, color=#000000" },
      { name: "yandex-verification", content: "4a163f992728c575" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kiuss Group" },
      { property: "og:url", content: "https://stranno.su/" },
      { property: "og:title", content: "Kiuss Group" },
      { property: "og:description", content: "Kiuss Group Official Site." },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:image", content: "../favicons/og.jpg" },
      { property: "og:image:width", content: "968" },
      { property: "og:image:height", content: "504" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "../favicons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "../favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "../favicons/favicon-16x16.png" },
      { rel: "manifest", href: "../favicons/site.webmanifest" },
      { rel: "mask-icon", href: "../favicons/safari-pinned-tab.svg", color: "#000000" },
      { rel: "stylesheet", href: "../styles/style.css", type: "text/css" },
    ],
    script: [
      { src: "../libs/js/current-device.js" },
      { src: "../libs/js/jquery-3.4.1.min.js" },
      { src: "../libs/js/jquery.transit.min.js" },
      { src: "../libs/js/jquery.easing-1.3.pack.js" },
      { src: "../scripts/breakpoints.js" },
      { src: "../scripts/menu-manager.js" },
      { src: "../scripts/ruen.js" }
    ]
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

