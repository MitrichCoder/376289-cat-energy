// all website
var brouserWidth = document.body.clientWidth;

var mainNav = document.querySelector('.main-nav');
var siteList = document.querySelector('.main-nav__list');
var mainNavButton = document.querySelector('.main-nav__toggle');
var lines = document.querySelector('.main-nav__lines');

mainNav.classList.remove('main-nav--nojs');

var showList = function(evt) {
  evt.preventDefault();
  siteList.classList.toggle('main-nav__list--show');
  lines.classList.toggle('main-nav__lines--active');
  console.log('ok');
};

mainNavButton.addEventListener('click', showList);

// map in footer
var mobileMap = function () {
  var myMap = new ymaps.Map("map", {
    center:[59.93863106417265,30.3230545], // map center
    zoom: 17, // zoom
    controls: [] // deactivate controls
  });

  var myGeoObjects = [];

  myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{ // pin ccordinates
    balloonContentBody: 'Магазин Cat Energy - функциональное питание для котов и их подруг!',
    },{
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png', // pin url
    iconImageSize: [55, 47], // pin size
    iconImageOffset: [-25, -48] // pin offset (offset top left coner of picture to pin's leg)
  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  myMap.behaviors.disable('scrollZoom'); // scroll zoom of
}

var tabletMap = function () {
  var myMap = new ymaps.Map("map", {
    center:[59.93896483673909,30.3230545],
    zoom: 17,
    controls: []
  });

  var myGeoObjects = [];

  myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
    balloonContentBody: 'Магазин Cat Energy - функциональное питание для котов и их подруг!',
    },{
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: [124, 106],
    iconImageOffset: [-60, -110]
  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  myMap.behaviors.disable('scrollZoom');
}

var desktopMap = function () {
  var myMap = new ymaps.Map("map", {
    center:[59.93896483673909,30.319449611083996],
    zoom: 17,
    controls: []
  });

  var myGeoObjects = [];

  myGeoObjects = new ymaps.Placemark([59.93863106417265,30.3230545],{
    balloonContentBody: 'Магазин Cat Energy - функциональное питание для котов и их подруг!',
    },{
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: [124, 106],
    iconImageOffset: [-60, -110]
  });

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  myMap.behaviors.disable('scrollZoom');
}

/*window.onresize= function() {
  var brouserWidth = document.body.clientWidth;

  map.container.fitToViewport();

  function init () {
    if (brouserWidth < 768) {
      mobileMap();
    } else if (brouserWidth < 1300) {
      tabletMap();
    } else {
      desktopMap ();
    }
  }

  // console.log('Окно изменилось! ' + brouserWidth);
};*/

ymaps.ready(init);

function init () {
  if (brouserWidth < 768) {
    mobileMap();
  } else if (brouserWidth < 1300) {
    tabletMap();
  } else {
    desktopMap ();
  }
}
