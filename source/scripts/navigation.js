const burgerButton = document.querySelector('.burger-menu');
const navigationMenu = document.querySelector('.navigation');

burgerButton.addEventListener('click', () => {
  navigationMenu.style.transform = 'translateY(0)';
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navigationMenu.style.transform = 'translateY(0)';
  } else if (window.scrollY === 0) {
    navigationMenu.style.transform = 'translateY(-100%)';
  }
  lastScrollY = window.scrollY;
});

window.history.scrollRestoration = 'manual';

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
