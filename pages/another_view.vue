<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <pre class="annotation_ru none" style="text-align: left; opacity:0;">
Эта серия фотографий ставит своей целью найти в довольно прозаических вещах и пейзажах какую-то новую информацию и, возможно, превратить повседневность в своего рода увлечение.

</pre
      >
      <pre class="annotation_en" style="text-align: left;">
This series of photos aims to find some new information in rather prosaic things and landscapes and, perhaps, to turn everyday life into a kind of hobby.

</pre
      >
      <br />
      <div
        class="another_view"
        v-for="(another_view, index) in another_viewArray"
        v-bind:index="index"
        v-bind:key="another_view.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{ another_view.title }}</h3>
        <!-- Заголовок -->
        <pre v-html="another_view.body"></pre>
        <!-- Текст -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="another_view.img" />
          <!-- Картинка -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Kiuss Group — Another View",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Группа Кюс — Фотопроект Другой ракурс"
      }
    ]
  },
  data: function() {
    return {
      another_viewArray: [
        {
          id: 1,
          title: null,
          body: null,
          ebody: null,
          img: "/images/photography/another_view/(11).jpg"
        },
        {
          id: 2,
          title: null,
          body: null,
          img: "/images/photography/another_view/9.jpg"
        },
        {
          id: 3,
          title: null,
          body: null,
          img: "/images/photography/another_view/(12).jpg"
        },
        {
          id: 4,
          title: null,
          body: null,
          img: "/images/photography/another_view/(8).jpg"
        },
        {
          id: 5,
          title: null,
          body: null,
          img: "/images/photography/another_view/(14).jpg"
        },
        {
          id: 6,
          title: null,
          body: null,
          img: "/images/photography/another_view/(16).jpg"
        },
        {
          id: 7,
          title: null,
          body: null,
          img: "/images/photography/another_view/(10).jpg"
        },
        {
          id: 8,
          title: null,
          body: null,
          img: "/images/photography/another_view/(13).jpg"
        },
        {
          id: 9,
          title: null,
          body: null,
          img: "/images/photography/another_view/(15).jpg"
        },
        {
          id: 10,
          title: null,
          body: null,
          img: "/images/photography/another_view/(7).jpg"
        },
        {
          id: 11,
          title: null,
          body: null,
          img: "/images/photography/another_view/(6).jpg"
        },
        {
          id: 12,
          title: null,
          body: null,
          img: "/images/photography/another_view/(5).jpg"
        },
        {
          id: 13,
          title: null,
          body: null,
          img: "/images/photography/another_view/(4).jpg"
        },
        {
          id: 14,
          title: null,
          body: null,
          img: "/images/photography/another_view/(3).jpg"
        },
        {
          id: 15,
          title: null,
          body: null,
          img: "/images/photography/another_view/(2).jpg"
        },
        {
          id: 16,
          title: null,
          body: null,
          img: "/images/photography/another_view/(1).jpg"
        },
        {
          id: 17,
          title: null,
          body: null,
          img: "/images/photography/another_view/(17).jpg"
        },
        {
          id: 18,
          title: null,
          body: null,
          img: "/images/photography/another_view/(18).jpg"
        },
        {
          id: 19,
          title: null,
          body: null,
          img: "/images/photography/another_view/(19).jpg"
        },
        {
          id: 20,
          title: null,
          body: null,
          img: "/images/photography/another_view/(20).jpg"
        },
        {
          id: 21,
          title: null,
          body: null,
          img: "/images/photography/another_view/(21).jpg"
        },
        {
          id: 22,
          title: null,
          body: null,
          img: "/images/photography/another_view/(22).jpg"
        },
        {
          id: 23,
          title: null,
          body: null,
          img: "/images/photography/another_view/(23).jpg"
        },
        {
          id: 24,
          title: null,
          body: null,
          img: "/images/photography/another_view/(24).jpg"
        },
        {
          id: 25,
          title: null,
          body: null,
          img: "/images/photography/another_view/(25).jpg"
        },
        {
          id: 26,
          title: null,
          body: null,
          img: "/images/photography/another_view/(26).jpg"
        },
        {
          id: 27,
          title: null,
          body: null,
          img: "/images/photography/another_view/(27).jpg"
        },
        {
          id: 28,
          title: null,
          body: null,
          img: "/images/photography/another_view/(28).jpg"
        }
      ]
    };
  },

  methods: {
    ruen_check: function() {
      //функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком
      if (ruen_status) {
        $(".ru").transition(
          { opacity: 0 },
          1,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );
        $(".annotation_ru").transition(
          { opacity: 0 },
          1,
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
              1,
              "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
            );
          // $('.en').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
        }, 1);
      } else {
        $(".en").transition(
          { opacity: 0 },
          1,
          "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        );
        $(".annotation_en").transition(
          { opacity: 0 },
          1,
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
              1,
              "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
            );
          //  $('.ru').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
        }, 1);
      }
    }
  },

  mounted: function() {
    //Вызывается синхронно сразу после создания экземпляра

    this.ruen_check();
  }
};
</script>

<style></style>
