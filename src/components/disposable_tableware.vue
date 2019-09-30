<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Как и в других наших инсталляциях, мы подмешиваем в городской экстерьер неуместные означающие, нарушая привычную знаковую систему города. В рамках этой серии было поклеено более 100 таких инсталляций.
</pre>
<pre class="annotation_en" style="text-align: left;">As in our other installations, we mix inappropriate signifying in the city exterior, breaking the usual sign system of the city. Within the framework of this series, more than 100 such installations were glued together.
</pre><br>
      <div class="disposable_tableware" v-for="(disposable_tableware, index) in disposable_tablewareArray" v-bind:index="index" v-bind:key="disposable_tableware.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{disposable_tableware.title}}</h3> <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="disposable_tableware.body"></pre>
        <pre class="en" style="text-align: left;" v-html="disposable_tableware.ebody"></pre> 
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="disposable_tableware.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        disposable_tablewareJSON: 'src/assets/jsons/disposable_tableware.json', //Адрес к массиву json-данных постов
        disposable_tablewareArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.disposable_tablewareJSON).then(function(response) {
          this.disposable_tablewareArray = response.data}, function(error){})
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