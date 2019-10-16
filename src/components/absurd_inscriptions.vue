<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия уличных надписей, которые абсурдны не столько в силу своего аллогичного сюжета (что интересно как минимум с семиотической точки зрения, как метод <a href="http://instructions.stranno.su/#Bookmark6" target="_blank">денатурализации</a>), сколько потому, что находятся в контексте улицы и представлены прохожим, не готовым к таким сообщениям, в результате чего и возникает <a href="http://instructions.stranno.su/#Bookmark15" target="_blank">момент обнаружения</a>. Также смотрите проект с <a href="http://stranno.su/#/strange_posters">постерами</a>.
      <br>«Абсурдные фразы»<br>Тушь, 2013
      </pre>
      <pre class="annotation_en" style="text-align: left;">A series of street inscriptions that are absurd not so much because of their allogical plot (which is interesting at least from a semiotic point of view, as a method of <a  href="http://instructions.stranno.su/#Bookmark6" target="_blank">denaturalization</a>), but because they are in the context of the street and are presented by passersby who are not ready for such messages, and as a result of which there is the <a href="http://instructions.stranno.su/#Bookmark15" target="_blank">moment of detection</a>. Also see the project with <a href="http://stranno.su/#/strange_posters">posters</a>.
      <br>«Absurd Inscriptions»<br>Ink, 2013
      </pre>
      <br />
      <div
        class="absurd_inscriptions"
        v-for="(absurd_inscriptions, index) in absurd_inscriptionsArray"
        v-bind:index="index"
        v-bind:key="absurd_inscriptions.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{absurd_inscriptions.title}}</h3>
        <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="absurd_inscriptions.body"></pre>
        <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="absurd_inscriptions.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="absurd_inscriptions.img" />
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
      absurd_inscriptionsJSON: "src/assets/jsons/absurd_inscriptions.json", //Адрес к массиву json-данных постов
      absurd_inscriptionsArray: [] //Сюда записывается ответ (response) от get-запроса
    };
  },

  methods: {
    getAllPosts: function() {
      //Метод получения ВСЕХ данных из json-файла
      //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition
      this.$http.get(this.absurd_inscriptionsJSON).then(
        function(response) {
          this.absurd_inscriptionsArray = response.data;
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