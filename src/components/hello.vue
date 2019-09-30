<template>

  <div class="hello container">
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

.menu-marker {
  position: absolute;
  bottom: 12px;
  left: calc(50% - 20px);
  text-align: center;
  color: white;
}

@keyframes cursor { /* Анимация движения стрелки */
  0%  {transform:translate(0); opacity:0; -webkit-transform:translate(0); -moz-transform:translate(0); -ms-transform:translate(0); -o-transform:translate(0);}
  75% {transform:translate(0, -14px); opacity:1; -webkit-transform:translate(0, -14px); -moz-transform:translate(0, -14px); -ms-transform:translate(0, -14px); -o-transform:translate(0, -14px);}
  100%{transform:translate(0, -14px); opacity:0; -webkit-transform:translate(0, -14px); -moz-transform:translate(0, -14px); -ms-transform:translate(0, -14px); -o-transform:translate(0, -14px);}
}

.cursor span {
  font-size: 17pt;
  left: 14px;
  animation: cursor 2s ease-in-out infinite; /* Применяем анимацию движения стрелки */
  -webkit-animation: cursor 2s ease-in-out infinite;
  -moz-animation: cursor 2s ease-in-out infinite;
  -o-animation: cursor 2s ease-in-out infinite;
  -ms-animation: cursor 2s ease-in-out infinite;
}

</style>
