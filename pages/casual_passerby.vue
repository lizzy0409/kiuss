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

  export default {
    head: {
    title: "Kiuss Group — Сasual Зasserby",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Фотопроект Случайные прохожие" },]
  },
    data: function() {
      return {
        
        casual_passerbyArray: 
[
  {  "id": 1,
    "title": null,
    "body":  null,
    "ebody":  null,
    "img": "/images/photography//casual_passerby/(11).jpg"
  },
  {
    "id": 2,
    "title": null,
    "body": null,
    "img": "/images/photography/casual_passerby/(9).jpg"
  },
  {
    "id": 3,
    "title": null,
    "body": null,
    "img": "/images/photography/casual_passerby/(12).jpg"
  },
  {
    "id": 4,
    "title": null,
    "body": null,
    "img": "/images/photography/casual_passerby/(8).jpg"
  }, 
  {
    "id": 5,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/14.jpg"
  }, 
  {
    "id": 6,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(16).jpg"
  },
  {
    "id": 7,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/10.jpg"
  }, 
  {
    "id": 8,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(13).jpg"
  }, 
  {
    "id": 9,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(15).jpg"
  }, 
  {
    "id": 10,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(7).jpg"
  }, 
  {
    "id": 11,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(6).jpg"
  }, 
  {
    "id": 12,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(5).jpg"
  }, 
  {
    "id": 13,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(4).jpg"
  }, 
  {
    "id": 14,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(3).jpg"
  }, 
  {
    "id": 16,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(1).jpg"
  }, 
  {
    "id": 17,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(17).jpg"
  }, 
  {
    "id": 18,
    "title": null,
    "body": null,      
    "img": "/images/photography/casual_passerby/(18).jpg"
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