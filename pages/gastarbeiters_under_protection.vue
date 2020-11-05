<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия мемориальных табличек «Гастарбайтеры под защитой»
      <br>Совместно с арт-группой Афронт.
Смешанная техника, 2015
      <br>"В начале XXI века Краснодар сбрасывает оковы одноэтажной застройки и превращается в современный город. Но, к сожалению, вся благодарность за построение дивного нового юга достается руководителям компаний-застройщиков, а имена настоящих героев помнят лишь безмолвные сваи. Проектом "Гастарбайтеры под защитой" мы хотим не только увековечить труд действительных строителей кубанского благополучия, но и подчеркнуть, что в этом мире все мы гости (от нем. Gastarbeiter — гость-работник)"
      <br><a target='_blank' href='http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html'>Всемирный конгресс узбеков и узбекистанцев</a> выразил благодарность проекту «Гастарбайтеры под защитой».
    </pre>
    <pre class="annotation_en" style="text-align: left;">A series of memorial plaques «Gastarbeiters Under Protection»
      <br>Collaboration with art-group Afront.
Mixed media, 2015
      <br>"At the beginning of the XXI century Krasnodar unleashes the shackles of one-storey buildings and turns into a modern city. But, unfortunately, all gratitude for the construction of a wonderful new south goes to the heads of development companies, and the names of the real heroes remember only silent piles. With the project "Gastarbeiters under protection" we want not only to perpetuate the work of real builders of the Kuban welfare, but also to emphasize that in this world we are all guests (Gastarbeiter - guest worker)"
      <br><a target='_blank' href='http://vku-org.nichost.ru/press/2880-na-krasnodarskih-novostroykah-ustanovili-tablichki-s-blagodarnostyami-gastarbayteram.html'>The World Congress of Uzbeks</a> expressed gratitude to the Gastarbeiters Under Protection Project.
    </pre><br>
      <div class="migrant_workers_under_protection" v-for="(migrant_workers_under_protection, index) in migrant_workers_under_protectionArray" v-bind:index="index" v-bind:key="migrant_workers_under_protection.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{migrant_workers_under_protection.title}}</h3> <!-- Заголовок -->
        <pre v-html="migrant_workers_under_protection.body"></pre> <!-- Текст -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="migrant_workers_under_protection.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Gastarbeiters Under Protection",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия мемориальных табличек Гастарбайтеры под защитой" },]
  },
    data: function() {
      return {
        
        migrant_workers_under_protectionArray: 
[
    {  "id": 1,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/migrant_workers_under_protection/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/migrant_workers_under_protection/6.jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/migrant_workers_under_protection/7.jpg"
    },
    {
      "id": 8,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/8.jpg"
    },
    {
      "id": 9,
      "title": null,
      "body": null,
      "img": "/images/projects/migrant_workers_under_protection/9.jpg"
    }
  ]
      }
    },

    methods: {  
      
      

      ruen_check: function() {//функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком  
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
    
    mounted: function() {//Вызывается синхронно сразу после создания экземпляра
        
        this.ruen_check();
    }
  }

</script>

<style>

</style>