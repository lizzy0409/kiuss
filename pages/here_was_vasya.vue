<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">«Тут был Вася»<br>Аэрозольная краска, 2012
    <br>Вася — тэггер, который хочет прославиться, рисуя везде своё имя. Он — сатира над всей бренностью его занятия. Маленький человечек, который с помощью лестниц пытается вскарабкаться повыше, чтобы все видели, что здесь был Вася.
</pre>
<pre class="annotation_en" style="text-align: left;">«Here was Vasya»<br>Spray paint, 2012
<br>This series refers to the established Russian phraseology "here was Vasya", meaning any senseless inscription on the wall.

«Vasya is a tagger who wants to become famous by drawing his name everywhere. He's a satirist over all the perishability of his work. A little man who tries to climb up the stairs so that everyone can see that Vasya was here.»
</pre><br>
      <div class="here_was_vasya" v-for="(here_was_vasya, index) in here_was_vasyaArray" v-bind:index="index" v-bind:key="here_was_vasya.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->       
<h3>{{here_was_vasya.title}}</h3> <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="here_was_vasya.body"></pre>
        <pre class="en" style="text-align: left;" v-html="here_was_vasya.ebody"></pre> 
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="here_was_vasya.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
    head: {
    title: "Kiuss Group — Here was Vasya",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных надписей Здесь был Вася" },]
  },
    data: function() {
      return {
       
        here_was_vasyaArray: 
[
  {  "id": 1,
    "title": null,
    "body":  "Тут был Вася<br>Аэрозольная краска, 2012",
    "ebody":  "Here was Vasya<br>Spray paint, 2012",
    "img": "/images/projects/here_was_vasya/1.jpg"
  },
  {
    "id": 2,
    "title": null,
    "body": "Граффити помогает мне самовыразиться<br>Аэрозольная краска, 2012",
    "ebody":  "Graffiti helps me express myself<br>Spray paint, 2012",
    "img": "/images/projects/here_was_vasya/2.jpg"
  },
  {
    "id": 3,
    "title": null,
    "body":  "Я рисую на стенах города, чтобы прославиться<br>Аэрозольная краска, 2012",
    "ebody": "I'm painting on the walls of the city to become famous<br>Spray paint, 2012",
    "img": "/images/projects/here_was_vasya/3.jpg"
  },
  {
    "id": 4,
    "title": null,
    "body": "Here was Vasya<br>Аэрозольная краска, 2012",
    "ebody":  "Here was Vasya<br>Spray paint, 2012",
    "img": "/images/projects/here_was_vasya/4.jpg"
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