<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Короткометражный ролик, у которого нет сюжетной линии, он лишь представляет собой совокупность независимых сцен, в которых происходят странные вещи. Все названия сцен на польском языке.<br>2013
</pre>
<pre class="annotation_en" style="text-align: left;">The short video, which does not have a storyline, is just a set of independent scenes, in which strange things happen. All the scene names are in Polish.<br>2013</pre><br>   
      <div class="to_jest_film" v-for="(to_jest_film, index) in to_jest_filmArray" v-bind:index="index" v-bind:key="to_jest_film.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre v-html="to_jest_film.body"></pre> <!-- Текст -->
        <h3 v-html="to_jest_film.title"></h3> <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="to_jest_film.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — To Jest Film",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Фильм «Фильм»" },]
  },
    data: function() {
      return {
       
        to_jest_filmArray: 
[
    {  "id": 1,
      "title": "<iframe src='https://www.youtube.com/embed/5Vy22GmFqvc?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen=''></iframe>",
      "body":  null,
      "img": "/images/projects/to_jest_film/logo.jpg"
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