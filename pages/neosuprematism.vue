<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        It is an art movement that inherits the tradition of suprematism, but is distinguished by its voluminous rather than flat geometry and rather complex names. If the suprematists tried to find
        the beginning of painting by removing the background, colour and simplifying the silhouettes, then neosuprematism is not looking for either the beginning or the end of painting, it tries to
        create a void between the signifying and the signified to find new ways of linking the visual and the conceptual. Here you can see street works (murals and installations) and plates artwork.
        Within the framework of neosuprematism, see also the project <a href="/monotonous_objects">«Monotonous Objects»</a>.
      </div>
      <div v-for="(neosuprematism, index) in neosuprematismArray" :index="index" :key="neosuprematism.index">
        <div class="explication" v-html="neosuprematism.ebody"></div>
        <h3 v-html="neosuprematism.title"></h3>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="neosuprematism.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Направление, наследующее традицию супрематизма, однако отличающееся объёмной, а не плоской геометрией, а также довольно сложными названиями. Если супрематисты пытались найти начало живописи,
        изъяв фон, цвет и упростив силуэты, то неосупрематизм не ищет ни начала, ни конца живописи, он пытается создать пустоту между означающим и означаемым, чтобы где-то там найти новые способы
        связать визуальное и концептуальное. Здесь представлены как уличные работы (муралы и инсталляции), так и станковые работы. В рамках неосупрематизма смотрите также проект
        <a href="/monotonous_objects">«Тела однотонные»</a>.
      </div>
      <div v-for="(neosuprematism, index) in neosuprematismArray" :index="index" :key="neosuprematism.index">
        <div class="explication" v-html="neosuprematism.body"></div>
        <h3 v-html="neosuprematism.title"></h3>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="neosuprematism.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Neosuprematism | Кюс — Неосупрематизм',
      meta: [
        { property: 'og:title', content: 'Kiuss — Neosuprematism | Кюс — Неосупрематизм' },
        { property: 'og:image', content: '../images/projects/neosuprematism/ribbing.jpg' },
        { name: 'twitter:image', content: '../images/projects/neosuprematism/ribbing.jpg' },
      ],
    },
    data: function() {
      return {
        neosuprematismArray: [
          {
            id: 1,
            title: null,
            body: '«Предположение, что здесь шесть фигур, две из которых не видны с этой стороны»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«The assumption that there are six figures here, two of which are not visible from this side»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/predpolozhenie.jpg',
          },
          {
            id: 2,
            title: null,
            body: '«Что-то связанное с полётами и довольно быстрым движением»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«Something about flying and pretty fast movement»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/polety.jpg',
          },
          {
            id: 3,
            title: null,
            body: '«Составная механическая сущность в виде застывших распределённых пластин»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«Composite mechanical entity in the form of frozen distributed plates»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/sostavnaya.jpg',
          },
          {
            id: 4,
            title: null,
            body: '«Зеркализация и дубликация на неоднородном фоне»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«Mirroring and duplicating on a heterogeneous background»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/zerkalizacia.jpg',
          },
          {
            id: 5,
            title: null,
            body: '«.»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«.»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/tochka.jpg',
          },
          {
            id: 6,
            title: null,
            body: '«Вторжение в кромешный синий и противостояние ему»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«Invading the blue and confronting it»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/vtorzhenie.jpg',
          },
          {
            id: 7,
            title: null,
            body: '«Радикальный нюанс, нарушающий множество правил и меняющий весь смысл композиции»<br>ДВП, акрил, лак, 99х51см, 2018',
            ebody: '«A radical nuance that breaks a lot of rules and changes the meaning of the composition»<br>Fiberboard, acrylic, lacquer, 99x51cm, 2018',
            img: '/images/projects/neosuprematism/nuans.jpg',
          },
          {
            id: 8,
            title: null,
            body: '«Внезапный энтузиазм на фоне приподнятого настроения,<br>следствием которого являются четыре синие фигуры на зелёной плоскости»<br>ДСП, акрил, лак, 98х62см, 2018',
            ebody: '«Sudden enthusiasm against the backdrop of an elevated mood, <br>the result of which are four blue figures on a green plane»<br>Fiberboard, acrylic, lacquer, 98x62cm, 2018',
            img: '/images/projects/neosuprematism/intuziazm.jpg',
          },
          {
            id: 9,
            title: null,
            body: '«Апельсиновый архитектурный сон в нежно-голубом пространстве»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«Orange architectural sleep in a gentle blue space»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/son.jpg',
          },
          {
            id: 10,
            title: null,
            body: '«Очень синий трёхслойный турникет из какого-то метро»<br>ДВП, акрил, лак, 170х137см, 2018',
            ebody: '«A very blue three-layer turnstile from some subway station»<br>Fiberboard, acrylic, lacquer, 170x137cm, 2018',
            img: '/images/projects/neosuprematism/turniket.jpg',
          },
          {
            id: 11,
            title: null,
            body: '«Надежда на собственную стойкость перед лицом множества травмирующих переживаний»<br>ДВП, акрил, 80х70см, 2016',
            ebody: '«Hope for your own resilience in the face of many traumatic experiences»<br>Fiberboard, acrylic, lacquer, 80x70cm, 2016',
            img: '/images/projects/neosuprematism/hope.jpg',
          },
          {
            id: 12,
            title: null,
            body: '«Конец любви»<br>ДВП, акрил, 138х90см, 2016',
            ebody: '«The End of Love»<br>Fiberboard, acrylic, lacquer, 138x90cm, 2016',
            img: '/images/projects/neosuprematism/the_end_of_love.jpg',
          },
          {
            id: 14,
            title: null,
            body: '«Почти»<br>ДСП, акрил, лак, 50х90см, 2016',
            ebody: '«Almost»<br>Fiberboard, acrylic, lacquer, 50x90cm, 2016',
            img: '/images/projects/neosuprematism/pochty.jpg',
          },
          {
            id: 15,
            title: null,
            body: '«Озлобленность, сдерживаемая характером»<br>ДВП, акрил, лак, 138х140см, 2016',
            ebody: '«Anger, constrained by the nature»<br>Fiberboard, acrylic, lacquer, 138x140cm, 2016',
            img: '/images/projects/neosuprematism/ozlob.jpg',
          },
          {
            id: 16,
            title: null,
            body: '«Пауза в суетливости»<br>ДВП, акрил, лак, 138х140см, 2016',
            ebody: '«A pause in fussiness»<br>Fiberboard, acrylic, lacquer, 138x140cm, 2016',
            img: '/images/projects/neosuprematism/pauza.jpg',
          },
          {
            id: 17,
            title: null,
            body: '«Что-то здесь не так»<br>ДCП, акрил, лак, 126х62см, 2016',
            ebody: "«Something's wrong here»<br>Fiberboard, acrylic, lacquer, 126x62cm, 2016",
            img: '/images/projects/neosuprematism/ne_tak.jpg',
          },
          {
            id: 18,
            title: null,
            body: '«Что это?»<br>ДВП, акрил, лак, 50х80см, 2016',
            ebody: '«What is this?»<br>Fiberboard, acrylic, lacquer, 50x80cm, 2016',
            img: '/images/projects/neosuprematism/chto.jpg',
          },
          {
            id: 19,
            title: null,
            body: '«Что-то иерархическое»<br>МДФ, акрил, 2,40х2,40м, 2016',
            ebody: '«Something hierarchical»<br>MDF, acrylic, lacquer, 2,40x2,40m, 2016',
            img: '/images/projects/neosuprematism/ierarch.jpg',
          },
          {
            id: 20,
            title: null,
            body: '«Пять»<br>2016',
            ebody: '«Five»<br>Acrylic, 2016',
            img: '/images/projects/neosuprematism/five.jpg',
          },
          {
            id: 21,
            title: null,
            body: '«Послабление незыблемых догм»<br>ПВХ, акрил, лак, 60х6см, 2015',
            ebody: '«Relaxing the dogmas»<br>PVC, acrylic, lacquer, 60x65cm, 2015',
            img: '/images/projects/neosuprematism/dogmy.jpg',
          },
          {
            id: 22,
            title: null,
            body: '«Потаённая неуверенность, скрытая за внешней агрессивностью»<br>ПВХ, акрил, лак, 91х70, 2015',
            ebody: '«The hidden uncertainty behind the external aggressiveness»<br>PVC, acrylic, lacquer, 91x70cm, 2015',
            img: '/images/projects/neosuprematism/agressive.jpg',
          },
          {
            id: 23,
            title: null,
            body: '«Горчичный внутренний рост»<br>ДВП, акрил, лак, 41х52см, 2015',
            ebody: '«Mustard internal growth»<br>Fiberboard, acrylic, lacquer, 41x52cm, 2015',
            img: '/images/projects/neosuprematism/rost.jpg',
          },
          {
            id: 24,
            title: null,
            body: '«Длинные волосы»<br>ДВП, акрил, лак, 48х79см, 2015',
            ebody: '«The Long Hair»<br>Fiberboard, acrylic, lacquer, 48x79cm, 2015',
            img: '/images/projects/neosuprematism/long_hair.jpg',
          },
          {
            id: 25,
            title: null,
            body: '«Сильный сквозняк»<br>ДВП, акрил, лак, 72х102см, 2015',
            ebody: "«There's a lot of draught»<br>Fiberboard, acrylic, lacquer, 72x102cm, 2015",
            img: '/images/projects/neosuprematism/strong_draft.jpg',
          },
          {
            id: 26,
            title: null,
            body: '«Движение по два в колонну по одному»<br>ДВП, акрил, лак, 80х50см, 2015',
            ebody: '«Moving on two in one column»<br>Fiberboard, acrylic, lacquer, 80x50cm, 2015',
            img: '/images/projects/neosuprematism/movement.jpg',
          },
          {
            id: 27,
            title: null,
            body: '«Удлинение»<br>ДСП, акрил, лак, 50х70см, 2014',
            ebody: '«Lengthening»<br>Fiberboard, acrylic, lacquer, 50x70cm, 2014',
            img: '/images/projects/neosuprematism/length.jpg',
          },
          {
            id: 28,
            title: null,
            body: '«Кошмар»<br>ДВП, акрил, лак, 80х60см, 2014',
            ebody: '«Nightmare»<br>Fiberboard, acrylic, lacquer, 80x60cm, 2014',
            img: '/images/projects/neosuprematism/horror.jpg',
          },
          {
            id: 29,
            title: null,
            body: '«Сила»<br>Картон, акрил, лак, 100х70см, 2014',
            ebody: '«Power»<br>Cardboard, acrylic, lacquer, 100x70cm, 2014',
            img: '/images/projects/neosuprematism/power.jpg',
          },
          {
            id: 30,
            title: null,
            body: '«Бардак»<br>ДСП, акрил, лак, 130х80см, 2014',
            ebody: '«The mess»<br>Fiberboard, acrylic, lacquer, 130x80cm, 2014',
            img: '/images/projects/neosuprematism/bardak.jpg',
          },
          {
            id: 31,
            title: null,
            body: '«Врата»<br>2014',
            ebody: '«The gate»<br>2014',
            img: '/images/projects/neosuprematism/gates.jpg',
          },
          {
            id: 32,
            title: null,
            body: '«Зелёная штука»<br>ДВП, акрил, лак, 50х50см, 2014',
            ebody: '«The green thing»<br>Fiberboard, acrylic, lacquer, 50x50cm, 2014',
            img: '/images/projects/neosuprematism/green.jpg',
          },
          {
            id: 33,
            title: null,
            body: '«Динамическая композиция в странных цветах»<br>ДВП, акрил, лак, 50х50см, 2014',
            ebody: '«Dynamic composition in strange colors»<br>Fiberboard, acrylic, lacquer, 50x50cm, 2014',
            img: '/images/projects/neosuprematism/dynamic.jpg',
          },
          {
            id: 34,
            title: null,
            body: '«Выстрел»<br>ДВП, акрил, лак, 80х50см, 2014',
            ebody: '«The Shot»<br>Fiberboard, acrylic, lacquer, 80x50cm, 2014',
            img: '/images/projects/neosuprematism/shot.jpg',
          },
          {
            id: 35,
            title: null,
            body: '«Контраст»<br>Картон, акрил, лак, 50х30см, 2014',
            ebody: '«Contrast»<br>Cardboard, acrylic, lacquer, 50x30cm, 2014',
            img: '/images/projects/neosuprematism/contrast.jpg',
          },
          {
            id: 36,
            title: null,
            body: '«Они дымятся»<br>ДВП, акрил, лак, 80х50см, 2014',
            ebody: '«They Smoke»<br>Fiberboard, acrylic, lacquer, 80x50cm, 2014',
            img: '/images/projects/neosuprematism/smoke.jpg',
          },
          {
            id: 37,
            title: null,
            body: '«Во мраке»<br>ДСП, акрил, лак, 50х90см, 2014',
            ebody: '«In the Darkness»<br>Fiberboard, acrylic, lacquer, 50x90cm, 2014',
            img: '/images/projects/neosuprematism/darkness.jpg',
          },
          {
            id: 38,
            title: null,
            body: '«Лёгкость»<br>ДСП, акрил, лак, 60х60см, 2013',
            ebody: '«Lightness»<br>Fiberboard, acrylic, lacquer, 60x60cm, 2013',
            img: '/images/projects/neosuprematism/lyog.jpg',
          },
          {
            id: 39,
            title: null,
            body: '«Вибрация»<br>Фанера, акрил, лак, 100х100см, 2013',
            ebody: '«Vibration»<br>Plywood, acrylic, lacquer, 100x100cm, 2013',
            img: '/images/projects/neosuprematism/vibration.jpg',
          },
          {
            id: 40,
            title: null,
            body: '«Упорядоченность среди сумбурности»<br>Акрил, 2013',
            ebody: '«Homogeneity in the midst of confusion»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/order_among_chaotic.jpg',
          },
          {
            id: 41,
            title: null,
            body: '«Лабиринт»<br>Картон, акрил, лак, 50х30см, 2013',
            ebody: '«Labyrinth»<br>Cardboard, acrylic, lacquer, 50x30cm, 2013',
            img: '/images/projects/neosuprematism/labyrinth.jpg',
          },
          {
            id: 42,
            title: null,
            body: '«Балконы»<br>ДСП, акрил, лак, 50х50см, 2013',
            ebody: '«Balconies»<br>Fiberboard, acrylic, lacquer, 50x50cm, 2013',
            img: '/images/projects/neosuprematism/balkony.jpg',
          },
          {
            id: 43,
            title: null,
            body: '«Бетонный блок»<br>Акрил, 2013',
            ebody: '«Concrete Block»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/concrete_block.jpg',
          },
          {
            id: 44,
            title: null,
            body: '«Пронзая спокойствие»<br>ДВП, акрил, лак, 65х60см, 2013',
            ebody: '«Piercing calm»<br>Fiberboard, acrylic, lacquer, 65x60cm, 2013',
            img: '/images/projects/neosuprematism/impaling_calm.jpg',
          },
          {
            id: 46,
            title: null,
            body: '«Определитель ветра»<br>Акрил, 2013',
            ebody: '«Wind Detector»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/the_determinant_of_the_wind.jpg',
          },
          {
            id: 47,
            title: null,
            body: '«Комфорт»<br>Акрил, 2013',
            ebody: '«Comfort»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/comfort.jpg',
          },
          {
            id: 48,
            title: null,
            body: '«Ребристость»<br>Акрил, 2013',
            ebody: '«Ribbing»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/ribbing.jpg',
          },
          {
            id: 49,
            title: null,
            body: '«Уменьшение и поворот»<br>Акрил, 2013',
            ebody: '«Reduction and Turn»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/reduction_and_turn.jpg',
          },
          {
            id: 50,
            title: null,
            body: '«#20»<br>Акрил, 2013',
            ebody: '«#20»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/20.jpg',
          },
          {
            id: 51,
            title: null,
            body: '«Угол»<br>Картон, акрил, лак, 100х50см, 2013',
            ebody: '«Corner»<br>Cardboard, acrylic, lacquer, 100x50cm, 2013',
            img: '/images/projects/neosuprematism/ugol.jpg',
          },
          {
            id: 52,
            title: null,
            body: '«Странно»<br>Картон, акрил, лак, 20х20см, 2013',
            ebody: '«Strange»<br>Cardboard, acrylic, lacquer, 20x20cm, 2013',
            img: '/images/projects/neosuprematism/strange.jpg',
          },
          {
            id: 53,
            title: null,
            body: '«Стабильно»<br>Картон, акрил, лак, 20х20см, 2013',
            ebody: '«Stable»<br>Cardboard, acrylic, lacquer, 20x20cm, 2013',
            img: '/images/projects/neosuprematism/stab.jpg',
          },
          {
            id: 54,
            title: null,
            body: '«Специфично»<br>Картон, акрил, лак, 20х20см, 2013',
            ebody: '«Specific»<br>Cardboard, acrylic, lacquer, 20x20cm, 2013',
            img: '/images/projects/neosuprematism/specific.jpg',
          },
          {
            id: 55,
            title: null,
            body: '«Яростно»<br>Картон, акрил, лак, 20х20см, 2013',
            ebody: '«Furiously»<br>Cardboard, acrylic, lacquer, 20x20cm, 2013',
            img: '/images/projects/neosuprematism/yarostno.jpg',
          },
          {
            id: 56,
            title: "<iframe src='https://www.youtube.com/embed/c1Ja5VBs9Ls?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
            body: '«Странствие» и Стокон»<br>Акрил, 2012',
            ebody: '«The Journey and Stokon»<br>Acrylic, 2013',
            img: '/images/projects/neosuprematism/journey.jpg',
          },
          {
            id: 57,
            title: null,
            body: '«Сквозняк»<br>Холст, акрил, 40х50см, 2012',
            ebody: '«Draught»<br>Сanvas, acrylic, 40х50cm, 2012',
            img: '/images/projects/neosuprematism/skwoz.jpg',
          },
          {
            id: 58,
            title: "<iframe src='https://www.youtube.com/embed/Hzj3nEcvar0?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
            body: '«Выстрел»<br>Акрил, 2012',
            ebody: '«The Shot»<br>Acrylic, 2012',
            img: '/images/projects/neosuprematism/shot_street.jpg',
          },
          {
            id: 59,
            title: null,
            body: '«Безмолвие статики»<br>Картон, акрил, 70×45см, 2012',
            ebody: '«The Silence of the Static»<br>Cardboard, acrylic, 70х45cm, 2012',
            img: '/images/projects/neosuprematism/silence.jpg',
          },
          {
            id: 60,
            title: null,
            body: '«Взрыв»<br>Акрил, 2012',
            ebody: '«Explosion»<br>Acrylic, 2012',
            img: '/images/projects/neosuprematism/explosion.jpg',
          },
          {
            id: 61,
            title: null,
            body: '«Неосупрематическая инсталляция #1»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #1»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/1.jpg',
          },
          {
            id: 62,
            title: null,
            body: '«Неосупрематическая инсталляция #2»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #2»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/2.jpg',
          },
          {
            id: 63,
            title: null,
            body: '«Неосупрематическая инсталляция #3»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #3»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/3.jpg',
          },
          {
            id: 64,
            title: null,
            body: '«Неосупрематическая инсталляция #4»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #4»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/4_installation.jpg',
          },
          {
            id: 65,
            title: null,
            body: '«Неосупрематическая инсталляция #5»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #5»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/5.jpg',
          },
          {
            id: 66,
            title: null,
            body: '«Неосупрематическая инсталляция #6»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #6»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/6.jpg',
          },
          {
            id: 67,
            title: null,
            body: '«Неосупрематическая инсталляция #7»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #7»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/7.jpg',
          },
          {
            id: 68,
            title: null,
            body: '«Неосупрематическая инсталляция #8»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #8»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/8.jpg',
          },
          {
            id: 69,
            title: null,
            body: '«Неосупрематическая инсталляция #9»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #9»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/9.jpg',
          },
          {
            id: 70,
            title: null,
            body: '«Неосупрематическая инсталляция #10»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #10<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/11.jpg',
          },
          {
            id: 71,
            title: null,
            body: '«Неосупрематическая инсталляция #11»<br>ПВХ, акрил, 2012',
            ebody: '«The Neosuprematic installation #11»<br>PVC, acrylic, 2012',
            img: '/images/projects/neosuprematism/12.jpg',
          },
          {
            id: 72,
            title: "<iframe src='https://www.youtube.com/embed/4HlIcWNKgCw?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
            body: '«Гравитирующие фигуры»<br>2012',
            ebody: '«The Gravity Figures»<br>Acrylic, 2012',
            img: '/images/projects/neosuprematism/gravit.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
