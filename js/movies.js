// Movie Credits
// const api_credits = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=5e750355564957a2353604d8a9344e94`;
// https://api.themoviedb.org/3/movie/298618/credits?api_key=5e750355564957a2353604d8a9344e94

getMovies(api_url, minResults);

const api_mov_details = `https://api.themoviedb.org/3/movie/{movie_id}`
// const api_key = "5e750355564957a2353604d8a9344e94";
// const api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const api_credits = `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=5e750355564957a2353604d8a9344e94`
// `https://api.themoviedb.org/3/movie/298618/credits?api_key=5e750355564957a2353604d8a9344e94`
const minResults = 300;
getMovies(api_url, minResults)
// script js - line 230
async function getMovies(url, minResults) {
    try {
      let totalResults = 0;
      let currentPage = 1;
  
      // add fetched movies to array
      let fetchedMoviesArr = [];
  
      while (fetchedMoviesArr.length < minResults) {
        const response = await fetch(`${url}&page=${currentPage}`);
        const data = await response.json();
  
        fetchedMoviesArr = fetchedMoviesArr.concat(data.results);
        totalResults = data.total_results;
        currentPage++;
        
        if (currentPage > data.total_pages) {
          // stop fetching if there are no more pages
          break;
        }
    }
    console.log(fetchedMoviesArr)
    
      return fetchedMoviesArr.slice(130, minResults);
    } catch (error) {
      console.log(error.message);
    }
  }
async function getMovies(url, minResults) {
  try {
    let totalResults = 0;
    let currentPage = 1;

    // add fetched movies to array
    let fetchedMoviesArr = [];

    while (fetchedMoviesArr.length < minResults) {
      const response = await fetch(`${url}&page=${currentPage}`);
      const data = await response.json();

      fetchedMoviesArr = fetchedMoviesArr.concat(data.results);
      totalResults = data.total_results;
      currentPage++;

      if (currentPage > data.total_pages) {
        // stop fetching if there are no more pages
        break;
      }
    }

    // console.log(fetchedMoviesArr)

    // return fetchedMoviesArr.slice(130, minResults);
    return fetchedMoviesArr;
  } catch (error) {
    console.log(error.message);
  }
}

async function getMovieResults() {
  let minResults = 300;

  const movies = await getMovies(api_url, minResults);
  const {
    title,
    vote_average,
    overview,
    poster_path,
    backdrop_path,
    genre_ids,
  } = movies;

  const similar = await getSimilar()
}

async function getSimilar(movieId) {
  const api_similar = `https://api.themoviedb.org/3/movie/${movieId}/similar`;
  const resSimilar = await fetch(api_similar)
  const dataSimilar = await resSimilar.json()
}

function getMovieFullDetails() {}

function getCredits() {}
