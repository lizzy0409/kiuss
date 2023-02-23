<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        Installation «Reserved Scaffolding» <br />Collaboration with art-group Afront. Mixed media, 2015 <br /><br />"Scaffolding is the sacral symbol of modern Krasnodar, the city of eternal
        construction and selective restoration works. Concern for the architectural heritage is perceived by the authorities only as a bargaining chip of political populism, and the future of the city
        disappears in the tightness of housing complexes and shopping and entertainment centers. The scaffolding are located behind the fencing tape as a special museum exhibit, as a forbidden zone.
        The citizens are also protected from making decisions related to the existence and development of the city. If Krasnodar is a museum, its residents are either passive spectators or sleeping
        wardrobe attendants. Our work reminds us: behind the hypocritical facade of the Cossack paradise is the absence of the past, the helplessness of the present and the impossibility of the
        future."
      </div>
      <div v-for="(scaffolding, index) in scaffoldingArray" :index="index" :key="scaffolding.index">
        <h3>{{ scaffolding.title }}</h3>

        <div class="explication" v-html="scaffolding.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="scaffolding.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Инсталляция «Заповедные леса» <br />Совместно с арт-группой Афронт. Смешанная техника, 2015 <br /><br />Строительные леса — сакральный символ современного Краснодара, города вечной стройки и
        выборочных реставрационных работ. Забота об архитектурном наследии воспринимается властью только как разменная монета политического популизма, а будущее города исчезает в тесноте возводимых
        жилищных комплексов и торгово-развлекательных центров. Леса находятся за оградительной лентой как особый музейный экспонат, как запретная зона. Так и горожане ограждены от принятия решений,
        связанных с существованием и развитием города. Если Краснодар — музей, то его жители либо пассивные зрители, либо спящие гардеробщики. Наша работа напоминает: за лицемерным фасадом казачьего
        рая скрывается отсутствие прошлого, беспомощность настоящего и невозможность будущего.
      </div>
      <div v-for="(scaffolding, index) in scaffoldingArray" :index="index" :key="scaffolding.index">
        <h3>{{ scaffolding.title }}</h3>

        <div class="explication" v-html="scaffolding.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="scaffolding.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss + Afront — Reserved Scaffolding | Кюс + Афронт — Заповедные леса',
      meta: [
        { property: 'og:title', content: 'Kiuss + Afront — Reserved Scaffolding | Кюс + Афронт — Заповедные леса' },
        { property: 'og:image', content: '../images/projects/scaffolding/4.jpg' },
        { name: 'twitter:image', content: '../images/projects/scaffolding/4.jpg' },
      ],
    },
    data: function() {
      return {
        scaffoldingArray: [
          { id: 1, title: null, body: null, ebody: null, img: '/images/projects/scaffolding/4.jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/scaffolding/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/scaffolding/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/scaffolding/1.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/scaffolding/5.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
