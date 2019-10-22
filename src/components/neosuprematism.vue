<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Направление, наследующее традицию супрематизма, однако отличающееся объёмной, а не плоской геометрией, а также довольно сложными названиями. Если супрематисты пытались найти начало живописи, изъяв фон, цвет и упростив силуэты, то неосупрематизм не ищет ни начала, ни конца живописи, он пытается создать пустоту между означающим и означаемым, чтобы где-то там найти новые способы связать визуальное и концептуальное.

Здесь представлены как уличные работы (муралы и инсталляции), так и станковые работы.

В рамках неосупрематизма смотрите также проект <a href="https://stranno.su/#/monotonous_objects">«Тела однотонные»</a>.
</pre>
<pre class="annotation_en" style="text-align: left;">It is an art movement that inherits the tradition of suprematism, but is distinguished by its voluminous rather than flat geometry and rather complex names. If the suprematists tried to find the beginning of painting by removing the background, colour and simplifying the silhouettes, then neosuprematism is not looking for either the beginning or the end of painting, it tries to create a void between the signifying and the signified to find new ways of linking the visual and the conceptual.

Here you can see street works (murals and installations) and plates artwork.

Within the framework of neosuprematism, see also the project <a href="https://stranno.su/#/monotonous_objects">«Monotonous Objects»</a>.
</pre><br>
      <div class="neosuprematism" v-for="(neosuprematism, index) in neosuprematismArray" v-bind:index="index" v-bind:key="neosuprematism.index"> 
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="neosuprematism.body"></pre>
        <pre class="en" style="text-align: left;" v-html="neosuprematism.ebody"></pre> 
        <h3 v-html="neosuprematism.title"></h3>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="neosuprematism.img">
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        neosuprematismJSON: 'src/assets/jsons/neosuprematism.json', //Адрес к массиву json-данных постов
        neosuprematismArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.neosuprematismJSON).then(function(response) {
          this.neosuprematismArray = response.data}, function(error){})
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