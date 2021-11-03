var navList = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');

navList.classList.remove('main-nav__list--no-js');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
    navList.classList.add('main-nav__list--opened');
  } else {
    navList.classList.add('main-nav__list--closed');
    navList.classList.remove('main-nav__list--opened');
  }
});
