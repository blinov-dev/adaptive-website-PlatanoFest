function createArtistTemplate({ name, image, headliner }) {
  return `
              <li class="artists__item">
              <article class="artist ${headliner ? 'headliner' : ''}">
                <figure class="artist__container">
                  <picture>
                    <source srcset="images/artists/${
                      headliner ? 'headliners' : 'artists'
                    }/${image}@2x.webp" media="(min-width: 768px)"
                      type="image/webp">
                    <source srcset="images/artists/${
                      headliner ? 'headliners' : 'artists'
                    }/${image}@1x.webp" type="image/webp">
                    <source media="(min-width: 768px)" srcset="images/artists/headliners/${image}@2x.jpg"
                      type="image/png">
                    <img class="artist__image" src="images/artists/${
                      headliner ? 'headliners' : 'artists'
                    }/${image}@1x.jpg" alt="${name}"
                      width="293" height="293">
                  </picture>
                  <figcaption class="artist__caption">
                    ${name}
                  </figcaption>
                </figure>
              </article>
            </li>
  `;
}

function renderArtists(artists) {
  const headlinersContainer = document.querySelector('.headliners__list');
  const artistsContainer = document.querySelector('.artists__list');
  const headlinersTemplates = artists.map((artist) => {
    if (artist.headliner) {
      return createArtistTemplate(artist);
    }
  });
  const artistTemplates = artists.map((artist) => {
    if (!artist.headliner) {
      return createArtistTemplate(artist);
    }
  });
  headlinersContainer.innerHTML = headlinersTemplates.join('');
  artistsContainer.innerHTML = artistTemplates.join('');
}

export default renderArtists;
