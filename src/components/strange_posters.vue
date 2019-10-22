<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->

      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия уличных постеров (было расклеено порядка 60 штук формата А0), представляющая собой, по сути, краткий манифест проекта <a href="https://stranno.su/#/absurd_inscriptions">абсурдных надписей</a>.
      <br>Постеры «Странно»<br>Блюбэк, А0, 2018
      </pre>
      <pre class="annotation_en" style="text-align: left;">A series of street posters (about 60 pieces of A0 format), which is, in fact, a brief manifesto of the project of <a href="https://stranno.su/#/absurd_inscriptions">absurd inscriptions</a>.
      <br>«Strange posters»<br>Blueback, А0, 2018
      </pre>
      <br />
      <div
        class="strange_posters"
        v-for="(strange_posters, index) in strange_postersArray"
        v-bind:index="index"
        v-bind:key="strange_posters.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{strange_posters.title}}</h3>
        <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="strange_posters.body"></pre>
        <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="strange_posters.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="strange_posters.img" />
          <!-- Картинка -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      strange_postersJSON: "src/assets/jsons/strange_posters.json", //Адрес к массиву json-данных постов
      strange_postersArray: [] //Сюда записывается ответ (response) от get-запроса
    };
  },

  methods: {
    getAllPosts: function() {
      //Метод получения ВСЕХ данных из json-файла
      //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition
      this.$http.get(this.strange_postersJSON).then(
        function(response) {
          this.strange_postersArray = response.data;
        },
        function(error) {}
      );
    },

    ruen_check: function() {
      //функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком
      if (ruen_status) {
        $(".ru").transition(
          { opacity: 0 },
          500,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );
        $(".annotation_ru").transition(
          { opacity: 0 },
          500,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );

        setTimeout(function() {
          $(".ru").addClass("none");
          $(".annotation_ru").addClass("none");
          $(".en").removeClass("none");
          $(".annotation_en")
            .removeClass("none")
            .transition(
              { opacity: 1 },
              500,
              "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
            );
          $(".en").transition(
            { opacity: 1 },
            500,
            "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
          );
        }, 500);
      } else {
        $(".en").transition(
          { opacity: 0 },
          500,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );
        $(".annotation_en").transition(
          { opacity: 0 },
          500,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );

        setTimeout(function() {
          $(".en").addClass("none");
          $(".annotation_en").addClass("none");
          $(".ru").removeClass("none");
          $(".annotation_ru")
            .removeClass("none")
            .transition(
              { opacity: 1 },
              500,
              "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
            );
          $(".ru").transition(
            { opacity: 1 },
            500,
            "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
          );
        }, 500);
      }
    }
  },

  created: function() {
    //Вызывается синхронно сразу после создания экземпляра
    this.getAllPosts();
    this.ruen_check();
  }
};
</script>

<style>
</style>