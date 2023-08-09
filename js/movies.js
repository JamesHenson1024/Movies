// // Movie Credits
// const api_credits = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=5e750355564957a2353604d8a9344e94`;
// // https://api.themoviedb.org/3/movie/298618/credits?api_key=5e750355564957a2353604d8a9344e94

const api_key = "5e750355564957a2353604d8a9344e94";
const api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const api_mov_details = `
https://api.themoviedb.org/3/movie/{movie_id}`;
const img_path = "https://image.tmdb.org/t/p/w1280";

const mainSection = document.getElementById("mainSection");
const mainAbout = document.getElementById("mainAbout");

let currentIndex = 0;
getMovies(api_url);
async function getMovies(url) {
  const resp = await fetch(url);
  const data = await resp.json();

  // console.log(data.results)
  // getMovieDetails(data.results[0].id);
  // getMovieCredits(data.results[0].id);
  // getSimilarMovies(data.results[0].id);

  const movies = data.results;
  // const { id, title, poster_path, backdrop_path, vote_average, overview } =
  //   movies;

  // let movie = movies[currentIndex];
  movies.forEach((objectData, index) => {
    // -- clg objectData for object API reference

    mainSection.style.background = ` linear-gradient(black, rgba(0,0,0,0.4)), url(${
      img_path + objectData.backdrop_path
    })`;
    mainSection.innerHTML = `
    <div class="container-section">
      <h1 class="display-4 title text-white" style="font-weight: 500">${objectData.title}</h1>
      <div class="ratings">
        <div class="rate-count d-flex">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        ${objectData.vote_average} / 10
      </div>
  
      <div class="story-line text-light">${objectData.overview}</div>
      <button><i class="fas fa-play"></i> Watch Trailer</button>
    </div>
  `;
    // Get the full movie details
    getMovieDetails(objectData.id);
    // Get Similar movies
    getSimilarMovies(objectData.id);

    // Call the updateStars function to update the stars based on the rating
    // updateStars(rating);

    // Example usage: Update stars with a rating of 5
    // updateStars(data.results[0].overview);
    
  movPoster.style.backgroundImage = `url(${img_path + objectData.poster_path})`;
  });
}

async function getMovieDetails(mov_detail_id) {
  const resp = await fetch(`
  https://api.themoviedb.org/3/movie/${mov_detail_id}?api_key=${api_key}`);
  const data = await resp.json();

  const details = data;

  const {
    id,
    budet,
    status,
    genres,
    imbd_id,
    runtime,
    tagline,
    homepage,
    poster_path,
    release_date,
    original_title,
    spoken_languages,
    original_language,
    production_countries,
    production_companies,
  } = details;
  console.log(data);

  // mainAbout.innerHTML = `
  //   <div class="container">
  //     <div class="mov-poster" id="movPoster">
  //     <div
  //     </div>
  //  </div>
  // `;
}

async function getSimilarMovies(similar_id) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${similar_id}/similar?api_key=${api_key}`
  );
  const data = await resp.json();

  // console.log(data);
}

async function getMovieCredits(credits_id) {
  const creditsResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${credits_id}/credits?api_key=${api_key}`
  );
  const creditsData = await creditsResponse.json();

  console.log(creditsData);
}

async function getPersonMovieCredits(person_id) {
  const personCreditRes = await fetch(
    `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${api_key}`
  );
  const personData = await personCreditRes.json();

  console.log(personData);
}
