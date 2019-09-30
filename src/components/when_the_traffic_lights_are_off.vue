<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Небольшая нарезка из роликов, на которых снят процесс уличной деятельности. Мигающий светофор выступает как аллегория ночи и раннего утра, когда светофоры обычно не работают, а мы начинаем своё дело.<br>2013г.
</pre>
<pre class="annotation_en" style="text-align: left;">Compilation of clips on which the process of street activity is filmed. Flashing traffic lights act as an allegory of night and early morning, when traffic lights usually do not work, and we start our own work. <br>2013
</pre><br>
      <div class="when_the_traffic_lights_are_off" v-for="(when_the_traffic_lights_are_off, index) in when_the_traffic_lights_are_offArray" v-bind:index="index" v-bind:key="when_the_traffic_lights_are_off.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre v-html="when_the_traffic_lights_are_off.body"></pre> <!-- Текст -->
        <h3 v-html="when_the_traffic_lights_are_off.title"></h3> <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="when_the_traffic_lights_are_off.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        when_the_traffic_lights_are_offJSON: 'src/assets/jsons/when_the_traffic_lights_are_off.json', //Адрес к массиву json-данных постов
        when_the_traffic_lights_are_offArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.when_the_traffic_lights_are_offJSON).then(function(response) {
          this.when_the_traffic_lights_are_offArray = response.data}, function(error){})
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