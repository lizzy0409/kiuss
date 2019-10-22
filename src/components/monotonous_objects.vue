<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">В рамках этого проекта выкрашивались отдельные объекты уличного экстерьера, что позволяло как бы изъять его из общего пейзажа. В результате объект, не находящийся в музее или даже не перенесённый в него, превращался в подобие инсталляции или даже реди-мейда. Практика <a href="https://stranno.su/#/neosuprematism">неосупрематическая</a>, поскольку супрематизм исследовал цвета, цветовые фигуры и их композиции.
</pre>
<pre class="annotation_en" style="text-align: left;">Within the framework of this project, the individual objects of the street exterior were painted in the one color, which made it possible to remove it from the general urban landscape. As a result, the object, which was not in the museum or even moved into it, turned into a similar installation or even a ready-made. This is <a href="https://stranno.su/#/neosuprematism">neosuprematist</a> practice, because suprematism investigated colors, colorful figures and their compositions.
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

 module.exports = {
    data: function() {
      return {
        monotonous_objectsJSON: 'src/assets/jsons/monotonous_objects.json', //Адрес к массиву json-данных постов
        monotonous_objectsArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.monotonous_objectsJSON).then(function(response) {
          this.monotonous_objectsArray = response.data}, function(error){})
      },

      ruen_check: function() {//функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком  
        if(ruen_status)
             {
               $('.ru').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_ru').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
            
            setTimeout(function(){
                $('.ru').addClass('none');
                $('.annotation_ru').addClass('none');
                $('.en').removeClass('none');
                $('.annotation_en').removeClass('none').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                $('.en').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               }, 500);
			   
             }
             
            else
             {
                
               $('.en').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
               $('.annotation_en').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

               setTimeout(function(){
                   $('.en').addClass('none');
                   $('.annotation_en').addClass('none');
                   $('.ru').removeClass('none');
                   $('.annotation_ru').removeClass('none').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');;
                   $('.ru').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                  }, 500);
               
             }
      }
    },
    
    created: function() {//Вызывается синхронно сразу после создания экземпляра
        this.getAllPosts();
        this.ruen_check();
    }
  }

</script>

<style>

</style>