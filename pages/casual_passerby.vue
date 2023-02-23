<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        This photo project is an attempt to pay close attention to those who represent the
        collective image of a casual passerby merging with the urban landscape.
      </div>
      <div
        v-for="(casual_passerby, index) in casual_passerbyArray"
        :index="index"
        :key="casual_passerby.index"
      >
        <h3>{{ casual_passerby.title }}</h3>

        <div class="explication" v-html="casual_passerby.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="casual_passerby.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Этот фото-проект — попытка обратить пристальное внимание на тех, кто олицетворяет
        собирательный образ случайного прохожего, сливающегося с городским пейзажем.
      </div>
      <div
        v-for="(casual_passerby, index) in casual_passerbyArray"
        :index="index"
        :key="casual_passerby.index"
      >
        <h3>{{ casual_passerby.title }}</h3>

        <div class="explication" v-html="casual_passerby.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="casual_passerby.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Сasual Passerby | Кюс — Случайные прохожие',
      meta: [
        { property: 'og:title', content: 'Kiuss — Сasual Passerby | Кюс — Случайные прохожие' },
        { property: 'og:image', content: '../images/photography/casual_passerby/14.jpg' },
        { name: 'twitter:image', content: '../images/photography/casual_passerby/14.jpg' },
      ],
    },
    data: function() {
      return {
        casual_passerbyArray: [
          {
            id: 1,
            title: null,
            body: null,
            ebody: null,
            img: '/images/photography//casual_passerby/(11).jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(9).jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(12).jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(8).jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/14.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(16).jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/10.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(13).jpg',
          },
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(15).jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(7).jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(6).jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(5).jpg',
          },
          {
            id: 13,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(4).jpg',
          },
          {
            id: 14,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(3).jpg',
          },
          {
            id: 16,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(1).jpg',
          },
          {
            id: 17,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(17).jpg',
          },
          {
            id: 18,
            title: null,
            body: null,
            img: '/images/photography/casual_passerby/(18).jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
