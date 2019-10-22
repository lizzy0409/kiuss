<template>

  <div class="container">
    <div class="sub-container"> <!-- Контент не показывается во время загрузки -->
    <pre class="annotation_ru none" style="text-align: left; opacity:0;">Пятого сентября 2018 года Шуховская башня в центре города Краснодара была захвачена и преобразована в галерею. Первым событием стала наша выставка под названием «Выставка #4». На данный момент на Вершине проведено несколько выставок разных авторов. 

« ... В то же время на официальном СМИ, которое, кстати, по меркам нашего казачьего региона считается ещё весьма вольнодумным, два официальных лица комментируют выставку на башне. Причем оба – и начальник госохраны культурного наследия края, и пресс-служба ТРЦ – приходят к тому, что несанкционированная галерея на памятнике архитектуры не противоречит ни законам, ни интересам бизнеса. Казалось бы: город – это наслоение самых разных конфликтов. И вот в центре этих пересечений вдруг обнаружено место, которое будто бы ничьё. Пустое и укромное. Обломок советского модернизма, вершина которого скрыта от глаз давно не используемыми рекламными щитами.»

Выставки:

Выставка без названия, Алексей Илькаев (Sad Face), 8 июля - 20 июля 2019
«We Will», Plague, групповая выставка (Паша Безор, Настя Васильева, Артур Голяков, Владимир Омутов, Стас Тоска, Ваня Венмер), 28 июня - 4 июля 2019
«Разочарован», Дмитрий Бедрак, 24 сентября - 1 октября 2018 (организована посетителем выставки на основе предыдущей выставки)
«Ненависть к поэзии», Юлия Шафаростова, 21-24 сентября, 2018
«Выставка #4», Группа Кюс, 5-21 сентября 2018

Документация: <a href="https://vk.com/high_of_culture">vk</a> | <a href="https://www.facebook.com/events/2150624241876116/">fb</a> | СМИ: <a href="https://www.yuga.ru/news/434018/">1</a> <a href="https://kuban24.tv/item/v-krasnodare-na-shuhovskoj-bashne-otkrylsya-proekt-we-will">2</a> <a href="https://www.yugopolis.ru/news/potomki-inzhenera-shuhova-posetili-vystavku-na-vershine-shuhovskoj-bashni-v-krasnodare-120668">3</a> <a href="https://daily.afisha.ru/news/28417-hudozhnik-sad-face-izobrazil-na-vershine-shuhovskoy-bashni-v-krasnodare-ogromnoe-cherno-beloe-lico/">4</a>
</pre>
<pre class="annotation_en" style="text-align: left;">On the 5th of September 2018 the Shukhov Tower in the center of Krasnodar was captured and transformed into a gallery. The first event was our exhibition called "Exhibition #4". At the moment, several exhibitions of different authors have been organized at the High.

« ... At the same time, the official media, which, by the way, is still considered to be very liberal by the standards of our Cossack region, two officials comment on the exhibition on the tower. Both the head of the state protection of the cultural heritage of the region and the press service of the shopping mall come to the conclusion that an unauthorized gallery on an architectural monument does not contradict either laws or business interests. It would seem that the city is a layer of various conflicts. And here in the center of these intersections suddenly the place which as if is nobody's is found out. Empty and secluded. A fragment of Soviet modernism, the top of which is hidden from view by long unused billboards.»

Exhibitions:

Untitled exhibition, Sad Face, 8 July - 20 July 2019
«We Will», Plague, group exhibition (Pasha Bezor, Nastya Vasileva, Arthur Golyakov, Vladimir Omutov, Stas Tocka, Vanya Venmer), 28 June - 4 July 2019
«Disappointed», Dmitry Bedrak, 24 September - 1 October 2018 (organized by the visitor of the exhibition on the basis of the previous exhibition)
«Hatred of Poetry», Julia Shafarostova, 21-24 September 2018
«Exhibition #4», Kiuss Group, 5-21 September 2018

Documetation: <a href="https://vk.com/high_of_culture">vk</a> | <a href="https://www.facebook.com/events/2150624241876116/">fb</a> | media: <a href="https://www.yuga.ru/news/434018/">1</a> <a href="https://kuban24.tv/item/v-krasnodare-na-shuhovskoj-bashne-otkrylsya-proekt-we-will">2</a> <a href="https://www.yugopolis.ru/news/potomki-inzhenera-shuhova-posetili-vystavku-na-vershine-shuhovskoj-bashni-v-krasnodare-120668">3</a> <a href="https://daily.afisha.ru/news/28417-hudozhnik-sad-face-izobrazil-na-vershine-shuhovskoy-bashni-v-krasnodare-ogromnoe-cherno-beloe-lico/">4</a>
</pre><br>
      <div class="the_apex_of_culture" v-for="(the_apex_of_culture, index) in the_apex_of_cultureArray" v-bind:index="index" v-bind:key="the_apex_of_culture.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <pre v-html="the_apex_of_culture.body"></pre> <!-- Текст -->
        <h3 v-html="the_apex_of_culture.title"></h3> <!-- Заголовок -->
        <div v-lazy-container="{ selector: 'img' }">
          <img v-bind:data-src="the_apex_of_culture.img"> <!-- Картинка -->
        </div>
      </div>
    </div> 
  </div>
 
</template>

<script>

 module.exports = {
    data: function() {
      return {
        the_apex_of_cultureJSON: 'src/assets/jsons/the_apex_of_culture.json', //Адрес к массиву json-данных постов
        the_apex_of_cultureArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.the_apex_of_cultureJSON).then(function(response) {
          this.the_apex_of_cultureArray = response.data}, function(error){})
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