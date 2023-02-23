<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">Other</div>
      <div v-for="(other, index) in otherArray" :index="index" :key="other.index">
        <div class="explication" v-html="other.ebody"></div>
        <h3 v-html="other.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="other.img" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="annotation">Разное</div>
      <div v-for="(other, index) in otherArray" :index="index" :key="other.index">
        <div class="explication" v-html="other.body"></div>
        <h3 v-html="other.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="other.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Other | Кюс — Разное',
      meta: [
        { property: 'og:title', content: 'Kiuss — Other | Кюс — Разное' },
        { property: 'og:image', content: '../images/projects/other/volnovaja1.jpg' },
        { name: 'twitter:image', content: '../images/projects/other/volnovaja1.jpg' },
      ],
    },
    data: function() {
      return {
        otherArray: [
          {
            id: 1,
            title: null,
            body: '«Волновая»<br>Поролон, акрил, 10х1м, 2017',
            ebody: '«The Wave Thing»<br>Polyurethane foam, acrylic, 10х1m, 2017',
            img: '/images/projects/other/volnovaya1.jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/other/volnovaya2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/other/volnovaya3.jpg',
          },
          {
            id: 19,
            title:
              "<iframe src='https://www.youtube.com/embed/rkgNUxwJWW4?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen=''</iframe>",
            body: '«15.04.2018»<br>Видеодокументация проектов с постерами и курсорами, 2018',
            ebody: '«15.04.2018»<br>Video documentation of projects with posters and cursors, 2018',
            img: '/images/projects/other/15.04.18.jpg',
          },
          {
            id: 4,
            title: null,
            body: '«Месседж»<br>Бумага, аэрозоль, 1х1.5м, 2015',
            ebody: '«Massage»<br>Paper, spray paint, 1x1.5m, 2015',
            img: '/images/projects/other/message.jpg',
          },
          {
            id: 5,
            title: null,
            body:
              '«Я ничего не рекламирую»<br>В течение месяца каждую субботу в 19:00 на пересечении ул.Красная/Мира в городе Краснодаре раздавал 40 флаеров с надписью «я ничего не рекламирую», 2015',
            ebody:
              "«I don't advertise anything»<br>In the course of a month, every Saturday at 19:00, at the downtown of Krasnodar, I gave away 40 flyers with the inscription «I don't advertise anything», 2015",
            img: '/images/projects/other/flaer.jpg',
          },
          {
            id: 6,
            title:
              "<iframe src='https://www.youtube.com/embed/67YjuCSCmVs?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe><iframe src='https://www.youtube.com/embed/xek55LS7ipM?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
            body:
              '«Сожжение»<br>Документация уничтожения нескольких рисунков, показавшихся в определённый момент неудачными, 2014',
            ebody:
              '«Burning»<br>Documentation of the destruction of several drawings that appeared to be unsuccessful at some point, 2014',
            img: '/images/projects/other/fire.jpg',
          },
          {
            id: 7,
            title: null,
            body:
              '«Объявления»<br>Реальные объявления в течение нескольких дней срывались с рекламных стендов и затем были собраны в виде инсталляции, 2012',
            ebody:
              '«Ads»<br>Real ads were torn off the advertising stands for several days and then collected in the form of an installation, 2012',
            img: '/images/projects/other/q1.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/other/q2.jpg',
          },
          {
            id: 9,
            title: null,
            body: '«Зомби»<br>Печать на бумаге, 2012',
            ebody: '«Zombies»<br>Printing on paper, 2012',
            img: '/images/projects/other/zombie1.jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/projects/other/zombie2.jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/projects/other/zombie3.jpg',
          },
          {
            id: 12,
            title: null,
            body: '«Окрашено!»<br>Масляная краска, ламинированная бумага, печать, 2012',
            ebody: '«Painted!»<br>Oil paint, laminated paper, printing, 2012',
            img: '/images/projects/other/painted.jpg',
          },
          {
            id: 13,
            title: null,
            body:
              '«Мона Лиза»<br>Однажды, где-то в России, проводился большой фестиваль стрит-арта. Когда все работы были уже созданы, выяснилось, что руководство фестиваля кое-что не согласовало, и власти города, в котором проводился фестиваль, заявили, что работы будут уничтожены и закрашены. Так у нас появилась эта работа. Она, конечно, посвящена не только этому событию, а вообще тому факту, что уличное творчество однажды целенаправленно уничтожается.<br>Постер, акрил, 2012',
            ebody:
              '«Mona Lisa»<br>Once, somewhere in Russia, there was a big street art festival. When all the works had already been created, it turned out that the festival management had not agreed on something, and the authorities of the city where the festival was held declared that the works would be destroyed and painted. So we have this work. Of course, is devoted not only to this event, but to the fact that street art is once purposefully destroyed.<br>Poster, acrylic, 2012',
            img: '/images/projects/other/mona_lisa.jpg',
          },
          {
            id: 14,
            title: null,
            body: '«Супрематические постеры»<br>Печать на бумаге, 2013',
            ebody: '«Suprematic posters»<br>Printing on paper, 2013',
            img: '/images/projects/other/suprematic_poster1.jpg',
          },
          {
            id: 16,
            title: null,
            body: null,
            img: '/images/projects/other/suprematic_poster3.jpg',
          },
          {
            id: 17,
            title: null,
            body: null,
            img: '/images/projects/other/suprematic_poster4.jpg',
          },
          {
            id: 18,
            title: null,
            body: null,
            img: '/images/projects/other/suprematic_poster5.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
