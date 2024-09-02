const tabsButtons = document.querySelectorAll('.path__button');
const tabsItems = document.querySelectorAll('.path__item');
const firstTabButton = document.querySelector('[data-tab="path-tab1"]');

function activeTab() {
  if (firstTabButton) {
    firstTabButton.classList.add('path__button--active');
    const targetId = firstTabButton.getAttribute('data-tab');
    document.getElementById(targetId).classList.add('path__item--active');
  }
  tabsButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      tabsButtons.forEach((tabButton) => {
        tabButton.classList.remove('path__button--active');
      });

      tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('path__item--active');
      });

      event.target.classList.add('path__button--active');
      const targetId = event.target.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('path__item--active');
    });
  });
}

export default activeTab;
