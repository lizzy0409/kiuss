<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->

      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Постеры «Странно»<br>Блюбэк, А0, 2018
      <br>Серия уличных постеров (было расклеено порядка 60 штук формата А0), представляющая собой, по сути, краткий манифест проекта <a href="https://stranno.su/absurd_inscriptions">абсурдных надписей.</a>
      </pre>
      <pre class="annotation_en" style="text-align: left;">«Strange posters»<br>Blueback, А0, 2018
      <br>A series of street posters (about 60 pieces of A0 format), which is, in fact, a brief manifesto of the project of <a href="https://stranno.su/absurd_inscriptions">absurd inscriptions</a>.
      
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
export default {
  head: {
    title: "Kiuss Group — Strange Posters",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных постеров Странно" },]
  },
  data: function() {
    return {
      
      strange_postersArray: 
[
    {  "id": 1,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/strange_posters/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/strange_posters/6.jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/strange_posters/7.jpg"
    },
    {
      "id": 8,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/8.jpg"
    },
    {
      "id": 9,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/9.jpg"
    },
    {
      "id": 10,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/10.jpg"
    },
    {
      "id": 11,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/11.jpg"
    },
    {
      "id": 12,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/12.jpg"
    },
    {
      "id": 13,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/13.jpg"
    },
    {
      "id": 14,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/14.jpg"
    },
    {
      "id": 15,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/15.jpg"
    },
    {
      "id": 16,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/16.jpg"
    },
    {
      "id": 17,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/17.jpg"
    },
    {
      "id": 18,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/18.jpg"
    },
    {
      "id": 19,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/19.jpg"
    },
    {
      "id": 20,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/20.jpg"
    },
    {
      "id": 21,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/21.jpg"
    },
    {
      "id": 22,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/22.jpg"
    },
    {
      "id": 23,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/23.jpg"
    },
    {
      "id": 24,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/24.jpg"
    },
    {
      "id": 25,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/25.jpg"
    },
    {
      "id": 26,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/26.jpg"
    },
    {
      "id": 27,
      "title": null,
      "body": null,
      "img": "/images/projects/strange_posters/27.jpg"
    }
  ]
    };
  },

  methods: {
    

    ruen_check: function() {
      //функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком
     if(ruen_status)
             {
               $('.ru').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_ru').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
            
            setTimeout(function(){
                $('.ru').addClass('none');
                $('.annotation_ru').addClass('none');
                $('.en').removeClass('none');
                $('.annotation_en').removeClass('none').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                // $('.en').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               }, 1);
			   
             }
             
            else
             {
                
               $('.en').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_en').transition({opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

               setTimeout(function(){
                   $('.en').addClass('none');
                   $('.annotation_en').addClass('none');
                   $('.ru').removeClass('none');
                   $('.annotation_ru').removeClass('none').transition({opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');;
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

<style>
</style>