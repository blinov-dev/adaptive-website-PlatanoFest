/* в этот файл добавляет скрипты*/
import './navigation.js';
import artists from './mocks/artists';
import tickets from './mocks/tickets';
import renderArtists from './render-artists.js';
import renderTickets from './render-tickets.js';
import activeTab from './path-tabs.js';

renderArtists(artists);
renderTickets(tickets);
activeTab();
