<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        A series of urban installations «Disposable Tableware»<br />Disposable tableware, spray paint, 2012 - 2014 <br /><br />As in our other installations, we mix inappropriate signifying in the
        city exterior, breaking the usual sign system of the city. Within the framework of this series, more than 100 such installations were glued together.
      </div>
      <div v-for="(disposable_tableware, index) in disposable_tablewareArray" v-bind:index="index" v-bind:key="disposable_tableware.index">
        <h3>{{ disposable_tableware.title }}</h3>

        <div class="explication" v-html="disposable_tableware.ebody"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="disposable_tableware.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Серия инсталляций «Тарелочки»<br />Одноразовая посуда, аэрозольные краски, 2012 - 2014 <br /><br />Как и в других наших инсталляциях, мы подмешиваем в городской экстерьер неуместные
        означающие, нарушая привычную знаковую систему города. В рамках этой серии было поклеено более 100 таких инсталляций.
      </div>
      <div v-for="(disposable_tableware, index) in disposable_tablewareArray" v-bind:index="index" v-bind:key="disposable_tableware.index">
        <h3>{{ disposable_tableware.title }}</h3>

        <div class="explication" v-html="disposable_tableware.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="disposable_tableware.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Disposable Tableware | Кюс — Тарелочки',
      meta: [
        { property: 'og:title', content: 'Kiuss — Disposable Tableware | Кюс — Тарелочки' },
        { property: 'og:image', content: '../images/projects/disposable_tableware/1.jpg' },
        { name: 'twitter:image', content: '../images/projects/disposable_tableware/1.jpg' },
      ],
    },
    data: function() {
      return {
        disposable_tablewareArray: [
          { id: 1, title: null, body: null, img: '/images/projects/disposable_tableware/1.jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/5.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/6.jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/7.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/8.jpg',
          },
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/9.jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/10.jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/11.jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/projects/disposable_tableware/12.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
