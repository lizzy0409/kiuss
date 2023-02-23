<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        A series of memorial plaques «Gastarbeiters Under Protection» <br />Collaboration with art-group Afront. Mixed media, 2015 <br /><br />"At the beginning of the XXI century Krasnodar unleashes
        the shackles of one-storey buildings and turns into a modern city. But, unfortunately, all gratitude for the construction of a wonderful new south goes to the heads of development companies,
        and the names of the real heroes remember only silent piles. With the project "Gastarbeiters under protection" we want not only to perpetuate the work of real builders of the Kuban welfare,
        but also to emphasize that in this world we are all guests (Gastarbeiter — guest worker)" <br /><a
          target="_blank"
          href="http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html"
          >The World Congress of Uzbeks</a
        >
        expressed gratitude to the Gastarbeiters Under Protection Project.
      </div>
      <div v-for="(migrant_workers_under_protection, index) in migrant_workers_under_protectionArray" :index="index" :key="migrant_workers_under_protection.index">
        <h3>{{ migrant_workers_under_protection.title }}</h3>

        <div class="explication" v-html="migrant_workers_under_protection.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="migrant_workers_under_protection.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Серия мемориальных табличек «Гастарбайтеры под защитой» <br />Совместно с арт-группой Афронт. Смешанная техника, 2015 <br /><br />"В начале XXI века Краснодар сбрасывает оковы одноэтажной
        застройки и превращается в современный город. Но, к сожалению, вся благодарность за построение дивного нового юга достается руководителям компаний-застройщиков, а имена настоящих героев помнят
        лишь безмолвные сваи. Проектом "Гастарбайтеры под защитой" мы хотим не только увековечить труд действительных строителей кубанского благополучия, но и подчеркнуть, что в этом мире все мы гости
        (от нем. Gastarbeiter — гость-работник)" <br /><a
          target="_blank"
          href="http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html"
          >Всемирный конгресс узбеков и узбекистанцев</a
        >
        выразил благодарность проекту «Гастарбайтеры под защитой».
      </div>
      <div v-for="(migrant_workers_under_protection, index) in migrant_workers_under_protectionArray" :index="index" :key="migrant_workers_under_protection.index">
        <h3>{{ migrant_workers_under_protection.title }}</h3>

        <div class="explication" v-html="migrant_workers_under_protection.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="migrant_workers_under_protection.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss + Afront — Gastarbeiters Under Protection | Кюс + Афронт — Гастарбайтеры под защитой',
      meta: [
        { property: 'og:title', content: 'Kiuss + Afront — Gastarbeiters Under Protection | Кюс + Афронт — Гастарбайтеры под защитой' },
        { property: 'og:image', content: '../images/projects/migrant_workers_under_protection/1.jpg' },
        { name: 'twitter:image', content: '../images/projects/migrant_workers_under_protection/1.jpg' },
      ],
    },
    data: function() {
      return {
        migrant_workers_under_protectionArray: [
          { id: 1, title: null, body: null, img: '/images/projects/migrant_workers_under_protection/1.jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/5.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/6.jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/7.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/8.jpg',
          },
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/projects/migrant_workers_under_protection/9.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
