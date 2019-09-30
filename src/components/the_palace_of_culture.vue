<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Тридцатого июня 2018 года заброшенный особняк в спальном районе города Краснодара был захвачен и преобразован в культурный центр под названием «Особняк Культуры» (полное название — Автономная некоммерческая организация в сфере культуры, творчества и искусства "Краснодарский краевой художественно-исследовательский научно-просветительский центр «Особняк Культуры»"). В программе открытия были выставка, концерт, розыгрыш литературного журнала, а также в честь торжественного открытия была переименована остановка.<br><br>Лучшей документацией мероприятия будут активности в социальных сетях: <a target='_blank' href='https://vk.com/osobnyak_opening'>vk</a> | <a target='_blank' href='https://www.facebook.com/events/165475620978153'>fb</a>

Через полгода после его открытия администрация города объявила о возврате его в муниципальную собственность и открытии там детско-юношеского центра. Это очень наглядный пример полного цикла деурбанизации/джентрификации.
</pre>
<pre class="annotation_en" style="text-align: left;">On 30th of June 2018 the abandoned mansion in the sleeping area of Krasnodar was captured and transformed into a cultural center called "The Mansion of Culture" (full name — Autonomous Non-Commercial Organization in the Sphere of Culture, Art and Creativity "Krasnodar Regional Art Research and Education Center "The Mansion of Culture"). The program of the opening included an exhibition, a concert, a drawing of a literary magazine, as well as the opening ceremony included the renaming of the stop. <br><br>The best documentation of the event will be the activity in social networks: <a target='_blank' href='https://vk.com/osobnyak_opening'>vk</a> | <a target='_blank' href='https://www.facebook.com/events/165475620978153'>fb</a>

Six months after its opening, the city administration announced that it would return it to the municipal property and open a children's and youth center there. This is a very clear example of a complete cycle of deurbanization/gentrification.</pre><br>
      <div class="the_palace_of_culture" v-for="(the_palace_of_culture, index) in the_palace_of_cultureArray" v-bind:index="index" v-bind:key="the_palace_of_culture.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre class="ru none" style="text-align: left; opacity:0;" v-html="the_palace_of_culture.body"></pre> <!-- Текст -->
        <pre class="en" style="text-align: left;" v-html="the_palace_of_culture.ebody"></pre>
        <h3 v-html="the_palace_of_culture.title"></h3>  <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="the_palace_of_culture.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        the_palace_of_cultureJSON: 'src/assets/jsons/the_palace_of_culture.json', //Адрес к массиву json-данных постов
        the_palace_of_cultureArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.the_palace_of_cultureJSON).then(function(response) {
          this.the_palace_of_cultureArray = response.data}, function(error){})
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