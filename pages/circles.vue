<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
      <div class="circles" v-for="(circles, index) in circlesArray" v-bind:index="index" v-bind:key="circles.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{circles.title}}</h3> <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="circles.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="circles.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="circles.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Сircles",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных инсталляций Круги" },]
  },
    data: function() {
      return {

        circlesArray: 
[
    {  "id": 1,
      "title": null,
      "body":  "Серия инсталляций «Круги»<br>ПВХ, акрил, 2013",
      "ebody": "A series of urban installations «The Circles»<br>PVC, acrylic, 2013",
      "img": "/images/projects/circles/3.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/circles/(2).jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/circles/(1).jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/circles/(4).jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/circles/(5).jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/circles/(6).jpg"
    }, 
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/circles/7.jpg"
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