let movies = [];

async function fetchMovies(searchParam = "") {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=4c1c0d1b5ab4b958dc6516de881a951d&query=${searchParam}&language=fr-FR`;
  await fetch(url)
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
          <p id="movieScore">Note moyenne : ${movie.vote_average}/10 <span><img id="scorePic" src="./assets/icons/${parseFloat(movie.vote_average) >= 6.5 ? 'flame.svg' : 'snowflake.svg'}"></span></p>
        </div>
      `
    })
    .join('');
}

// window.addEventListener("load", fetchMovies());

submitButton.addEventListener('click', (e) =>  {
  e.preventDefault();
  fetchMovies(searchInput.value);
});
