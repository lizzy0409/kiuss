<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        Construction fences and other unsightly things in our city have been covered up with banners with flowers, so a series of works on this theme was born. The series consists of six street works
        and three plates, presented as original banners stretched on a stretcher. Read more about the project in the <a href="https://www.yuga.ru/articles/society/7992.html">interview</a> (in
        Russian).
      </div>
      <div v-for="(simulation_welfare, index) in simulation_welfareArray" :index="index" :key="simulation_welfare.index">
        <div class="explication" v-html="simulation_welfare.ebody"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="simulation_welfare.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Строительные заборы и прочие неприглядные вещи в нашем городе стали завешивать баннерами с цветочками, в связи с чем родилась серия работ на эту тему. Серия состоит из шести уличных работ и
        трёх «станковых», представленных в виде оригинальных баннеров, натянутых на подрамник. Подробнее о проекте читайте в <a href="https://www.yuga.ru/articles/society/7992.html">интервью</a>.
      </div>
      <div v-for="(simulation_welfare, index) in simulation_welfareArray" :index="index" :key="simulation_welfare.index">
        <div class="explication" v-html="simulation_welfare.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="simulation_welfare.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Simulation of Welfare | Кюс — Симуляция благополучия',
      meta: [
        { property: 'og:title', content: 'Kiuss — Simulation of Welfare | Кюс — Симуляция благополучия' },
        { property: 'og:image', content: '../images/projects/simulation_welfare/1.jpg' },
        { name: 'twitter:image', content: '../images/projects/simulation_welfare/1.jpg' },
      ],
    },
    data: function() {
      return {
        simulation_welfareArray: [
          { id: 1, title: null, body: '«Симуляция благополучия»<br>Тушь, 2015', ebody: '«Simulation of welfare»<br>Ink, 2015', img: '/images/projects/simulation_welfare/1.jpg' },
          {
            id: 2,
            title: null,
            body: '«Симуляция благополучия»<br>Тушь, 2015',
            ebody: '«Simulation of welfare»<br>Ink, 2015',
            img: '/images/projects/simulation_welfare/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: '«Симуляция благополучия»<br>Тушь, 2015',
            ebody: '«Simulation of welfare»<br>Ink, 2015',
            img: '/images/projects/simulation_welfare/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: '«Симуляция благополучия»<br>Тушь, 2015',
            ebody: '«Simulation of welfare»<br>Ink, 2015',
            img: '/images/projects/simulation_welfare/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: '«Симуляция благополучия»<br>Тушь, 2015',
            ebody: '«Simulation of welfare»<br>Ink, 2015',
            img: '/images/projects/simulation_welfare/5.jpg',
          },
          {
            id: 6,
            title: null,
            body: '«Симуляция благополучия»<br>Оригинальный баннер, аэрозольная краска, 2015',
            ebody: '«Simulation of welfare»<br>Original banner, spray paint, 2015',
            img: '/images/projects/simulation_welfare/6.jpg',
          },
          {
            id: 7,
            title: null,
            body: '«Шикарный букет»<br>Оригинальный баннер, 60х120см, 2016',
            ebody: '«Beautiful bouquet»<br>Original banner, 60x120cm, 2016',
            img: '/images/projects/simulation_welfare/7.jpg',
          },
          {
            id: 8,
            title: null,
            body: '«Поле одуванчиков»<br>Оригинальный баннер, 60х120см, 2016',
            ebody: '«The dandelion field»<br>Original banner, 60x120cm, 2016',
            img: '/images/projects/simulation_welfare/8.jpg',
          },
          {
            id: 9,
            title: null,
            body: '«Чудные ромашки»<br>Оригинальный баннер, 60х120см, 2016',
            ebody: '«Nice chamomiles»<br>Original banner, 60x120cm, 2016',
            img: '/images/projects/simulation_welfare/9.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
