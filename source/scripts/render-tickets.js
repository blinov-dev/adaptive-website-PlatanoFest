function createTicketTemplate({
  header,
  type,
  days,
  description,
  housing,
  price,
}) {
  return `
          <li class="tickets__item">
            <article class="ticket">
              <div class="ticket__main-info">
                <span class="ticket__header">${header}</span>
                <div class="ticket__text-block">
                  <h2 class="ticket__title">${type}<br> ${days}
                  </h2>
                  <p class="ticket__description">
                    ${description}
                  </p>
                  <span class="ticket__additional-info">${housing}</span>
                </div>
              </div>
              <div class="ticket__buy-info">
                <button class="ticket__button-buy button-buy" type="button">КУПИТЬ БИЛЕТ</button>
                <div class="ticket__price">
                  <span class="ticket__value ticket__value--active">${price.one}</span>
                  <span class="ticket__value">${price.two}</span>
                  <span class="ticket__value">${price.three}</span>
                </div>
              </div>
            </article>
          </li>
  `;
}

function renderTickets(tickets) {
  const ticketsContainer = document.querySelector('.tickets__list');
  const ticketTemplates = tickets.map((ticket) => createTicketTemplate(ticket));

  ticketsContainer.innerHTML = ticketTemplates.join('');
}

export default renderTickets;
