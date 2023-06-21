import { SHORT_MOVIE_DURATION } from "./constants";

// Фильтрация
function filterMovies(movies, query, short) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
    );
  });
  if (short) {
    return shortDuration(moviesByQuery);
  } else {
    return moviesByQuery;
  }
}

// Фильтр короткого метра
function shortDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
}

export { filterMovies, shortDuration };
