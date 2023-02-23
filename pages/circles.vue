<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">A series of urban installations «The Circles»<br />PVC, acrylic, 2013</div>
      <div v-for="(circles, index) in circlesArray" :index="index" :key="circles.index">
        <h3>{{ circles.title }}</h3>

        <div class="explication" v-html="circles.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="circles.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">Серия инсталляций «Круги»<br />ПВХ, акрил, 2013</div>

      <div v-for="(circles, index) in circlesArray" :index="index" :key="circles.index">
        <h3>{{ circles.title }}</h3>

        <div class="explication" v-html="circles.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="circles.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Сircles | Кюс — Круги',
      meta: [
        { property: 'og:title', content: 'Kiuss — Сircles | Кюс — Круги' },
        { property: 'og:image', content: '../images/projects/circles/3.jpg' },
        { name: 'twitter:image', content: '../images/projects/circles/3.jpg' },
      ],
    },
    data: function() {
      return {
        circlesArray: [
          {
            id: 1,
            title: null,
            body: 'Серия инсталляций «Круги»<br>ПВХ, акрил, 2013',
            ebody: 'A series of urban installations «The Circles»<br>PVC, acrylic, 2013',
            img: '/images/projects/circles/3.jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/circles/(2).jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/circles/(1).jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/circles/(4).jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/circles/(5).jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/circles/(6).jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/circles/7.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
