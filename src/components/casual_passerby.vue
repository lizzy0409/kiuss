<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Этот фото-проект — попытка обратить пристальное внимание на тех, кто олицетворяет собирательный образ случайного прохожего, сливающегося с городским пейзажем.

</pre>
<pre class="annotation_en" style="text-align: left;">This photo project is an attempt to pay close attention to those who represent the collective image of a casual passerby merging with the urban landscape.

</pre><br>
      <div class="casual_passerby" v-for="(casual_passerby, index) in casual_passerbyArray" v-bind:index="index" v-bind:key="casual_passerby.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{casual_passerby.title}}</h3> <!-- Заголовок -->
        <pre v-html="casual_passerby.body"></pre> <!-- Текст -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="casual_passerby.img"> <!-- Картинка -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  module.exports = {
    data: function() {
      return {
        casual_passerbyJSON: 'src/assets/jsons/casual_passerby.json', //Адрес к массиву json-данных постов
        casual_passerbyArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.casual_passerbyJSON).then(function(response) {
          this.casual_passerbyArray = response.data}, function(error){})
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