<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        This series of photos aims to find some new information in rather prosaic things and landscapes and, perhaps, to turn everyday life into a kind of hobby.
      </div>
      <div v-for="(another_view, index) in another_viewArray" :index="index" :key="another_view.index">
        <h3>{{ another_view.title }}</h3>

        <div class="explication" v-html="another_view.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="another_view.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Эта серия фотографий ставит своей целью найти в довольно прозаических вещах и пейзажах какую-то новую информацию и, возможно, превратить повседневность в своего рода увлечение.
      </div>
      <div v-for="(another_view, index) in another_viewArray" :index="index" :key="another_view.index">
        <h3>{{ another_view.title }}</h3>

        <div class="explication" v-html="another_view.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="another_view.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Another View | Кюс — Другой ракурс',
      meta: [
        { property: 'og:title', content: 'Kiuss — Another View | Кюс — Другой ракурс' },
        { property: 'og:image', content: '../images/photography/another_view/14.jpg' },
        { name: 'twitter:image', content: '../images/projects/another_view/14.jpg' },
      ],
    },
    data: function() {
      return {
        another_viewArray: [
          {
            id: 1,
            title: null,
            body: null,
            ebody: null,
            img: '/images/photography/another_view/(11).jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/photography/another_view/9.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/photography/another_view/(12).jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/photography/another_view/(8).jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/photography/another_view/14.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/photography/another_view/(16).jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/photography/another_view/(10).jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/photography/another_view/(13).jpg',
          },
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/photography/another_view/(15).jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/photography/another_view/(7).jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/photography/another_view/(6).jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/photography/another_view/(5).jpg',
          },
          {
            id: 13,
            title: null,
            body: null,
            img: '/images/photography/another_view/(4).jpg',
          },
          {
            id: 14,
            title: null,
            body: null,
            img: '/images/photography/another_view/(3).jpg',
          },
          {
            id: 15,
            title: null,
            body: null,
            img: '/images/photography/another_view/(2).jpg',
          },
          {
            id: 16,
            title: null,
            body: null,
            img: '/images/photography/another_view/(1).jpg',
          },
          {
            id: 17,
            title: null,
            body: null,
            img: '/images/photography/another_view/(17).jpg',
          },
          {
            id: 18,
            title: null,
            body: null,
            img: '/images/photography/another_view/(18).jpg',
          },
          {
            id: 19,
            title: null,
            body: null,
            img: '/images/photography/another_view/(19).jpg',
          },
          {
            id: 20,
            title: null,
            body: null,
            img: '/images/photography/another_view/(20).jpg',
          },
          {
            id: 21,
            title: null,
            body: null,
            img: '/images/photography/another_view/(21).jpg',
          },
          {
            id: 22,
            title: null,
            body: null,
            img: '/images/photography/another_view/(22).jpg',
          },
          {
            id: 23,
            title: null,
            body: null,
            img: '/images/photography/another_view/(23).jpg',
          },
          {
            id: 24,
            title: null,
            body: null,
            img: '/images/photography/another_view/(24).jpg',
          },
          {
            id: 25,
            title: null,
            body: null,
            img: '/images/photography/another_view/(25).jpg',
          },
          {
            id: 26,
            title: null,
            body: null,
            img: '/images/photography/another_view/(26).jpg',
          },
          {
            id: 27,
            title: null,
            body: null,
            img: '/images/photography/another_view/(27).jpg',
          },
          {
            id: 28,
            title: null,
            body: null,
            img: '/images/photography/another_view/(28).jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
