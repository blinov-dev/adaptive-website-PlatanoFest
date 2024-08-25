const burgerButton = document.querySelector('.burger-menu');
const navigationMenu = document.querySelector('.navigation');
const header = document.querySelector('.header');

function openNavMenu() {
  burgerButton.addEventListener('click', () => {
    if (!header.classList.contains('header-mobile')) {
      navigationMenu.style.transform = 'translateY(0)';
    } else {
      header.classList.toggle('header-mobile--open');
    }
  });
}

function openHeaderNav() {
  if (window.innerWidth < 768) {
    header.classList.add('header-mobile');
    openNavMenu();
  }
  if (window.innerWidth >= 768) {
    header.classList.remove('header-mobile');
    openNavMenu();
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        navigationMenu.style.transform = 'translateY(0)';
      } else if (window.scrollY === 0) {
        navigationMenu.style.transform = 'translateY(-100%)';
      }
      lastScrollY = window.scrollY;

      window.history.scrollRestoration = 'manual';

      window.addEventListener('load', () => {
        window.scrollTo(0, 0);
      });
    });
  }
}

openHeaderNav();
