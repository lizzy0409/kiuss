<template>
  <div class="container">
    <div class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <pre class="annotation_ru none" style="text-align: left; opacity:0;">Серия инсталляций «Тарелочки»<br>Одноразовая посуда, аэрозольные краски, 2012 - 2014
     <br>Как и в других наших инсталляциях, мы подмешиваем в городской экстерьер неуместные означающие, нарушая привычную знаковую систему города. В рамках этой серии было поклеено более 100 таких инсталляций.
      </pre>
      <pre class="annotation_en" style="text-align: left;">A series of urban installations «Disposable Tableware»<br>Disposable tableware, spray paint, 2012 - 2014
     <br>As in our other installations, we mix inappropriate signifying in the city exterior, breaking the usual sign system of the city. Within the framework of this series, more than 100 such installations were glued together.
      </pre>
      <br/>
      <div
        class="disposable_tableware"
        v-for="(disposable_tableware, index) in disposable_tablewareArray"
        v-bind:index="index"
        v-bind:key="disposable_tableware.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{disposable_tableware.title}}</h3>
        <!-- Заголовок -->
        <pre
          class="ru none"
          style="text-align: left; opacity:0;"
          v-html="disposable_tableware.body"
        ></pre>
        <pre class="en" style="text-align: left;" v-html="disposable_tableware.ebody"></pre>
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="disposable_tableware.img" />
          <!-- Картинка -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Kiuss Group — Disposable Tableware",
    meta: [{ hid: "description", name: "description", content: "Группа Кюс — Серия уличных инсталляций Тарелочки" },]
  },
  data: function() {
    return {
     
      disposable_tablewareArray: 
[
    { "id": 1,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/1.jpg"
    },
    {
      "id": 2,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/2.jpg"
    },
    {
      "id": 3,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/3.jpg"
    },
    {
      "id": 4,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/4.jpg"
    }, 
    {
      "id": 5,
      "title": null,
      "body": null,      
      "img": "/images/projects/disposable_tableware/5.jpg"
    }, 
    {
      "id": 6,
      "title": null,
      "body": null,      
      "img": "/images/projects/disposable_tableware/6.jpg"
    },
    {
      "id": 7,
      "title": null,
      "body": null,      
      "img": "/images/projects/disposable_tableware/7.jpg"
    },
    {
      "id": 8,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/8.jpg"
    },
    {
      "id": 9,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/9.jpg"
    },
    {
      "id": 10,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/10.jpg"
    },
    {
      "id": 11,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/11.jpg"
    },
    {
      "id": 12,
      "title": null,
      "body": null,
      "img": "/images/projects/disposable_tableware/12.jpg"
    }
  ]
    };
  },

  methods: {
    

    ruen_check: function() {
      //функция проверяет подзагруженную страницу и приводит к соответствию с выбранным языком
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

  mounted: function() {
    //Вызывается синхронно сразу после создания экземпляра
    
    this.ruen_check();
  }
};
</script>

<style>
</style>