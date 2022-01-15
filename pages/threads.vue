<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">A series of urban installation «Threads»<br />Cotton threads, 2017</div>
      <div v-for="(threads, index) in threadsArray" v-bind:index="index" v-bind:key="threads.index">
        <div v-html="threads.body" class="explication"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="threads.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">Серия уличных инсталляций «Нити»<br />Хлопковые нити, 2017</div>
      <div v-for="(threads, index) in threadsArray" v-bind:index="index" v-bind:key="threads.index">
        <div v-html="threads.body" class="explication"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="threads.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Threads | Кюс — Нити',
      meta: [
        { property: 'og:title', content: 'Kiuss — Threads | Кюс — Нити' },
        { property: 'og:image', content: '../images/projects/threads/3.1.jpg' },
        { name: 'twitter:image', content: '../images/projects/threads/3.1.jpg' },
      ],
    },
    data() {
      return {
        threadsArray: [
          {
            id: 28,
            title: null,
            body: '«9»<br>2017',
            img: '/images/projects/threads/9.1.jpg',
          },
          {
            id: 29,
            title: null,
            body: null,
            img: '/images/projects/threads/9.2.jpg',
          },
          {
            id: 30,
            title: null,
            body: null,
            img: '/images/projects/threads/9.3.jpg',
          },
          {
            id: 31,
            title: null,
            body: null,
            img: '/images/projects/threads/9.4.jpg',
          },
          {
            id: 9,
            title: null,
            body: '«3»<br>2017',
            img: '/images/projects/threads/3.1.jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/projects/threads/3.2.jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/projects/threads/3.3.jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/projects/threads/3.4.jpg',
          },
          {
            id: 13,
            title: null,
            body: '«4»<br>2017',
            img: '/images/projects/threads/4.1.jpg',
          },
          {
            id: 14,
            title: null,
            body: null,
            img: '/images/projects/threads/4.2.jpg',
          },
          {
            id: 15,
            title: null,
            body: null,
            img: '/images/projects/threads/4.3.jpg',
          },
          {
            id: 16,
            title: null,
            body: null,
            img: '/images/projects/threads/4.4.jpg',
          },
          {
            id: 17,
            title: null,
            body: '«5»<br>2017',
            img: '/images/projects/threads/5.1.jpg',
          },
          {
            id: 18,
            title: null,
            body: null,
            img: '/images/projects/threads/5.2.jpg',
          },
          {
            id: 19,
            title: null,
            body: null,
            img: '/images/projects/threads/5.3.jpg',
          },
          {
            id: 20,
            title: null,
            body: null,
            img: '/images/projects/threads/5.4.jpg',
          },
          {
            id: 25,
            title: null,
            body: '«8»<br>2017',
            img: '/images/projects/threads/8.1.jpg',
          },
          {
            id: 26,
            title: null,
            body: null,
            img: '/images/projects/threads/8.2.jpg',
          },
          {
            id: 27,
            title: null,
            body: null,
            img: '/images/projects/threads/8.3.jpg',
          },
          {
            id: 32,
            title: null,
            body: '«10»<br>2017',
            img: '/images/projects/threads/10.1.jpg',
          },
          {
            id: 33,
            title: null,
            body: null,
            img: '/images/projects/threads/10.2.jpg',
          },
          {
            id: 34,
            title: null,
            body: null,
            img: '/images/projects/threads/10.3.jpg',
          },
          {
            id: 1,
            title: null,
            body: '«1»<br>2017',
            img: '/images/projects/threads/1.1.jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/threads/1.2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/threads/1.3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/threads/1.4.jpg',
          },
          {
            id: 5,
            title: null,
            body: '«2»<br>2017',
            img: '/images/projects/threads/2.1.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/threads/2.2.jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/threads/2.3.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/threads/2.4.jpg',
          },
          {
            id: 21,
            title: null,
            body: '«6»<br>2017',
            img: '/images/projects/threads/6.1.jpg',
          },
          {
            id: 22,
            title: null,
            body: null,
            img: '/images/projects/threads/6.2.jpg',
          },
          {
            id: 23,
            title: null,
            body: '«7»<br>2017',
            img: '/images/projects/threads/7.1.jpg',
          },
          {
            id: 24,
            title: null,
            body: null,
            img: '/images/projects/threads/7.2.jpg',
          },
          {
            id: 35,
            title: null,
            body: '«11»<br>2018',
            img: '/images/projects/threads/11.1.jpg',
          },
          {
            id: 36,
            title: null,
            body: null,
            img: '/images/projects/threads/11.2.jpg',
          },
          {
            id: 37,
            title: null,
            body: null,
            img: '/images/projects/threads/11.3.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
