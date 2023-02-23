<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">The short video, which does not have a storyline, is just a set of independent scenes, in which strange things happen. All the scene names are in Polish.<br />2013</div>
      <div v-for="(to_jest_film, index) in to_jest_filmArray" :index="index" :key="to_jest_film.index">
        <div class="explication" v-html="to_jest_film.body"></div>

        <h3 v-html="to_jest_film.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="to_jest_film.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Короткометражный ролик, у которого нет сюжетной линии, он лишь представляет собой совокупность независимых сцен, в которых происходят странные вещи. Все названия сцен на польском языке.<br />2013
      </div>
      <div v-for="(to_jest_film, index) in to_jest_filmArray" :index="index" :key="to_jest_film.index">
        <div class="explication" v-html="to_jest_film.body"></div>

        <h3 v-html="to_jest_film.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="to_jest_film.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — To Jest Film | Кюс — Фильм «Фильм»',
      meta: [
        { property: 'og:title', content: 'Kiuss — To Jest Film | Кюс — Фильм «Фильм»' },
        { property: 'og:image', content: '../images/projects/to_jest_film/logo.jpg' },
        { name: 'twitter:image', content: '../images/projects/to_jest_film/logo.jpg' },
      ],
    },
    data: function() {
      return {
        to_jest_filmArray: [
          {
            id: 1,
            title: "<iframe src='https://www.youtube.com/embed/5Vy22GmFqvc?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen=''></iframe>",
            body: null,
            img: '/images/projects/to_jest_film/logo.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
