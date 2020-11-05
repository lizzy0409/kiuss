<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Строительные заборы и прочие неприглядные вещи в нашем городе стали завешивать баннерами с цветочками, в связи с чем родилась серия работ на эту тему. Серия состоит из шести уличных работ и трёх «станковых», представленных в виде оригинальных баннеров, натянутых на подрамник.

Подробнее о проекте читайте в <a href="https://www.yuga.ru/articles/society/7992.html">интервью</a>.
</pre>
<pre class="annotation_en" style="text-align: left;">Construction fences and other unsightly things in our city began to hang banners with flowers, and a series of works on the subject was born. The series consists of six street works and three plates, presented in the form of original banners stretched on a stretcher.

Read more about the project in the <a href="https://www.yuga.ru/articles/society/7992.html">interview</a> (in Russian).
</pre><br>
      <div class="simulation_walfare" v-for="(simulation_walfare, index) in simulation_walfareArray" v-bind:index="index" v-bind:key="simulation_walfare.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{simulation_walfare.title}}</h3> <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="simulation_walfare.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="simulation_walfare.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="simulation_walfare.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Simulation of Welfare",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия Симуляция благополучия" },]
  },
    data: function() {
      return {
        
        simulation_walfareArray: 
[
    {  "id": 1,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Тушь, 2015",
      "ebody": "«Simulation of welfare»<br>Ink, 2015",
      "img": "/images/projects/simulation_walfare/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Тушь, 2015",
      "ebody": "«Simulation of welfare»<br>Ink, 2015",
      "img": "/images/projects/simulation_walfare/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Тушь, 2015",
      "ebody": "«Simulation of welfare»<br>Ink, 2015",
      "img": "/images/projects/simulation_walfare/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Тушь, 2015",
      "ebody": "«Simulation of welfare»<br>Ink, 2015",
      "img": "/images/projects/simulation_walfare/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Тушь, 2015",
      "ebody": "«Simulation of welfare»<br>Ink, 2015",     
      "img": "/images/projects/simulation_walfare/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body":  "«Симуляция благополучия»<br>Оригинальный баннер, аэрозольная краска, 2015",
      "ebody": "«Simulation of welfare»<br>Original banner, spray paint, 2015",      
      "img": "/images/projects/simulation_walfare/6.jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": "«Шикарный букет»<br>Оригинальный баннер, 60х120см, 2016",  
      "ebody": "«Beautiful bouquet»<br>Original banner, 60x120cm, 2016",     
      "img": "/images/projects/simulation_walfare/7.jpg"
    },
    {
      "id": 8,
      "title": null,
      "body": "«Поле одуванчиков»<br>Оригинальный баннер, 60х120см, 2016",
      "ebody": "«The dandelion field»<br>Original banner, 60x120cm, 2016",       
      "img": "/images/projects/simulation_walfare/8.jpg"
    },
    {
      "id": 9,
      "title": null,
      "body": "«Чудные ромашки»<br>Оригинальный баннер, 60х120см, 2016", 
      "ebody": "«Nice chamomiles»<br>Original banner, 60x120cm, 2016",      
      "img": "/images/projects/simulation_walfare/9.jpg"
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