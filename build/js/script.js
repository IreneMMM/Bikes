'use strict';

(function () {
  var page = document.querySelector('.page');
  if (page.querySelector('.main-nav')) {
    var menu = page.querySelector('.main-nav');
    var menuList = menu.querySelector('.main-nav__list');
    var menuToggle = menu.querySelector('.main-nav__toggle');

    var menuOpen = function () {
      page.classList.add('page--disabled');
      menuToggle.classList.add('main-nav__toggle--open');
      menu.classList.add('main-nav--open');
      menuList.classList.add('main-nav__list--open');
      menuList.addEventListener('click', outsideClickHandler);
      menu.addEventListener('keydown', keyPressHandler);
    };

    var menuClose = function () {
      page.classList.remove('page--disabled');
      menuToggle.classList.remove('main-nav__toggle--open');
      menu.classList.remove('main-nav--open');
      menuList.classList.remove('main-nav__list--open');
      menuList.removeEventListener('click', outsideClickHandler);
      menu.removeEventListener('keydown', keyPressHandler);
    };

    var keyPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();

        menuClose();
      }
    };

    var outsideClickHandler = function () {
      menuClose();
    };

    menu.classList.remove('main-nav--no-js');
    menuList.classList.remove('main-nav__list--no-js');
    menuToggle.classList.remove('main-nav__toggle--no-js');

    menuToggle.addEventListener('click', function () {
      if (menu.classList.contains('main-nav--open')) {
        menuClose();
      } else {
        menuOpen();
      }
    });
  }
})();

'use strict';

(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})();
