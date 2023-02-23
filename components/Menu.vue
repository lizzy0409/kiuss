<template>
  <header :class="{ 'header--disactive': isDisactive, 'header--open': isOpen }" class="header">
    <div v-if="this.$store.state.languageMarker" class="header__container">
      <div class="menu" @click="hidePhoto" :class="{ 'menu--open': show }">
        <div class="header__left">
          <span @click="blur">projects</span>
          <router-link @click.native="allOff" to="/about">about</router-link>
        </div>
        <div class="header__right">
          <button class="language" @click="ruen" type="button">
            <p>ru / en</p>
          </button>
        </div>
      </div>

      <transition name="slide-fade">
        <div class="projects" v-if="show">
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/threads/3.1.jpg"
            to="/threads"
            >Threads</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/simulation_welfare/1.jpg"
            to="/simulation_of_welfare"
            >Simulation of Welfare</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/strange_posters/14.jpg"
            to="/strange_posters"
            >Strange Posters</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/concrete_around/5.jpg"
            to="/concrete_around"
            >Concrete Around</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/neosuprematism/ribbing.jpg"
            to="/neosuprematism"
            >Neosuprematism</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/cursors/1.jpg"
            to="/screen_painting"
            >Screen Painting</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/scaffolding/4.jpg"
            to="/reserved_scaffolding"
            >Reserved Scaffolding</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/migrant_workers_under_protection/1.jpg"
            to="/gastarbeiters_under_protection"
            >Gastarbeiters Under Protection</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/absurd_inscriptions/2.jpg"
            to="/absurd_inscriptions"
            >Absurd Inscriptions</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/monotonous_objects/1.jpg"
            to="/monotonous_objects"
            >Monotonous Objects</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/disposable_tableware/1.jpg"
            to="/disposable_tableware"
            >Disposable Tableware</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/when_the_traffic_lights_are_off/logo.png"
            to="/when_the_traffic_lights_are_off"
            >When The Traffic Lights Are Off</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/to_jest_film/logo.jpg"
            to="/to_jest_film"
            >To Jest Film</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/drift_fest/2.jpg"
            to="/derive_fest"
            >The Dérive Festival</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/here_was_vasya/1.jpg"
            to="/here_was_vasya"
            >Here was Vasya</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/photography/casual_passerby/14.jpg"
            to="/casual_passerby"
            >Casual Passerby</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/photography/another_view/14.jpg"
            to="/another_view"
            >Another View</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/circles/3.jpg"
            to="/circles"
            >Circles</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/dada_posters/5.jpg"
            to="/dada_posters"
            >DADA Posters</router-link
          ><br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/other/volnovaya1.jpg"
            to="/other"
            >Other</router-link
          >
        </div>
      </transition>
    </div>

    <div v-else class="header__container">
      <div class="menu" @click="hidePhoto" :class="{ 'menu--open': show }">
        <div class="header__left">
          <span @click="blur">проекты</span>
          <router-link @click.native="allOff" to="/about">о кюсе</router-link>
        </div>
        <div class="header__right">
          <button class="language" @click="ruen" type="button">
            <p>ru / en</p>
          </button>
        </div>
      </div>

      <transition name="slide-fade">
        <div class="projects" @click="hidePhoto" v-if="show">
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/threads/3.1.jpg"
            to="/threads"
          >
            Нити
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/simulation_welfare/1.jpg"
            to="/simulation_of_welfare"
          >
            Симуляция благополучия
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/strange_posters/14.jpg"
            to="/strange_posters"
          >
            Постеры Странно
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/concrete_around/5.jpg"
            to="/concrete_around"
          >
            Вокруг бетон
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/neosuprematism/ribbing.jpg"
            to="/neosuprematism"
          >
            Неосупрематизм
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/cursors/1.jpg"
            to="/screen_painting"
          >
            Живопись экрана
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/scaffolding/4.jpg"
            to="/reserved_scaffolding"
          >
            Заповедные леса
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/migrant_workers_under_protection/1.jpg"
            to="/gastarbeiters_under_protection"
          >
            Гастарбайтеры под защитой
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/absurd_inscriptions/2.jpg"
            to="/absurd_inscriptions"
          >
            Абсурдные надписи
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/monotonous_objects/1.jpg"
            to="/monotonous_objects"
          >
            Тела однотонные
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/disposable_tableware/1.jpg"
            to="/disposable_tableware"
          >
            Тарелочки
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/when_the_traffic_lights_are_off/logo.png"
            to="/when_the_traffic_lights_are_off"
          >
            Когда не работают светофоры
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/to_jest_film/logo.jpg"
            to="/to_jest_film"
          >
            To jest film
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/drift_fest/2.jpg"
            to="/derive_fest"
          >
            Фестиваль Дрейф
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/here_was_vasya/1.jpg"
            to="/here_was_vasya"
          >
            Здесь был Вася
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/photography/casual_passerby/14.jpg"
            to="/casual_passerby"
          >
            Случайные прохожие
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/photography/another_view/14.jpg"
            to="/another_view"
          >
            Другой ракурс
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/circles/3.jpg"
            to="/circles"
          >
            Круги
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/dada_posters/5.jpg"
            to="/dada_posters"
          >
            Постеры DADA
          </router-link>
          <br />
          <router-link
            @mouseover.native="showPhoto"
            @mouseout.native="hidePhoto"
            data-img="/images/projects/other/volnovaya1.jpg"
            to="/other"
          >
            Разное
          </router-link>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false, // Маркер видимости списка проектов
      isDisactive: false, // Маркер видимости всего хедера
      previousScrollPosition: null, // Для работы хедера на десктопе
      isOpen: false, // Для корректной анимации переключения меню
      timeouts: [],
    }
  },

  watch: {
    // При изменении маршрута скрываем список проектов
    $route() {
      this.allOff()
      this.hidePhoto()
    },
  },

  methods: {
    // По клику на эбаут всё отключаем на случай нажатия при открытом меню проектов
    allOff: function() {
      this.show = false
      this.$store.commit('changeProjectsMarkerOnFalse')
      setTimeout(() => {
        this.isOpen = false
      }, 800)
    },

    // Показываем хедер при обратном скролле
    handleScroll: function() {
      if (this.show === false) {
        if (window.scrollY >= 80 && this.previousScrollPosition < window.scrollY) {
          this.isDisactive = true
        } else if (this.previousScrollPosition - window.scrollY > 20) {
          this.isDisactive = false
        }
        this.previousScrollPosition = window.scrollY
      }
    },

    // Функция смены языка
    ruen: function() {
      this.$store.commit('changeLanguageMarker')
      localStorage.languageMarker = this.$store.state.languageMarker
    },

    // Блюр при вызове секции с проектами
    // Переключаем show, по которому работает v-if
    // и генерим глобальное событие projectsOn, которое отловится на layout
    blur: function() {
      this.show = !this.show
      this.$store.commit('changeProjectsMarker')

      if (!this.show) {
        // Задержка нужна для корректной анимации
        setTimeout(() => {
          this.isOpen = false
        }, 800)
      } else {
        this.isOpen = true
      }
    },

    showPhoto: function(event) {
      if (window.screen.width > 568) {
        this.$store.commit('loadingOn')

        this.timeouts.push(
          setTimeout(() => {
            const img = new Image()
            img.src = event.target.dataset.img
            img.decode().then(() => {
              this.$store.commit('loadingOff')
              this.$store.commit('changeShowImg', `background-image: url(${event.target.dataset.img})`)
            })
          }, 500)
        )
      }
    },
    hidePhoto: function() {
      if (window.screen.width > 568) {
        this.timeouts.forEach((timeout) => clearTimeout(timeout))
        this.$store.commit('changeShowImg', null)
        this.$store.commit('loadingOff')
      }
    },
  },

  beforeMount() {
    // Вешаем обработчик на событие скролла для хедера
    // Только на десктопах причём
    if (window.screen.width > 568) {
      this.previousScrollPosition = window.scrollY
      window.addEventListener('scroll', this.handleScroll)
    }

    // Если есть get-запрос ?ru (т.е. null, а не undefined)
    // То показываем весь контент на русском
    // Переключение отлавливается на layout
    // Либо если была запись в localstorage
    if (this.$route.query.ru === null || localStorage.languageMarker === 'false') {
      this.$store.commit('changeLanguageMarker')
      this.$store.commit('changeLanguageIsInitMarker')
    } else {
      this.$store.commit('changeLanguageIsInitMarker')
    }

    localStorage.languageMarker = this.$store.state.languageMarker
  },
}
</script>
