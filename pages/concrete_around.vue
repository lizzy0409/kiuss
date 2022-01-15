<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        A series of street posters «Concrete Around»<br />Print on paper, 100x100cm, 2019 <br /><br />Continuation of the "<a href="/absurd_inscriptions">absurd inscriptions</a>" series. This phrase
        does not so much refer directly to concrete but to all artificial materials from which cities are formed — asphalt, brick, metal and plastic — that make it possible to "discover" a city and
        all the material that makes it up around you.
      </div>

      <div v-for="(concrete_around, index) in concrete_aroundArray" v-bind:index="index" v-bind:key="concrete_around.index">
        <h3>{{ concrete_around.title }}</h3>

        <div class="explication" v-html="concrete_around.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="concrete_around.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Серия уличных постеров «Вокруг бетон»<br />Бумага, печать, 100x100см, 2019 <br /><br />Продолжение серии "<a href="/absurd_inscriptions">абсурдных надписей</a>". Это словосочетание не столько
        отсылает непосредственно к бетону, сколько вообще ко всем искусственным материалам, из которых формируются города, — это и асфальт, и кирпич, и металл, и пластик — что позволяет как бы
        "обнаружить" вокруг себя город и всё материальное из чего он состоит.
      </div>
      <div v-for="(concrete_around, index) in concrete_aroundArray" v-bind:index="index" v-bind:key="concrete_around.index">
        <h3>{{ concrete_around.title }}</h3>

        <div class="explication" v-html="concrete_around.body"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="concrete_around.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Concrete Around | Кюс — Вокруг бетон',
      meta: [
        { property: 'og:title', content: 'Kiuss — Concrete Around | Кюс — Вокруг бетон' },
        { property: 'og:image', content: '../images/projects/concrete_around/5.jpg' },
        { name: 'twitter:image', content: '../images/projects/concrete_around/5.jpg' },
      ],
    },
    data: function() {
      return {
        concrete_aroundArray: [
          { id: 1, title: null, body: null, img: '/images/projects/concrete_around/1.jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/concrete_around/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/concrete_around/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/concrete_around/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/concrete_around/5.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/concrete_around/6.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
