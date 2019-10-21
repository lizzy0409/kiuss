<template>

  <div class="hello container">
    <div class="greetings">
      <div class="words">
        <div class="word-1">This is</div>
        <div class="word-2">Kiuss Group</div>
        <div class="word-3">Official</div>
        <div class="word-4">Site</div>
      </div>
    </div>

    <div class="menu-marker">
      <div class="cursor"><span>↑</span></div><br>
      <p id="msg" class="ru none" style="opacity:0;">{{msg_ru}}</p>
      <p id="msg" class="en">{{msg_en}}</p>
    </div>
  </div>

</template>

<script>

  module.exports = {

    data: function() {
      return {
        msg_ru: 'меню',
        msg_en: 'menu',
        helloJSON: 'src/assets/jsons/hello.json', //Адрес к массиву json-данных постов
        helloArray: [], //Сюда записывается ответ (response) от get-запроса
      }
    },

    methods: {
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.helloJSON).then(function(response) {
          this.helloArray = response.data}, function(error){})
      }
    },
    
    created: function() {//Вызывается синхронно сразу после создания экземпляра
        this.getAllPosts()
    }
  }

</script>

<style>

.hello {
  position: absolute;
  background-image: url(../assets/favicons/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(100% - 7px);
  height: 100%;
  margin-top: 0px;
  top: 0px;
}

.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.words {
  text-align: left;
  font-family: sf-medium;
  text-align: left;
  font-size: 30pt;
  line-height: 42px;
  color: white;
}

@keyframes greetings { /* Анимация слов */
  0%  {transform:translate(0, 20px); opacity:0;}
  80%{transform:translate(0, 0); opacity:1;}
  100%{transform:translate(0, 0); opacity:0;}
}

.word-1 {
  animation: greetings 8.2s cubic-bezier(.14,1.68,.33,.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3000ms;
  opacity: 0;
}

.word-2 {
  animation: greetings 7.8s cubic-bezier(.14,1.68,.33,.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3400ms;
  opacity: 0;
}

.word-3 {
  animation: greetings 7.4s cubic-bezier(.14,1.68,.33,.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3800ms;
  opacity: 0;
}

.word-4 {
  animation: greetings 7s cubic-bezier(.14,1.68,.33,.96); /* Применяем анимацию движения стрелки */
  animation-delay: 4200ms;
  opacity: 0;
}



</style>
