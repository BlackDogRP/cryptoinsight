window.addEventListener('DOMContentLoaded', function() {
    let onlineCinema = {
        filmListing: [
          {
            img: 'img/moovies/moovie.png',
            title: "Genius Robbery",
            year: 1999,
            description: "The conceptual considerations of a higher order and the established structure of the organization require us to analyze the directions of progressive development. The constant informational and propaganda support of our activity implies the process of introducing and modernizing the directions of progressive development. The constant quantitative growth and sphere of our activity is an interesting experiment to test the systems of mass participation. The diverse and rich experience of constant informational and propaganda support of our activity implies the process of introducing and modernizing the positions occupied by participants in relation to the tasks set. The constant informational and propaganda support of our activity also implies the process of introducing and modernizing the directions.",
            genre: ["Action", "Comedy", "Drama"],
            country: "USA",
            actors: ["Adam West", "Bert Ward", "William Shatner"],
            rating: 8.3,
            premierUkraine: new Date(2021, 3, 22),
            ratingMinimum: 16,
            selection: ["1999", "Аниме"]
          },
          {
            img: 'img/moovies/moovie.png',
            title: "Inception",
            year: 2010,
            description: "Inception centres on brooding “extractor” Dom Cobb (played by Leonardo DiCaprio)—a thief who invades targets' dreams through a chemical-induced shared dream state in order to steal valuable information.",
            genre: ["Action", "Adventure", "Sci-Fi"],
            country: "USA",
            actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
            rating: 9,
            premierUkraine: new Date(2021, 3, 22),
            ratingMinimum: 16,
            selection: ["1999", "Аниме"]
          }
        ]
      };

      class MenuCard {
        constructor(img, title, year, description, genre, country, actors, rating, premierUkraine, ratingMinimum, selection, parentSelector) {
            this.img=img;
            this.title=title;
            this.year=year;
            this.description=description;
            this.genre=genre;
            this.country=country;
            this.actors=actors;
            this.rating=rating;
            this.premierUkraine = premierUkraine;
            this.ratingMinimum = ratingMinimum;
            this.selection = selection;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
          const element = document.createElement('div');
          this.parent.append(element);

          element.className='selection-moovies__card';
              
            element.innerHTML = `
              <img src=${this.img} alt="moovie">
              <p>${this.title}</p>
              <h3>${this.year}, ${this.genre[0]}, ${this.country}</h3>
            `;
        }

        bestMoovie() {
          const element = document.createElement('div');
          element.className='moovie-card';
          this.parent.append(element);
          
          element.innerHTML = `
                  <div class="moovie-card__left">
                  <img src="/img/moovies/moovie-cover.png" alt="">
                  <div class="moovie-card__ratings">
                      <div class="moovie-card__rating">
                          <h2>${this.rating}</h2>
                          <h3>Кинопоиск</h3>
                      </div>
                      <div class="moovie-card__rating">
                          <h2>${this.rating}</h2>
                          <h3>Кинопоиск</h3>
                      </div>
                  </div>
              </div>
              <div class="moovie-card__right">
                  <div class="moovie-card__title">${this.title} (2021)</div>
                  <div class="moovie-card__subtitle">Way Down</div>
                  <div class="moovie-card__information">
                      <div class="moovie-card__information-block">
                          <h2>Продолжительность</h2>
                          <h3>1 Час 58 минут</h3>
                      </div>
                      <div class="moovie-card__information-block">
                          <h2>Год выпуска</h2>
                          <h3>${this.year}</h3>
                      </div>
                      <div class="moovie-card__information-block">
                          <h2>Премьера фильма в Украине</h2>
                          <h3>${this.premierUkraine.getDay()} ${this.premierUkraine.getMonth()} ${this.premierUkraine.getYear()}</h3>
                      </div>
                      <div class="moovie-card__information-block">
                          <h2>Возраст</h2>
                          <h3>${this.ratingMinimum}+</h3>
                      </div>
                  </div>
                  <div class="moovie-card__aside-information">
                      <div class="moovie-card__aside-information__block">
                          <h2>Жанр</h2>
                          <h3>${this.genre}</h3>
                      </div>
                      <div class="moovie-card__aside-information__block">
                          <h2>Страна</h2>
                          <h3>${this.country}</h3>
                      </div>
                      <div class="moovie-card__aside-information__block">
                          <h2>В главных ролях</h2>
                          <h3>${this.actors}</h3>
                      </div>
                      <div class="moovie-card__aside-information__block">
                          <h2>Участвует в подборках</h2>
                          <h3>${this.selection}</h3>
                      </div>
                  </div>
                  <div class="moovie-card__description">
                      <h2>О чем фильм ${this.title} (${this.year})”</h2>
                      <h3>${this.description}</h3>
                  </div>
              </div>
          `;
        }
      }

      let countMoovies;

      if (onlineCinema.filmListing.length>=5) {
        countMoovies=5;
      } else {
        countMoovies=onlineCinema.filmListing.length;
      }

      function createMenuCards(count, sortFunction, selector) {
        onlineCinema.filmListing.sort(sortFunction);
        for (let i = 0; i < count; i++) {
          new MenuCard(
            onlineCinema.filmListing[i].img,
            onlineCinema.filmListing[i].title,
            onlineCinema.filmListing[i].year,
            onlineCinema.filmListing[i].description, 
            onlineCinema.filmListing[i].genre,
            onlineCinema.filmListing[i].country,
            onlineCinema.filmListing[i].actors, 
            onlineCinema.filmListing[i].rating,
            onlineCinema.filmListing[i].premierUkraine,
            onlineCinema.filmListing[i].ratingMinimum,
            onlineCinema.filmListing[i].selection,
            selector
          ).render();
        }
      }

      function createMenuCards222(count, sortFunction, selector) {
        onlineCinema.filmListing.sort(sortFunction);
        for (let i = 0; i < count; i++) {
          new MenuCard(
            onlineCinema.filmListing[i].img,
            onlineCinema.filmListing[i].title,
            onlineCinema.filmListing[i].year,
            onlineCinema.filmListing[i].description, 
            onlineCinema.filmListing[i].genre,
            onlineCinema.filmListing[i].country,
            onlineCinema.filmListing[i].actors, 
            onlineCinema.filmListing[i].rating,
            onlineCinema.filmListing[i].premierUkraine,
            onlineCinema.filmListing[i].ratingMinimum,
            onlineCinema.filmListing[i].selection,
            selector
          ).bestMoovie();
        }
      }

      createMenuCards(countMoovies, (a, b) => b.year - a.year, '.new__moovies');
      createMenuCards(countMoovies, (a, b) => b.rating - a.rating, '.best__moovies');
      createMenuCards222(1, (a, b) => b.rating - a.rating, '.hero__left');
      
});