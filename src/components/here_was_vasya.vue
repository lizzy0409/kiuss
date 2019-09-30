<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Вася — тэггер, который хочет прославиться, рисуя везде своё имя. Он - сатира над всей бренностью его занятия. Маленький человечек, который с помощью лестниц пытается вскарабкаться повыше, чтобы все видели, что здесь был Вася.
</pre>
<pre class="annotation_en" style="text-align: left;">This series refers to the established Russian phraseology "here was Vasya", meaning any senseless inscription on the wall.

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

 module.exports = {
    data: function() {
      return {
        here_was_vasyaJSON: 'src/assets/jsons/here_was_vasya.json', //Адрес к массиву json-данных постов
        here_was_vasyaArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.here_was_vasyaJSON).then(function(response) {
          this.here_was_vasyaArray = response.data}, function(error){})
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