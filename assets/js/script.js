/*=============== MOBILE NAV TOGGLE ===============*/
(function () {
  'use strict';

  /* ---- Dark / Light Theme Toggle ---- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  // Determine initial theme: saved preference > OS preference > light
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

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
