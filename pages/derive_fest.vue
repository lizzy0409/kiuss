<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        A psychogeography festival «Dérive» organized by the participants themselves, without administrative or material support, in which they give up all accommodation and means of communication in
        order to gain special experience or to extract emotions and experiences from the surrounding environment. The aim of the festival is to bring together different urban currents, such as:
        <br />— Psychogeography (study of the effects of the territorial environment) <br />— Diggering (study of abandoned sites in the city) <br />— Roofing (contemplation of the city from the roofs
        of buildings) <br />— Parkour (as freedom of movement) <br />— Street art (as a form of creativity)

        <div>
          <br />
          <b>Documentation:</b> <br />See festival <a href="https://yadi.sk/i/aAjeLwfMtEvHn" target="_blank">report</a> <br /><a href="https://www.vk.com/dreiffestival" target="_blank">VK</a> group
          <br />We also made a <a href="https://yandex.ru/maps/-/CBBGvGHqdB" target="_blank">map</a> of the drifting
        </div>
      </div>
      <div v-for="(drift_fest, index) in drift_festArray" :index="index" :key="drift_fest.index">
        <h3>{{ drift_fest.title }}</h3>

        <div class="explication" v-html="drift_fest.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="drift_fest.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Фестиваль психогеографии, организуемый своими силами, без административной и какой-либо материальной поддержки, в рамках которого участники отказываются от всякого жилья и средств
        коммуникации, с целью приобретения особого опыта, либо извлечения эмоций и переживаний от окружающего пространства. Фестиваль призван объединить различные урбанистические течения, такие
        как:<br />— психогеография (изучение эффектов территориального окружения)<br />— диггерство (изучение брошенных мест в городе)<br />— руферство (созерцание города с крыш зданий)<br />— паркур
        (как свобода перемещения)<br />— стрит-арт (как форма творчества)<br /><br /><b>Документация:</b><br /><a href="https://www.vk.com/dreiffestival" target="_blank">vk</a><br /><a
          href="https://yadi.sk/i/aAjeLwfMtEvHn"
          target="_blank"
          >Отчёт</a
        ><br /><a href="https://yandex.ru/maps/-/CBBGvGHqdB" target="_blank">Карта дрейфующего</a>
      </div>
      <div v-for="(drift_fest, index) in drift_festArray" :index="index" :key="drift_fest.index">
        <h3>{{ drift_fest.title }}</h3>

        <div class="explication" v-html="drift_fest.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="drift_fest.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Dérive festival | Кюс — Фестиваль Дрейф',
      meta: [
        { property: 'og:title', content: 'Kiuss — Dérive festival | Кюс — Фестиваль Дрейф' },
        { property: 'og:image', content: '../images/projects/drift_fest/2.jpg' },
        { name: 'twitter:image', content: '../images/projects/drift_fest/2.jpg' },
      ],
    },
    data: function() {
      return {
        drift_festArray: [
          {
            id: 1,
            title: null,
            body: null,
            img: '/images/projects/drift_fest/1.jpg',
          },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/drift_fest/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/drift_fest/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/drift_fest/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/drift_fest/5.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
