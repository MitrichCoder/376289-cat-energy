var brouserWidth = document.body.clientWidth;

window.onresize= function() {
  var brouserWidth = document.body.clientWidth;
  console.log('Окно изменилось! ' + brouserWidth);
};

var mainNav = document.querySelector('.main-nav');
var siteList = document.querySelector('.main-nav__list');
var mainNavButton = document.querySelector('.main-nav__toggle');
var lines = document.querySelector('.main-nav__lines');

mainNav.classList.remove('main-nav--nojs');

var showList = function(evt) {
  evt.preventDefault();
  siteList.classList.toggle('main-nav__list--show');
  lines.classList.toggle('main-nav__lines--active');
};

mainNavButton.addEventListener('click', showList);

// map in footer
ymaps.ready(init);

function init () {

  if (brouserWidth < 768) {
    var myMap = new ymaps.Map("map", {
      // Центр карты
      center:[59.93863106417265,30.3230545],
      // Масштаб
      zoom: 17,
      // Отключаем все элементы управления
      controls: []
    });

    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
      balloonContentBody: 'Текст в балуне',
      },{
      iconLayout: 'default#image',
      // Путь до нашей картинки
      iconImageHref: '../img/map-pin.png',
      // Размер по ширине и высоте
      iconImageSize: [55, 47],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-25, -48]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    //myMap.behaviors.disable('scrollZoom');

  } else if (brouserWidth < 1300) {

    var myMap = new ymaps.Map("map", {
      // Центр карты
      center:[59.93863106417265,30.3230545],
      // Масштаб
      zoom: 17,
      // Отключаем все элементы управления
      controls: []
    });

    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
      balloonContentBody: 'Текст в балуне',
      },{
      iconLayout: 'default#image',
      // Путь до нашей картинки
      iconImageHref: '../img/map-pin.png',
      // Размер по ширине и высоте
      iconImageSize: [124, 106],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-60, -110]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    //myMap.behaviors.disable('scrollZoom');
  } else {

    var myMap = new ymaps.Map("map", {
      // Центр карты
      center:[59.93863106417265,30.319449611083996],
      // Масштаб
      zoom: 17,
      // Отключаем все элементы управления
      controls: []
    });

    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
      balloonContentBody: 'Текст в балуне',
      },{
      iconLayout: 'default#image',
      // Путь до нашей картинки
      iconImageHref: '../img/map-pin.png',
      // Размер по ширине и высоте
      iconImageSize: [124, 106],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-60, -110]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    //myMap.behaviors.disable('scrollZoom');
  }

}
