<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">В рамках этого проекта выкрашивались отдельные объекты уличного экстерьера, что позволяло как бы изъять его из общего пейзажа. В результате объект, не находящийся в музее или даже не перенесённый в него, превращался в подобие инсталляции или даже реди-мейда. Практика <a href="https://stranno.su/neosuprematism">неосупрематическая</a>, поскольку супрематизм исследовал цвета, цветовые фигуры и их композиции.
</pre>
<pre class="annotation_en" style="text-align: left;">Within the framework of this project, the individual objects of the street exterior were painted in the one color, which made it possible to remove it from the general urban landscape. As a result, the object, which was not in the museum or even moved into it, turned into a similar installation or even a ready-made. This is <a href="https://stranno.su/neosuprematism">neosuprematist</a> practice, because suprematism investigated colors, colorful figures and their compositions.
</pre><br>
      <div class="monotonous_objects" v-for="(monotonous_objects, index) in monotonous_objectsArray" v-bind:index="index" v-bind:key="monotonous_objects.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="monotonous_objects.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="monotonous_objects.ebody"></pre>
        <h3 v-html="monotonous_objects.title"></h3> <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="monotonous_objects.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Monotonous Objects",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных работ Тела однотонные" },]
  },
    data: function() {
      return {
       
        monotonous_objectsArray: 
[
    {  "id": 1,
      "title": null,
      "body": "«Неосупрематическая композиция #1»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #1»<br>Spray paint, 2012",
      "img": "/images/projects/monotonous_objects/1.jpg"
    },
    {
      "id": 2,
      "title": "<iframe src='https://www.youtube.com/embed/_0KXo7YzcI4?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
      "body": "«Красный фонарь» («Неосупрематическая композиция #2»)<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #2»<br>Spray paint, 2012",
      "img": "/images/projects/monotonous_objects/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": "«Неосупрематическая композиция #3»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #3»<br>Spray paint, 2012",
      "img": "/images/projects/monotonous_objects/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": "«Неосупрематическая композиция #4»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #4»<br>Spray paint, 2012",
      "img": "/images/projects/monotonous_objects/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": "«Неосупрематическая композиция #5»<br>Аэрозольная краска, 2012", 
      "ebody": "«Neosuprematist composition #5»<br>Spray paint, 2012",     
      "img": "/images/projects/monotonous_objects/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": "«Неосупрематическая композиция #6»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #6»<br>Spray paint, 2012",      
      "img": "/images/projects/monotonous_objects/6.jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": "«Неосупрематическая композиция #7»<br>Аэрозольная краска, 2012", 
      "ebody": "«Neosuprematist composition #7»<br>Spray paint, 2012",     
      "img": "/images/projects/monotonous_objects/7.jpg"
    },
    {
      "id": 8,
      "title": null,
      "body": "«Неосупрематическая композиция #8»<br>Аэрозольная краска, 2012", 
      "ebody": "«Neosuprematist composition #8»<br>Spray paint, 2012",     
      "img": "/images/projects/monotonous_objects/8.jpg"
    },
    {
      "id": 9,
      "title": null,
      "body": "«Неосупрематическая композиция #9»<br>Аэрозольная краска, 2012", 
      "ebody": "«Neosuprematist composition #9»<br>Spray paint, 2012",     
      "img": "/images/projects/monotonous_objects/9.jpg"
    },
    {
      "id": 10,
      "title": null,
      "body": "«Неосупрематическая композиция #10»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #10»<br>Spray paint, 2012",      
      "img": "/images/projects/monotonous_objects/10.jpg"
    },
    {
      "id": 11,
      "title": null,
      "body": "«Неосупрематическая композиция #11»<br>Аэрозольная краска, 2012",
      "ebody": "«Neosuprematist composition #11»<br>Spray paint, 2012",      
      "img": "/images/projects/monotonous_objects/11.jpg"
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