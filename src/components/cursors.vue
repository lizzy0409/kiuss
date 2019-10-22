<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">В эпоху <a href="https://instructions.stranno.su/#Bookmark25">экранной культуры</a> большую часть времени мы наблюдаем, собственно, сам экран. Экран даёт нам работу и организует наш досуг. 
Так называемые художники во все времена пытались изобразить то, что наблюдали вокруг себя. А посему, мы объявляем о новой фигуративности — фигуративности объектов виртуального мира, метафор пользовательского интерфейса и всех тех образов, что даёт нам Экран.
</pre>
<pre class="annotation_en" style="text-align: left;">In the era of <a href="https://instructions.stranno.su/#Bookmark25">screen culture</a> most of the time we observe the screen. The screen gives us work and organizes our leisure time. 
Artists have always tried to portray what they were observing around them. Therefore, we announce a new figurativeness — figurativeness of objects of the virtual world, metaphor of the user interface and all those images that the Screen gives us.
</pre><br>
      <div class="cursors" v-for="(cursors, index) in cursorsArray" v-bind:index="index" v-bind:key="cursors.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="cursors.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="cursors.ebody"></pre>
        <h3 v-html="cursors.title"></h3> <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="cursors.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        cursorsJSON: 'src/assets/jsons/cursors.json', //Адрес к массиву json-данных постов
        cursorsArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.cursorsJSON).then(function(response) {
          this.cursorsArray = response.data}, function(error){})
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