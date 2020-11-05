// Функция смены языка
// Изначально установлен английский. По нажатию на соответствующую кнопку убираем всё с классом и модификатором языка

var ruen_status = 1; // 1-en, 0-ru

function ruen() {
  if (ruen_status) {

    $('.en').transition({ opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
    $('.annotation_en').transition({ opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

    setTimeout(function () {
      $('.en').addClass('none');
      $('.annotation_en').addClass('none');
      $('.ru').removeClass('none');
      $('.annotation_ru').removeClass('none').transition({ opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
      $('.ru').transition({ opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
    }, 1);

    ruen_status = 0;

  }

  else {

    $('.ru').transition({ opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
    $('.annotation_ru').transition({ opacity: 0 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

    setTimeout(function () {
      $('.ru').addClass('none');
      $('.annotation_ru').addClass('none');
      $('.en').removeClass('none');
      $('.annotation_en').removeClass('none').transition({ opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
      $('.en').transition({ opacity: 1 }, 1, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
    }, 1);

    ruen_status = 1;
  }
}
