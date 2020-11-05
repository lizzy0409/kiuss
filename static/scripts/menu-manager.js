// Функции управления меню

let click = 1; // Переключатель

// Управление обнулением скрола
function scrollToZero () {
  $("html, body").animate({
    scrollTop: 0
  }, 2000, 'easeInOutCubic')
  return false;
}

// Десктопные функции

// Функция по нажатию на пункт "проекты"
function ToggleMenuProjects() { 
  scrollToZero();

  $('.side-menu').removeClass('none');

  // Отображаем в зависимости от выбранного языка
  if (ruen_status) { 
    $('.projects.side-menu_en').removeClass('none').addClass('block').transition({ opacity: 1 }, 2000, 'cubic-bezier(0.19, 1, 0.22, 1)');
  }

  else {
    $('.projects.side-menu_ru').removeClass('none').addClass('block').transition({ opacity: 1 }, 2000, 'cubic-bezier(0.19, 1, 0.22, 1)');
  }

  // Убираем боковое меню по нажатию в пустоту
  $("img, pre, .sub-container").click(sideMenuHide);
}

// Функция по нажатию на пункт "о нас"
function ToggleMenuAbout() { 
  scrollToZero();

  $('.side-menu').addClass('none')
}

// После выбора проекта скрыть боковое меню
function sideMenuHide() { 
  $('.projects.side-menu_en').transition({ opacity: 0 }, 2000, 'cubic-bezier(0.19, 1, 0.22, 1)');
  $('.projects.side-menu_ru').transition({ opacity: 0 }, 2000, 'cubic-bezier(0.19, 1, 0.22, 1)');
  setTimeout(function () {
    $('.projects.side-menu_en').removeClass('block');
    $('.projects.side-menu_ru').removeClass('block');
  }, 2000);

}

// Мобильные функции

// Управление Hamburger:
function MobileMenu() {
  setTimeout(scrollToZero, 400);

  if (click) // ОТКРЫТЬ МЕНЮ
  {
    $('.language').addClass('block').transition({ scale: 1.0, opacity: 1 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
    $('button#HamburgerButton').addClass('is-active').addClass('correction'); // ПРЕВРАЩАЕМ В КРЕСТ
    $('header, nav').addClass('height100') // ВИРТУАЛЬНО РАЗВОРАЧИВАЕМ МЕНЮ НА ВЕСЬ ЭКРАН
    $('.main-menu').addClass('block').transition({ opacity: 1 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)')
    $('div.menu').removeClass('none').addClass('table').transition({ opacity: 1 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)')

    if (ruen_status) {
      $('.sub-menu.en').removeClass('none').transition({ scale: 1.0, opacity: 1 }, 1700, 'cubic-bezier(0.19, 1, 0.22, 1)')
    }

    else {
      $('.sub-menu.ru').removeClass('none').transition({ scale: 1.0, opacity: 1 }, 1700, 'cubic-bezier(0.19, 1, 0.22, 1)')
    }

    $('ul.mobile').addClass('open').transition({ scale: 1, opacity: 1 }, 1700, 'cubic-bezier(0.075, 0.82, 0.165, 1)') // АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li
    $('li.mobile').addClass('open') // АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li
    $('span.hamburger-inner').addClass('color_white') // ОТБЕЛИВАЕМ ГАМБУРГЕР
    $('span.hamburger-inner::after').addClass('color_white') // ОТБЕЛИВАЕМ ГАМБУРГЕР
    $('span.hamburger-inner::before').addClass('color_white') // ОТБЕЛИВАЕМ ГАМБУРГЕР

    click = 0;
  }

  else // ЗАКРЫТЬ МЕНЮ
  {
    $('button#HamburgerButton').removeClass('is-active').removeClass('correction') // СВОРАЧИВАЕМ КРЕСТ
    $('ul.mobile').transition({ scale: 0.9, opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)') // УБИРАЕМ ПУНКТЫ МЕНЮ
    $('.projects-menu').transition({ opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)') // УБИРАЕМ ПУНКТЫ МЕНЮ
    $('.mobile-projects.ru').transition({ scale: 1.1, opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)') // УБИРАЕМ ПУНКТЫ МЕНЮ
    $('.mobile-projects.en').transition({ scale: 1.1, opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)') // УБИРАЕМ ПУНКТЫ МЕНЮ
    $('.main-menu').transition({ opacity: 0 }, 2000, 'cubic-bezier(0.7, 0, 0.84, 0)') // УБИРАЕМ ПУНКТЫ МЕНЮ
    $('div.menu').transition({ opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)')
    $('span.hamburger-inner').removeClass('color_white') // ОЧЕРНЯЕМ ГАМБУРГЕР
    $('span.hamburger-inner::after').removeClass('color_white') // ОЧЕРНЯЕМ ГАМБУРГЕР
    $('span.hamburger-inner::before').removeClass('color_white') // ОЧЕРНЯЕМ ГАМБУРГЕР
    $('.language').transition({ scale: 0.9, opacity: 0 }, 1700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');

    setTimeout(close, 2000); // ПАУЗА, ПОКА ВСЁ НЕ СВЕРНЁТСЯ ДО КОНЦА
    function close() {

      click = 1;

      $('header, nav').removeClass('height100') // СВОРАЧИВАЕМ МЕНЮ
      $('ul.mobile').removeClass('open') // СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
      $('li.mobile').removeClass('open') // СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
      $('div.menu').removeClass('table').addClass('none')
      $('.projects-menu').addClass('none')
      $('.main-menu').removeClass('block')
      $('div.sub-container').transition({ opacity: 1 }, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)') // ПЛАВНО ПОКАЗЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
      $('.language').removeClass('block');

    }
  }
}

// Скрываем главное меню и показываем меню с проектами
function projectsMenu() 
{
  $('.sub-menu.en').transition({ scale: 0.9, opacity: 0 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
  $('.sub-menu.ru').transition({ scale: 0.9, opacity: 0 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
  setTimeout(timeoutFunction, 350)

  function timeoutFunction() {
    $('div.menu').removeClass('table').addClass('none')
    $('.projects-menu').removeClass('none').transition({ opacity: 1 }, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)')

    if (ruen_status) {
      $('.mobile-projects.en').removeClass('none').transition({ scale: 1.0, opacity: 1 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
      $('.mobile-projects.ru').transition({ scale: 1.0 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
    }

    else {
      $('.mobile-projects.ru').removeClass('none').transition({ scale: 1.0, opacity: 1 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
      $('.mobile-projects.en').transition({ scale: 1.0 }, 700, 'cubic-bezier(0.19, 1, 0.22, 1)')
    }
  }
}

//По загрузке документа, выполнить
$(document).ready(function () {

  //Блок управления показом кнопки "наверх" - начало
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { //Если скролл больше 100px, то показать .scrollUp
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut(); //Иначе скрыть
    }
  });
  //Блок управления показом кнопки "наверх" - конец
  
  // Кнопка наверх
  $('.scrollup').click(function () { //По клику на .scrollUp, плавно обнулить скролл
    $("html, body").animate({
      scrollTop: 0
    }, 2000, 'easeInOutCubic');
    return false;
  });

})


  
 