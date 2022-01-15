<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        «Absurd Inscriptions»<br />Ink, 2013 <br /><br />A series of street inscriptions that are absurd not so much because of their allogical plot (which is interesting at least from a semiotic
        point of view, as a method of <a href="https://instructions.stranno.su/en/#denaturalization" target="_blank">denaturalization</a>), but because they are in the context of the street and are
        presented by passersby who are not ready for such messages, and as a result of which there is the
        <a href="https://instructions.stranno.su/en/#the_moment_of_detection" target="_blank">moment of detection</a>. Also see the project with <a href="/strange_posters">posters</a>.
      </div>
      <div v-for="(absurd_inscriptions, index) in absurd_inscriptionsArray" v-bind:index="index" v-bind:key="absurd_inscriptions.index">
        <h3>{{ absurd_inscriptions.title }}</h3>

        <div class="explication" v-html="absurd_inscriptions.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="absurd_inscriptions.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        «Абсурдные фразы»<br />Тушь, 2013 <br /><br />Серия уличных надписей, которые абсурдны не столько в силу своего аллогичного сюжета (что интересно как минимум с семиотической точки зрения, как
        метод <a href="https://instructions.stranno.su/ru/#denaturalization" target="_blank">денатурализации</a>), сколько потому, что находятся в контексте улицы и представлены прохожим, не готовым к
        таким сообщениям, в результате чего и возникает <a href="https://instructions.stranno.su/ru/#the_moment_of_detection" target="_blank">момент обнаружения</a>. Также смотрите проект с
        <a href="/strange_posters">постерами</a>.
      </div>
      <div v-for="(absurd_inscriptions, index) in absurd_inscriptionsArray" v-bind:index="index" v-bind:key="absurd_inscriptions.index">
        <h3>{{ absurd_inscriptions.title }}</h3>

        <div class="explication" v-html="absurd_inscriptions.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="absurd_inscriptions.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Absurd Inscriptions | Кюс — Абсурдные фразы',
      meta: [
        { property: 'og:title', content: 'Kiuss — Absurd Inscriptions | Кюс — Абсурдные фразы' },
        { property: 'og:image', content: '../images/projects/absurd_inscriptions/(2).jpg' },
        { name: 'twitter:image', content: '../images/projects/absurd_inscriptions/(2).jpg' },
      ],
    },
    data: function() {
      return {
        absurd_inscriptionsArray: [
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(9).jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/11.jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(12).jpg',
          },
          {
            id: 28,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(28).jpg',
          },
          {
            id: 1,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(1).jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(2).jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(3).jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(4).jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(5).jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(6).jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(7).jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(8).jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(10).jpg',
          },
          {
            id: 13,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(13).jpg',
          },
          {
            id: 14,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(14).jpg',
          },
          {
            id: 15,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(15).jpg',
          },
          {
            id: 23,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(23).jpg',
          },
          {
            id: 24,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(24).jpg',
          },
          {
            id: 25,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(25).jpg',
          },
          {
            id: 26,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(26).jpg',
          },
          {
            id: 27,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(27).jpg',
          },
          {
            id: 29,
            title: null,
            body: null,
            img: '/images/projects/absurd_inscriptions/(29).jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
