<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">В эпоху <a href="https://instructions.stranno.su/ru/#screen_culture">экранной культуры</a> большую часть времени мы наблюдаем, собственно, сам экран. Экран даёт нам работу и организует наш досуг. 
Так называемые художники во все времена пытались изобразить то, что наблюдали вокруг себя. А посему, мы объявляем о новой фигуративности — фигуративности объектов виртуального мира, метафор пользовательского интерфейса и всех тех образов, что даёт нам Экран. Однако, воспроизведение современных метафор пользовательского интерфейса архаичными методами демонстрирует невозможность такого воспроизведения — человек может сколь угодно точно воспроизвести реальность на холсте, но с "pixel perfect" точностью воспроизвести экран вряд ли.
</pre>
<pre class="annotation_en" style="text-align: left;">In the era of <a href="https://instructions.stranno.su/en/#screen_culture">screen culture</a> most of the time we observe the screen. The screen gives us work and organizes our leisure time. 
Artists have always tried to portray what they were observing around them. Therefore, we announce a new figurativeness — figurativeness of objects of the virtual world, metaphor of the user interface and all those images that the Screen gives us. However, the reproduction of modern metaphors of the user interface by archaic methods demonstrates the impossibility of such reproduction - a human being can reproduce reality on canvas as accurately as he likes, but with "pixel perfect" accuracy he can hardly reproduce the screen.
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

 export default {
    head: {
    title: "Kiuss Group — Screen Painting",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Живопись экрана" },]
  },

    data: function() {
      return {
        
        cursorsArray: 

[
    { "id": 0,
      "title": "<iframe src='https://www.youtube.com/embed/4jS0rHKKlGk?modestbranding=1;rel=0;autohide=1;controls=1;' frameborder='0' allowfullscreen></iframe>",
      "body": "«SuperMarket App»<br>ТРЦ, акрил, 12х21м, 2018г<br>По всей видимости, это самый большой нарисованный курсор в мире.",
      "ebody": "«SuperMarket App»<br>Shopping Mall, acrylic, 12х21m, 2018<br>Apparently, it's the biggest cursor in the world.",
      "img": "/images/projects/cursors/0.jpg"
    },
    {  "id": 1,
      "title": null,
      "body": "Из серии «Курсоры»<br>Акрил, 2017",
      "ebody": "From «Cursors» series<br>Acrylic, 2017",
      "img": "/images/projects/cursors/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": "«Шестьдесят пять»<br>Аэрозольная краска, 2013",
      "ebody": "«Sixty-five»<br>Spray paint, 2013",
      "img": "/images/projects/cursors/2.jpg"
    }, 
    {
      "id": 27,
      "title": null,
      "body": "«Main glitch on Windows 10»<br>Поликарбонат, акрил, 150х105см, 2018",    
      "ebody": "«Main glitch on Windows 10»<br>Polycarbonate, acrylic, 150х105cm, 2018",  
      "img": "/images/projects/cursors/27.jpg"
    }, 
    {
      "id": 28,
      "title": null,
      "body": "«Interface»<br>Поликарбонат, акрил, 150х105см, 2018",  
      "ebody": "«Interface»<br>Polycarbonate, acrylic, 150х105cm, 2018",      
      "img": "/images/projects/cursors/28.jpg"
    }, 
    {
      "id": 29,
      "title": null,
      "body": "«This chicken is dead»<br>Поликарбонат, акрил, 150х105см, 2018", 
      "ebody": "«This chicken is dead»<br>Polycarbonate, acrylic, 150х105cm, 2018",      
      "img": "/images/projects/cursors/29.jpg"
    }, 
    {
      "id": 30,
      "title": null,
      "body": "«WxMBiJ6Pd2Y.jpg»<br>Поликарбонат, акрил, 150х105см, 2018",  
      "ebody": "«WxMBiJ6Pd2Y.jpg»<br>Polycarbonate, acrylic, 150х105cm, 2018",     
      "img": "/images/projects/cursors/30.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/cursors/(3).jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/cursors/(4).jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": "«Шрифт WATERFALL_WOODCUT1»<br>ДВП, акрил, лак, 170х137см, 2018",    
      "ebody": "«The WATERFALL_WOODCUT1 typeface»<br>Fiberboard, acrylic, lacquer, 170х137cm, 2018",       
      "img": "/images/projects/cursors/(5).jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": "«Ваша копия»<br>ДВП, акрил, лак, 137х85см, 2016", 
      "ebody": "«Your copy»<br>Fiberboard, acrylic, lacquer, 137х85cm, 2018",      
      "img": "/images/projects/cursors/(6).jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(7).jpg"
    }, 
    {
      "id": 8,
      "title": null,
      "body": "«Новая мамка»<br>2013", 
      "ebody": "«The New Mamka»<br>2013",     
      "img": "/images/projects/cursors/(8).jpg"
    }, 
    {
      "id": 9,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(9).jpg"
    }, 
    {
      "id": 10,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(10).jpg"
    }, 
    {
      "id": 11,
      "title": null,
      "body": "«Палитра MS Paint»<br>ДВП, акрил, лак, 170х137см, 2018",  
      "ebody": "«The palette of the MS Paint»<br>Fiberboard, acrylic, lacquer, 170х137cm, 2018",    
      "img": "/images/projects/cursors/(11).jpg"
    }, 
    {
      "id": 12,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(12).jpg"
    }, 
    {
      "id": 13,
      "title": null,
      "body": "«Попап»<br>ДВП, акрил, лак, 137х85см, 2016",  
      "ebody": "«Popup»<br>Fiberboard, acrylic, lacquer, 137х85cm, 2016",     
      "img": "/images/projects/cursors/(13).jpg"
    }, 
    {
      "id": 14,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(14).jpg"
    }, 
    {
      "id": 16,
      "title": null,
      "body": "«Установочный экран Windows 98»<br>ДВП, акрил, лак, 170х137см, 2018",     
      "ebody": "«The Installation screen of Windows 98»<br>Fiberboard, acrylic, lacquer, 170х137cm, 2018",    
      "img": "/images/projects/cursors/(16).jpg"
    }, 
    {
      "id": 17,
      "title": null,
      "body": "«Контекстное меню»<br>ДВП, акрил, лак, 85х137см, 2016",  
      "ebody": "«Context Menu»<br>Fiberboard, acrylic, lacquer, 85х137см, 2016",     
      "img": "/images/projects/cursors/(17).jpg"
    }, 
    {
      "id": 18,
      "title": null,
      "body": "«Широкоэкранный кофе с древесиной»<br>2013",      
      "ebody": "«The Widescreen coffee with wood»<br>2013",     
      "img": "/images/projects/cursors/(18).jpg"
    }, 
    {
      "id": 19,
      "title": null,
      "body": "«Ненависть»<br>2013", 
      "ebody": "«The Hate»<br>2013",     
      "img": "/images/projects/cursors/(19).jpg"
    }, 
    {
      "id": 20,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(20).jpg"
    }, 
    {
      "id": 21,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/21.jpg"
    }, 
    {
      "id": 22,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(22).jpg"
    }, 
    {
      "id": 23,
      "title": null,
      "body": "«Шкутакурка»<br>2013",   
      "ebody": "«Shkutakurka»<br>2013",    
      "img": "/images/projects/cursors/(23).jpg"
    }, 
    {
      "id": 24,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(24).jpg"
    }, 
    {
      "id": 26,
      "title": null,
      "body": null,      
      "img": "/images/projects/cursors/(26).jpg"
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