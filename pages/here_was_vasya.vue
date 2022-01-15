<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        <div>«Here was Vasya»<br />Spray paint, 2012</div>
        <div>
          This series refers to the established Russian phraseology "here was Vasya", meaning any senseless inscription on the wall. «Vasya is a tagger who wants to become famous by drawing his name
          everywhere. He's a satirist over all the perishability of his work. A little man who tries to climb up the stairs so that everyone can see that Vasya was here.»
        </div>
      </div>

      <div v-for="(here_was_vasya, index) in here_was_vasyaArray" v-bind:index="index" v-bind:key="here_was_vasya.index">
        <div class="explication" v-html="here_was_vasya.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="here_was_vasya.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        <div>«Тут был Вася»<br />Аэрозольная краска, 2012</div>
        <div>
          Вася — тэггер, который хочет прославиться, рисуя везде своё имя. Он — сатира над всей бренностью его занятия. Маленький человечек, который с помощью лестниц пытается вскарабкаться повыше,
          чтобы все видели, что здесь был Вася.
        </div>
      </div>

      <div v-for="(here_was_vasya, index) in here_was_vasyaArray" v-bind:index="index" v-bind:key="here_was_vasya.index">
        <div v-html="here_was_vasya.body" class="explication"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="here_was_vasya.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Here was Vasya | Кюс — Здесь был Вася',
      meta: [
        { property: 'og:title', content: 'Kiuss — Here was Vasya | Кюс — Здесь был Вася' },
        { property: 'og:image', content: '../images/projects/here_was_vasya/1.jpg' },
        { name: 'twitter:image', content: '../images/projects/here_was_vasya/1.jpg' },
      ],
    },
    data() {
      return {
        here_was_vasyaArray: [
          { id: 1, title: null, body: 'Тут был Вася<br>Аэрозольная краска, 2012', ebody: 'Here was Vasya<br>Spray paint, 2012', img: '/images/projects/here_was_vasya/1.jpg' },
          {
            id: 2,
            title: null,
            body: 'Граффити помогает мне самовыразиться<br>Аэрозольная краска, 2012',
            ebody: 'Graffiti helps me express myself<br>Spray paint, 2012',
            img: '/images/projects/here_was_vasya/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: 'Я рисую на стенах города, чтобы прославиться<br>Аэрозольная краска, 2012',
            ebody: "I'm painting on the walls of the city to become famous<br>Spray paint, 2012",
            img: '/images/projects/here_was_vasya/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: 'Тут был Вася<br>Аэрозольная краска, 2012',
            ebody: 'Here was Vasya<br>Spray paint, 2012',
            img: '/images/projects/here_was_vasya/4.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
