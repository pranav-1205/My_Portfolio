/*=============== MOBILE NAV TOGGLE ===============*/
(function () {
  'use strict';

  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navClose  = document.getElementById('nav-close');
  const navLinks  = document.querySelectorAll('.nav-link');

  /* ---- Open menu ---- */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.add('show-menu');
      document.body.classList.add('nav-open');
    });
  }

  /* ---- Close menu (X button) ---- */
  if (navClose && navMenu) {
    navClose.addEventListener('click', function () {
      navMenu.classList.remove('show-menu');
      document.body.classList.remove('nav-open');
    });
  }

  /* ---- Close menu on link click ---- */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) {
        navMenu.classList.remove('show-menu');
        document.body.classList.remove('nav-open');
      }
    });
  });

  /* ---- Close menu on outside click ---- */
  document.addEventListener('click', function (e) {
    if (
      navMenu &&
      navMenu.classList.contains('show-menu') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navMenu.classList.remove('show-menu');
      document.body.classList.remove('nav-open');
    }
  });

  /* ---- Close menu on Escape key ---- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
      navMenu.classList.remove('show-menu');
      document.body.classList.remove('nav-open');
    }
  });
})();
