module.exports = {
  // Default is 'server'
  target: 'static',

  css: ['~/assets/sass/style.sass'],

  // Preloader configuration
  loading: {
    color: 'black',
    height: '5px',
    throttle: 200,
  },

  // Build configuration
  build: {
    vendor: ['vue-resource', 'vue-lazyload'],
  },

  plugins: [
    '~/plugins/vue-resource',
    '~/plugins/vue-lazyload',
    { src: '~/plugins/ga.js', mode: 'client' },
  ],

  // Общие мета-теги для всех страниц
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kiuss things | Кюсовские штуки',
      },
      { name: 'viewport', content: 'width=device-width' },
      {
        name: 'keywords',
        content: 'Кюс, Kiuss, street-art, mural',
      },
      { name: 'apple-mobile-web-app-title', content: 'Kiuss things' },
      { name: 'application-name', content: 'Kiuss things' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'yandex-verification', content: '4a163f992728c575' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Kiuss things | Кюсовские штуки' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:url', content: 'https://kiuss.stranno.su' },
      { property: 'og:description', content: 'Kiuss things | Кюсовские штуки' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '536' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '../favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '../favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '../favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '../favicons/manifest.json' },
      {
        rel: 'mask-icon',
        href: '../favicons/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },

  router: {
    // prefetchLinks: false,
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
