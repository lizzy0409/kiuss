<template>
  <header>
    <!-- Десктопное меню -->
    <nav class="desktop-menu">
      <!-- Навигационное меню сверху -->
      <div class="menu-container navigation">
        <div class="menu ru none" style="opacity:0;">
          <router-link to="" class="padding menu" onclick="ToggleMenuProjects();">проекты</router-link>
          <a href="https://instructions.stranno.su/" class="padding menu" target="_blank">инструкции</a>
          <a href="https://derive.stranno.su/" class="padding menu" target="_blank">дрейф</a>
          <a href="https://dfap.stranno.su/" class="padding menu" target="_blank">dfap</a>
          <a href="https://povtorenie.stranno.su/" class="padding menu" target="_blank">повторение</a>
          <router-link to="/about" class="menu" onclick="ToggleMenuAbout();">о нас</router-link>
        </div>

        <div class="menu en">
          <router-link to="" class="padding menu" onclick="ToggleMenuProjects();">projects</router-link>
          <a href="https://instructions.stranno.su/" class="padding menu" target="_blank">instructions</a>
          <a href="https://derive.stranno.su/" class="padding menu" target="_blank">dérive</a>
          <a href="https://dfap.stranno.su/" class="padding menu" target="_blank">dfap</a>
          <a href="https://povtorenie.stranno.su/" class="padding menu" target="_blank">povtorenie</a>
          <router-link to="/about" class="menu" onclick="ToggleMenuAbout();">about</router-link>
        </div>

      </div>
      <!-- /Навигационное меню сверху -->

      <!-- Меню с проектами сбоку -->
      <div class="side-menu-container">
        
        <div class="side-menu" onclick="sideMenuHide();">
          <!-- По клику на один из пунктов меню скрыть его -->
          <div class="projects sub-container side-menu_ru none" style="opacity:0;">
            <br><br><br>
            <router-link to="/the_channel_of_culture" class="the_channel_of_culture">Канал Культуры</router-link><br>
            <router-link to="/the_ark_of_culture" class="the_ark_of_culture">Ковчег Культуры</router-link><br>
            <router-link to="/the_high_of_culture" class="the_high_of_culture">Вершина Культуры</router-link><br>
            <router-link to="/the_mansion_of_culture" class="the_mansion_of_culture">Особняк Культуры</router-link><br>
            <router-link to="/threads" class="threads">Нити</router-link><br>
            <router-link to="/simulation_of_welfare" class="simulation_of_welfare">Симуляция благополучия</router-link><br>
            <router-link to="/strange_posters" class="strange_posters">Постеры Странно</router-link><br>
            <router-link to="/concrete_around" class="concrete_around">Вокруг бетон</router-link><br>
            <router-link to="/neosuprematism" class="neosuprematism">Неосупрематизм</router-link><br>
            <router-link to="/screen_painting" class="screen_painting">Живопись экрана</router-link><br>
            <router-link to="/reserved_scaffolding" class="reserved_scaffolding">Заповедные леса</router-link><br>
            <router-link to="/gastarbeiters_under_protection" class="gastarbeiters_under_protection">Гастарбайтеры под защитой</router-link><br>
            <router-link to="/absurd_inscriptions" class="absurd_inscriptions">Абсурдные надписи</router-link><br>
            <router-link to="/monotonous_objects" class="monotonous_objects">Тела однотонные</router-link><br>
            <router-link to="/disposable_tableware" class="disposable_tableware">Тарелочки</router-link><br>
            <router-link to="/when_the_traffic_lights_are_off" class="when_the_traffic_lights_are_off">Когда не работают светофоры</router-link><br>
            <router-link to="/to_jest_film" class="to_jest_film">To jest film</router-link><br>
            <router-link to="/derive_fest" class="derive_fest">Фестиваль Дрейф</router-link><br>
            <router-link to="/here_was_vasya" class="here_was_vasya">Здесь был Вася</router-link><br>
            <router-link to="/casual_passerby" class="casual_passerby">Случайные прохожие</router-link><br>
            <router-link to="/another_view" class="another_view">Другой ракурс</router-link><br>
            <router-link to="/circles" class="circles">Круги</router-link><br>
            <router-link to="/dada_posters" class="dada_posters">Постеры DADA</router-link><br>
            <router-link to="/other" class="other">Разное</router-link>

            <div class="side-menu-picture"></div>
          </div>

          <div class="projects sub-container side-menu_en" style="opacity:0;">
            <br><br><br>
            <router-link to="/the_channel_of_culture" class="the_channel_of_culture">The Channel of Culture</router-link><br>
            <router-link to="/the_ark_of_culture" class="the_ark_of_culture">The Ark of Culture</router-link><br>
            <router-link to="/the_high_of_culture" class="the_high_of_culture">The High of Culture</router-link><br>
            <router-link to="/the_mansion_of_culture" class="the_mansion_of_culture">The Mansion of Culture</router-link><br>
            <router-link to="/threads" class="threads">The Theads</router-link><br>
            <router-link to="/simulation_of_welfare" class="simulation_of_welfare">Simulation of Welfare</router-link><br>
            <router-link to="/strange_posters" class="strange_posters">Strange Posters</router-link><br>
            <router-link to="/concrete_around" class="concrete_around">Concrete Around</router-link><br>
            <router-link to="/neosuprematism" class="neosuprematism">Neosuprematism</router-link><br>
            <router-link to="/screen_painting" class="screen_painting">Screen Painting</router-link><br>
            <router-link to="/reserved_scaffolding" class="reserved_scaffolding">Reserved Scaffolding</router-link><br>
            <router-link to="/gastarbeiters_under_protection" class="gastarbeiters_under_protection">Gastarbeiters Under Protection</router-link><br>
            <router-link to="/absurd_inscriptions" class="absurd_inscriptions">Absurd Inscriptions</router-link><br>
            <router-link to="/monotonous_objects" class="monotonous_objects">Monotonous Objects</router-link><br>
            <router-link to="/disposable_tableware" class="disposable_tableware">Disposable Tableware</router-link><br>
            <router-link to="/when_the_traffic_lights_are_off" class="when_the_traffic_lights_are_off">When The Traffic Lights Are Off</router-link><br>
            <router-link to="/to_jest_film" class="to_jest_film">To Jest Film</router-link><br>
            <router-link to="/derive_fest" class="derive_fest">The Dérive Festival</router-link><br>
            <router-link to="/here_was_vasya" class="here_was_vasya">Here was Vasya</router-link><br>
            <router-link to="/casual_passerby" class="casual_passerby">Casual Passerby</router-link><br>
            <router-link to="/another_view" class="another_view">Another View</router-link><br>
            <router-link to="/circles" class="circles">The Circles</router-link><br>
            <router-link to="/dada_posters" class="dada_posters">DADA Posters</router-link><br>
            <router-link to="/other" class="other">Other</router-link>
            
            <div class="side-menu-picture"></div>
          </div>
 
        </div>
       
      </div>
      <!-- /Меню с проектами сбоку -->
    </nav>
    <!-- /Десктопное меню -->

    <!-- Мобильное меню -->
    <nav class="mobile-menu">

      <!-- Гамбургер -->
      <button id="HamburgerButton" onclick="MobileMenu();" class="hamburger hamburger--collapse" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <!-- /Гамбургер -->

      <!-- По нажатию на гамбургер открываем меню -->
      <div class="main-menu">

        <!-- Основное меню -->
        <div class="menu none">

          <div class="sub-menu table-cell ru none" style="opacity: 0">
            <ul class="mobile">
              <li class="mobile">
                <div class="blackbutton" onclick="projectsMenu();">
                  <router-link to="" onclick="ToggleMenuProjects();">проекты</router-link>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://instructions.stranno.su/">инструкции</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://derive.stranno.su/">дрейф</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://dfap.stranno.su/">dfap</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://povtorenie.stranno.su/">повторение</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton" onclick="MobileMenu();">
                  <router-link to="/about">о нас</router-link>
                </div>
              </li>
            </ul>
          </div>

          <div class="sub-menu table-cell en none" style="opacity: 0">
            <ul class="mobile">
              <li class="mobile">
                <div class="blackbutton" onclick="projectsMenu();">
                  <router-link to="" onclick="ToggleMenuProjects();">projects</router-link>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://instructions.stranno.su/">instructions</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://derive.stranno.su/">dérive</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://dfap.stranno.su/">dfap</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton">
                  <a target="_blank" href="https://povtorenie.stranno.su/">povtorenie</a>
                </div>
              </li>
              <li class="mobile">
                <div class="blackbutton" onclick="MobileMenu();">
                    <router-link to="/about">about</router-link>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <!-- /Основное меню -->

        <!-- Меню Проекты -->
        <div class="projects-menu none">

          <div class="mobile-projects ru none" style="opacity: 0">
            <router-link onclick="MobileMenu();" to="/the_channel_of_culture">Канал Культуры</router-link><br>
            <router-link onclick="MobileMenu();" to="/the_high_of_culture">Вершина Культуры</router-link><br>
            <router-link onclick="MobileMenu();" to="/the_mansion_of_culture">Особняк Культуры</router-link><br>
            <router-link onclick="MobileMenu();" to="/threads">Нити</router-link><br>
            <router-link onclick="MobileMenu();" to="/simulation_of_welfare">Симуляция благополучия</router-link><br>
            <router-link onclick="MobileMenu();" to="/strange_posters">Постеры Странно</router-link><br>
            <router-link onclick="MobileMenu();" to="/concrete_around">Вокруг бетон</router-link><br>
            <router-link onclick="MobileMenu();" to="/neosuprematism">Неосупрематизм</router-link><br>
            <router-link onclick="MobileMenu();" to="/screen_painting">Живопись экрана</router-link><br>
            <router-link onclick="MobileMenu();" to="/reserved_scaffolding">Заповедные леса</router-link><br>
            <router-link onclick="MobileMenu();" to="/gastarbeiters_under_protection">Гастарбайтеры под защитой
            </router-link><br>
            <router-link onclick="MobileMenu();" to="/absurd_inscriptions">Абсурдные надписи</router-link><br>
            <router-link onclick="MobileMenu();" to="/monotonous_objects">Тела однотонные</router-link><br>
            <router-link onclick="MobileMenu();" to="/disposable_tableware">Тарелочки</router-link><br>
            <router-link onclick="MobileMenu();" to="/when_the_traffic_lights_are_off">Когда не работают светофоры
            </router-link><br>
            <router-link onclick="MobileMenu();" to="/to_jest_film">To jest film</router-link><br>
            <router-link onclick="MobileMenu();" to="/derive_fest">Фестиваль Дрейф</router-link><br>
            <router-link onclick="MobileMenu();" to="/here_was_vasya">Здесь был Вася</router-link><br>
            <router-link onclick="MobileMenu();" to="/casual_passerby">Случайные прохожие</router-link><br>
            <router-link onclick="MobileMenu();" to="/another_view">Другой ракурс</router-link><br>
            <router-link onclick="MobileMenu();" to="/circles">Круги</router-link><br>
            <router-link onclick="MobileMenu();" to="/dada_posters">Постеры DADA</router-link><br>
            <router-link onclick="MobileMenu();" to="/other">Разное</router-link>
          </div>

          <div class="mobile-projects en none" style="opacity: 0">
            <router-link onclick="MobileMenu();" to="/the_channel_of_culture">The Channel of Culture</router-link><br>
            <router-link onclick="MobileMenu();" to="/the_ark_of_culture">The Ark of Culture</router-link><br>
            <router-link onclick="MobileMenu();" to="/the_high_of_culture">The High of Culture</router-link><br>
            <router-link onclick="MobileMenu();" to="/the_mansion_of_culture">The Mansion of Culture</router-link><br>
            <router-link onclick="MobileMenu();" to="/threads">The Theads</router-link><br>
            <router-link onclick="MobileMenu();" to="/simulation_of_welfare">Simulation of Welfare</router-link><br>
            <router-link onclick="MobileMenu();" to="/strange_posters">Strange Posters</router-link><br>
            <router-link onclick="MobileMenu();" to="/concrete_around">Concrete Around</router-link><br>
            <router-link onclick="MobileMenu();" to="/neosuprematism">Neosuprematism</router-link><br>
            <router-link onclick="MobileMenu();" to="/screen_painting">Screen Painting</router-link><br>
            <router-link onclick="MobileMenu();" to="/reserved_scaffolding">Reserved Scaffolding</router-link><br>
            <router-link onclick="MobileMenu();" to="/gastarbeiters_under_protection">Gastarbeiters Under Protection
            </router-link><br>
            <router-link onclick="MobileMenu();" to="/absurd_inscriptions">Absurd Inscriptions</router-link><br>
            <router-link onclick="MobileMenu();" to="/monotonous_objects">Monotonous Objects</router-link><br>
            <router-link onclick="MobileMenu();" to="/disposable_tableware">Disposable Tableware</router-link><br>
            <router-link onclick="MobileMenu();" to="/when_the_traffic_lights_are_off">When The Traffic Lights Are Off
            </router-link><br>
            <router-link onclick="MobileMenu();" to="/to_jest_film">To Jest Film</router-link><br>
            <router-link onclick="MobileMenu();" to="/derive_fest">The Dérive Festival</router-link><br>
            <router-link onclick="MobileMenu();" to="/here_was_vasya">Here was Vasya</router-link><br>
            <router-link onclick="MobileMenu();" to="/casual_passerby">Casual Passerby</router-link><br>
            <router-link onclick="MobileMenu();" to="/another_view">Another View</router-link><br>
            <router-link onclick="MobileMenu();" to="/circles">Circles</router-link><br>
            <router-link onclick="MobileMenu();" to="/dada_posters">DADA Posters</router-link><br>
            <router-link onclick="MobileMenu();" to="/other">Other</router-link>
          </div>

        </div>
        <!-- /Меню Проекты -->

      </div>
    </nav>
    <!-- /Мобильное меню -->
  </header>
</template>

<script>
</script>

<style>
.side-menu-picture { 
  display: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 720px;
  height: 480px;
  position: absolute;
  top: 30px;
  left: 250px;
}

.the_channel_of_culture:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/the_channel_of_culture/31.jpg);
}
.the_ark_of_culture:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/the_ark_of_culture/6.jpg);
}
.the_high_of_culture:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/the_high_of_culture/9.png);
}
.the_mansion_of_culture:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/the_palace_of_culture/1.jpg);
}
.threads:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/threads/9.1.jpg);
}
.simulation_of_welfare:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/simulation_walfare/1.jpg);
}
.strange_posters:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/strange_posters/6.jpg);
}
.concrete_around:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/concrete_around/3.jpg);
}
.neosuprematism:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/neosuprematism/ribbing.jpg);
}
.screen_painting:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/cursors/1.jpg);
}
.reserved_scaffolding:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/scaffolding/4.jpg);
}
.gastarbeiters_under_protection:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/migrant_workers_under_protection/1.jpg);
}
.absurd_inscriptions:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/absurd_inscriptions/11.jpg);
}
.monotonous_objects:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/monotonous_objects/4.jpg);
}
.disposable_tableware:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/disposable_tableware/12.jpg);
}
.when_the_traffic_lights_are_off:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/when_the_traffic_lights_are_off/logo.png);
}
.to_jest_film:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/to_jest_film/logo.jpg);
}
.derive_fest:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/drift_fest/2.jpg);
}
.here_was_vasya:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/here_was_vasya/2.jpg);
}
.casual_passerby:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/photography/casual_passerby/14.jpg);
}
.another_view:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/photography/another_view/9.jpg);
}
.circles:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/circles/3.jpg);
}
.dada_posters:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/dada_posters/2.jpg);
}
.other:hover ~ .side-menu-picture {
  display: block !important;
  background-image: url(../static//images/projects/other/volnovaya1.jpg);
}
</style>

