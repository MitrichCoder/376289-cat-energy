// DOM elements
var exampleBlock = document.querySelector('.example');
var exampleBefore = document.querySelector('.example__slider-item--before');
var exampleAfter = document.querySelector('.example__slider-item--after');
var exampleImg = document.querySelectorAll('.example__img');

// DOM elements (controls)
var butonBefore = document.querySelector('.example__button--before');
var butonToggle = document.querySelector('.example__button--toggle');
var butonAfter = document.querySelector('.example__button--after');
var exampleRange = document.querySelector('.example__range');

// default variables
var sliderWidth = 690;
var slideOffset;

var brouserWidth = document.body.clientWidth;

if (brouserWidth < 768) {
  slideOffset = 0;
} else if (brouserWidth < 1300) {
  slideOffset = 340;
} else {
  slideOffset = 25;
}

// main function
var slideImg = function() {
  var rangeValue = exampleRange.value;
  var rectBorder = sliderWidth / 100 * rangeValue;

  exampleBefore.style.clip='rect(0px, ' + rectBorder + 'px, 517px, 0px)';
  exampleAfter.style.clip='rect(0px, 690px, 517px, ' + rectBorder + 'px)';

  exampleBlock.style.backgroundImage = '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 0.3) calc(50% + ' + rectBorder + 'px - ' + slideOffset + 'px), rgba(255, 255, 255, 0) calc(50% + ' + rectBorder + 'px - ' + slideOffset + 'px)), -webkit-linear-gradient(90deg, #eaeaea 462px, transparent 462px)';

  //console.log(rectBorder, rangeValue);
}

// new variables
window.onresize = function() {
  brouserWidth = document.body.clientWidth;
  if (brouserWidth < 768) {
    exampleBlock.style.backgroundImage = '';
  } else if (brouserWidth < 1300) {

    if (butonToggle.classList.contains('example__button--toggle-active')) {
      butonToggle.classList.remove('example__button--toggle-active');
      butonToggle.classList.add('example__button--toggle');

      exampleImg[1].classList.remove('example__img--show');
      exampleImg[0].classList.add('example__img--show');
    }

    slideOffset = 340;
    slideImg();
    return;
  } else {
    slideOffset = 25;
    slideImg();
    return;
  }

  console.log(brouserWidth, slideOffset);
};

var showBefore = function() {

  if (brouserWidth > 767) {
    exampleRange.value = 0;
    slideImg();
  } else {

    if (butonToggle.classList.contains('example__button--toggle-active')) {
      butonToggle.classList.remove('example__button--toggle-active');
      butonToggle.classList.add('example__button--toggle');

      exampleImg[1].classList.remove('example__img--show');
      exampleImg[0].classList.add('example__img--show');
    }
  }

  console.log(brouserWidth);
}

var showAfter = function() {

  if (brouserWidth > 767) {
    exampleRange.value = 100;
    slideImg();
  } else {


    if (butonToggle.classList.contains('example__button--toggle')) {
      butonToggle.classList.remove('example__button--toggle');
      butonToggle.classList.add('example__button--toggle-active');

      exampleImg[0].classList.remove('example__img--show');
      exampleImg[1].classList.add('example__img--show');
    }
  }

  console.log(brouserWidth);
}

var showBeforeAfter = function() {

  if (brouserWidth < 768) {
    if (butonToggle.classList.contains('example__button--toggle')) {
      showAfter();
    } else {
      showBefore();
    }
  }

};

// actions
exampleRange.addEventListener('input', slideImg);
exampleRange.addEventListener('change', slideImg); // IE

butonBefore.addEventListener('click', showBefore);
butonAfter.addEventListener('click', showAfter);
butonToggle.addEventListener('click', showBeforeAfter);

for (var i = 0, max = exampleImg.length; i < max; i += 1) {
  exampleImg[i].addEventListener('click', showBeforeAfter);
}
