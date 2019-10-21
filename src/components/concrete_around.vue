<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия уличных постеров «Вокруг бетон»<br>Бумага, 100x100см, 2019</pre>
      <pre class="annotation_en" style="text-align: left;">A series of street posters «Concrete Around»<br>Paper, 100x100cm, 2019</pre> 
      <br/>
      <div
        class="concrete_around"
        v-for="(concrete_around, index) in concrete_aroundArray"
        v-bind:index="index"
        v-bind:key="concrete_around.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{concrete_around.title}}</h3>
        <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="concrete_around.body"></pre>
        <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="concrete_around.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="concrete_around.img" />
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
      concrete_aroundJSON: "src/assets/jsons/concrete_around.json", //Адрес к массиву json-данных постов
      concrete_aroundArray: [] //Сюда записывается ответ (response) от get-запроса
    };
  },

  methods: {
    getAllPosts: function() {
      //Метод получения ВСЕХ данных из json-файла
      //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition
      this.$http.get(this.concrete_aroundJSON).then(
        function(response) {
          this.concrete_aroundArray = response.data;
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