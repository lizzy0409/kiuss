<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        Compilation of clips on which the process of street activity is filmed. Flashing traffic lights act as an allegory of night and early morning, when traffic lights usually do not work, and we
        start our own work. <br />2013
      </div>

      <div v-for="(when_the_traffic_lights_are_off, index) in when_the_traffic_lights_are_offArray" :index="index" :key="when_the_traffic_lights_are_off.index">
        <div class="explication" v-html="when_the_traffic_lights_are_off.body"></div>

        <h3 v-html="when_the_traffic_lights_are_off.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="when_the_traffic_lights_are_off.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Небольшая нарезка из роликов, на которых снят процесс уличной деятельности. Мигающий светофор выступает как аллегория ночи и раннего утра, когда светофоры обычно не работают, а мы начинаем
        своё дело.<br />2013
      </div>
      <div v-for="(when_the_traffic_lights_are_off, index) in when_the_traffic_lights_are_offArray" :index="index" :key="when_the_traffic_lights_are_off.index">
        <div class="explication" v-html="when_the_traffic_lights_are_off.body"></div>

        <h3 v-html="when_the_traffic_lights_are_off.title"></h3>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="when_the_traffic_lights_are_off.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — When the traffic lights are off | Кюс — Когда не работают светофоры',
      meta: [
        { property: 'og:title', content: 'Kiuss — When the traffic lights are off | Кюс — Когда не работают светофоры' },
        { property: 'og:image', content: '../images/projects/when_the_traffic_lights_are_off/logo.png' },
        { name: 'twitter:image', content: '../images/projects/when_the_traffic_lights_are_off/logo.png' },
      ],
    },
    data: function() {
      return {
        when_the_traffic_lights_are_offArray: [
          {
            id: 1,
            title: "<iframe src='https://www.youtube.com/embed/WcWgByXkwss?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
            body: null,
            img: '/images/projects/when_the_traffic_lights_are_off/logo.png',
          },
        ],
      }
    },
  }
</script>

<style></style>
