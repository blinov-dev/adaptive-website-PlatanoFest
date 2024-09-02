const paginationButtons = document.querySelectorAll('.pagination__link');

paginationButtons.forEach((pagination) => {
  pagination.addEventListener('click', (event) => {
    paginationButtons.forEach((button) => {
      button.classList.remove('pagination__link--active');
    });
    event.target.classList.add('pagination__link--active');
  });
});
