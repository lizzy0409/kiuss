<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">A series of posters «DADA»<br />Print on paper, 2012</div>

      <div v-for="(dada_posters, index) in dada_postersArray" v-bind:index="index" v-bind:key="dada_posters.index">
        <h3>{{ dada_posters.title }}</h3>

        <div class="explication" v-html="dada_posters.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="dada_posters.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">Серия постеров «DADA»<br />Печать на бумаге, 2012</div>

      <div v-for="(dada_posters, index) in dada_postersArray" v-bind:index="index" v-bind:key="dada_posters.index">
        <h3>{{ dada_posters.title }}</h3>

        <div class="explication" v-html="dada_posters.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="dada_posters.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Dada Posters | Кюс — Постеры DADA',
      meta: [
        { property: 'og:title', content: 'Kiuss — Dada Posters | Кюс — Постеры DADA' },
        { property: 'og:image', content: '../images/projects/dada_posters/5.jpg' },
        { name: 'twitter:image', content: '../images/projects/dada_posters/5.jpg' },
      ],
    },
    data: function() {
      return {
        dada_postersArray: [
          { id: 1, title: null, body: 'Серия постеров «DADA»<br>Печать на бумаге, 2012', ebody: 'A series of posters «DADA»<br>Print on paper, 2012', img: '/images/projects/dada_posters/(1).jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/(3).jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/(4).jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/(5).jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/(6).jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/dada_posters/(7).jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
