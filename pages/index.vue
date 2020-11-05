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
      <div class="cursor">
        <span>↑</span>
      </div>
      <br />
      <p id="msg" class="ru none" style="opacity:0;">{{msg_ru}}</p>
      <p id="msg" class="en">{{msg_en}}</p>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Kiuss Group",
    meta: []
  },

  data: function() {
    return {
      msg_ru: "меню",
      msg_en: "menu"
    };
  },

  methods: {
    Animation() {
      setTimeout(() => {
        let elem = document.querySelector(".greetings");
        elem.style.display = "none";
      }, 10200);
    }
  },

  mounted: function() {this.Animation();}
};
</script>

<style>
.hello {
  position: absolute;
  background-image: url(../static/favicons/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(100% - 7px);
  margin-top: 0px;
  top: 8px;
  height: calc(100% - 15px);
}

@media (max-width: 1234px) {

  .hello {
    height: 100%;
    top: 0;
  }

  .menu-marker {
    height: auto !important;
  }

}

.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
}

@keyframes greetings {
  /* Анимация слов */
  0% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  80% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}

.words {
  text-align: left;
  font-family: sf-medium;
  text-align: left;
  font-size: 30pt;
  line-height: 42px;
  color: white;
}

.word-1 {
  animation: greetings 8.2s cubic-bezier(0.14, 1.68, 0.33, 0.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3000ms;
  opacity: 0;
}

.word-2 {
  animation: greetings 7.8s cubic-bezier(0.14, 1.68, 0.33, 0.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3400ms;
  opacity: 0;
}

.word-3 {
  animation: greetings 7.4s cubic-bezier(0.14, 1.68, 0.33, 0.96); /* Применяем анимацию движения стрелки */
  animation-delay: 3800ms;
  opacity: 0;
}

.word-4 {
  animation: greetings 7s cubic-bezier(0.14, 1.68, 0.33, 0.96); /* Применяем анимацию движения стрелки */
  animation-delay: 4200ms;
  opacity: 0;
}

.menu-marker {
  left: calc(50% - 20px);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 30pt;
  font-family: sf-medium;
  line-height: 57px;
  animation: menu-marker-show 7s;
  animation-delay: 11200ms;
  animation-fill-mode: forwards;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.479);
}

@media (max-width: 1234px) {
  .menu-marker {
    background-color: rgba(0, 0, 0, 0) !important;
  }
}

@keyframes menu-marker-show {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes cursor {
  /* Анимация движения стрелки */
  0% {
    transform: translate(0);
    opacity: 0;
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -ms-transform: translate(0);
    -o-transform: translate(0);
  }
  75% {
    transform: translate(0, -14px);
    opacity: 1;
    -webkit-transform: translate(0, -14px);
    -moz-transform: translate(0, -14px);
    -ms-transform: translate(0, -14px);
    -o-transform: translate(0, -14px);
  }
  100% {
    transform: translate(0, -14px);
    opacity: 0;
    -webkit-transform: translate(0, -14px);
    -moz-transform: translate(0, -14px);
    -ms-transform: translate(0, -14px);
    -o-transform: translate(0, -14px);
  }
}

.cursor {
  position: relative;
  width: 20px;
}
.cursor span {
  position: absolute;
  bottom: 0px;
  top: 0;
  left: 0;
  right: 0;
  animation: cursor 2s ease-in-out infinite; /* Применяем анимацию движения стрелки */
  -webkit-animation: cursor 2s ease-in-out infinite;
  -moz-animation: cursor 2s ease-in-out infinite;
  -o-animation: cursor 2s ease-in-out infinite;
  -ms-animation: cursor 2s ease-in-out infinite;
  animation-delay: 11800ms;
  opacity: 0;
}
</style>


