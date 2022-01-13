let movies = [];

async function fetchMovies() {
  await fetch("https://api.themoviedb.org/3/search/movie?api_key=4c1c0d1b5ab4b958dc6516de881a951d&query=star&language=fr-FR")
    .then((res) => res.json())
    .then((data) => movies = data.results);

  console.log(movies);
  displayMovies();
}

function displayMovies() {
 cardsContainer.innerHTML = movies
    // .filter((movie) => movie.population > 60000000)
    // .sort((a,b) => b.population - a.population)
    .slice(0,24)
    .map((movie) => {
      //1st instructions
      return `
        <div class="card">
          <h3>${movie.title}</h3>
          <p id="movieReleaseDate">Date de sortie : ${movie.release_date}</p>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" id="moviePic" alt="Movie Poster" width="100"px height="150px">
          <p id="movieSummary">${movie.overview}</p>
          <p id="movieScore">Note moyenne : ${movie.vote_average}/10</p>
        </div>
      `
    })
    .join('');
}

window.addEventListener("load", fetchMovies());
