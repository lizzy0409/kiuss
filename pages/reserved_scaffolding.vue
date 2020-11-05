<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Инсталляция «Заповедные леса»
      <br>Совместно с арт-группой Афронт.
Смешанная техника, 2015
      <br>Строительные леса — сакральный символ современного Краснодара, города вечной стройки и выборочных реставрационных работ. Забота об архитектурном наследии воспринимается властью только как разменная монета политического популизма, а будущее города исчезает в тесноте возводимых жилищных комплексов и торгово-развлекательных центров. Леса находятся за оградительной лентой как особый музейный экспонат, как запретная зона. Так и горожане ограждены от принятия решений, связанных с существованием и развитием города. Если Краснодар — музей, то его жители либо пассивные зрители, либо спящие гардеробщики. Наша работа напоминает: за лицемерным фасадом казачьего рая скрывается отсутствие прошлого, беспомощность настоящего и невозможность будущего.
</pre>
    <pre class="annotation_en" style="text-align: left;">Installation «Reserved Scaffolding»
      <br>Collaboration with art-group Afront.
Mixed media, 2015
      <br>"Scaffolding is the sacral symbol of modern Krasnodar, the city of eternal construction and selective restoration works. Concern for the architectural heritage is perceived by the authorities only as a bargaining chip of political populism, and the future of the city disappears in the tightness of housing complexes and shopping and entertainment centers. The scaffolding are located behind the fencing tape as a special museum exhibit, as a forbidden zone. The citizens are also protected from making decisions related to the existence and development of the city. If Krasnodar is a museum, its residents are either passive spectators or sleeping wardrobe attendants. Our work reminds us: behind the hypocritical facade of the Cossack paradise is the absence of the past, the helplessness of the present and the impossibility of the future."
    </pre><br>
      <div class="scaffolding" v-for="(scaffolding, index) in scaffoldingArray" v-bind:index="index" v-bind:key="scaffolding.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{scaffolding.title}}</h3> <!-- Заголовок -->
        <pre v-html="scaffolding.body"></pre> <!-- Текст -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="scaffolding.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 export default {
   head: {
    title: "Kiuss Group — Reserved Scaffolding",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — инсталляция «Заповедные леса»" },]
  },
    data: function() {
      return {
      
        scaffoldingArray: 
[
    {  "id": 1,
      "title": null,
      "body": null,
      "ebody": null,
      "img": "/images/projects/scaffolding/4.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/scaffolding/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/scaffolding/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/scaffolding/1.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/scaffolding/5.jpg"
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