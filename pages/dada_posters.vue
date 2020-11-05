<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
      <div class="dada_posters" v-for="(dada_posters, index) in dada_postersArray" v-bind:index="index" v-bind:key="dada_posters.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{dada_posters.title}}</h3> <!-- Заголовок -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="dada_posters.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="dada_posters.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="dada_posters.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
    head: {
    title: "Kiuss Group — Dada Posters",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Постеры DADA" },]
  },
    data: function() {
      return {
        
        dada_postersArray: 
[
    {  "id": 1,
      "title": null,
      "body":  "Серия постеров «DADA»<br>Печать на бумаге, 2012",
      "ebody":  "A series of posters «DADA»<br>Print on paper, 2012",
      "img": "/images/projects/dada_posters/(1).jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/dada_posters/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/dada_posters/(3).jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/dada_posters/(4).jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/dada_posters/(5).jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/dada_posters/(6).jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/dada_posters/(7).jpg"
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