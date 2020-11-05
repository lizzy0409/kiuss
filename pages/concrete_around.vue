<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия уличных постеров «Вокруг бетон»<br>Бумага, печать, 100x100см, 2019
        <br>Продолжение серии "<a href="https://stranno.su/absurd_inscriptions">абсурдных надписей</a>". Это словосочетание не столько отсылает непосредственно к бетону, сколько вообще ко всем искусственным материалам, из которых формируются города, — это и асфальт, и кирпич, и металл, и пластик — что позволяет как бы "обнаружить" вокруг себя город и всё материальное из чего он состоит.</pre>
      <pre class="annotation_en" style="text-align: left;">A series of street posters «Concrete Around»<br>Print on paper, 100x100cm, 2019
      <br>Continuation of the "<a href="https://stranno.su/absurd_inscriptions">absurd inscriptions</a>" series. This phrase does not so much refer directly to concrete but to all artificial materials from which cities are formed — asphalt, brick, metal and plastic — which allows as if to "discover" around a city and all the material it consists of.</pre> 
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
export default {
   head: {
    title: "Kiuss Group — Concrete Around",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных постеров Вокруг бетон" },]
  },
  data: function() {
    return {
      
      concrete_aroundArray: 
[
    {  "id": 1,
      "title": null,
      "body": null,
      "img": "/images/projects/concrete_around/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/concrete_around/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/concrete_around/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/concrete_around/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/concrete_around/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/concrete_around/6.jpg"
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