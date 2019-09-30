<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Эта серия фотографий ставит своей целью найти в довольно прозаических вещах и пейзажах какую-то новую информацию и, возможно, превратить повседневность в своего рода увлечение.

</pre>
<pre class="annotation_en" style="text-align: left;">This series of photos aims to find some new information in rather prosaic things and landscapes and, perhaps, to turn everyday life into a kind of hobby.

</pre><br>
      <div class="another_view" v-for="(another_view, index) in another_viewArray" v-bind:index="index" v-bind:key="another_view.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{another_view.title}}</h3> <!-- Заголовок -->
        <pre v-html="another_view.body"></pre> <!-- Текст -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="another_view.img"> <!-- Картинка -->
        </div>
      </div>
    </div>
  </div> 
 
</template>

<script>

  module.exports = {
    data: function() {
      return {
        another_viewJSON: 'src/assets/jsons/another_view.json', //Адрес к массиву json-данных постов
        another_viewArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.another_viewJSON).then(function(response) {
          this.another_viewArray = response.data}, function(error){})
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