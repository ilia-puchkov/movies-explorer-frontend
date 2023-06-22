import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { filterMovies, shortDuration } from '../../utils/searchUtils';

function Movies({
  isSavedMoviesPage,
  onMovieLike,
  onMovieDelete,
  savedMovies,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isClearMovies, setIsClearMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [isServerErr, setIsServerErr] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isAllMovies, setIsAllMovies] = useState([]);

  const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/',
    headers: {
      'content-type': 'application/json',
    },
  });

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setIsClearMovies(movies);
      if (localStorage.getItem('shotMovies') === 'true') {
        setFilteredMovies(shortDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, []);

  function handleFilterMovies(movies, inquiry, short) {
    const moviesList = filterMovies(movies, inquiry, short);
    if (moviesList.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
    setIsClearMovies(moviesList);
    setFilteredMovies(short ? shortDuration(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('isAllMovies', JSON.stringify(movies));
  }

  function onSearchMovies(inquiry) {
    localStorage.setItem('moviesSearch', inquiry);
    localStorage.setItem('shortMovies', isShort);

    if (isAllMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleFilterMovies(movies, inquiry, isShort);
          setIsServerErr(false);
        })
        .catch((err) => {
          setIsServerErr(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleFilterMovies(isAllMovies, inquiry, isShort);
    }
  }

  function handleShorts() {
    setIsShort(!isShort);
    if (!isShort) {
      setFilteredMovies(shortDuration(isClearMovies));
    } else {
      setFilteredMovies(isClearMovies);
    }
    localStorage.setItem('shortMovies', !isShort);
  }

  return (
    <>
      <SearchForm
        onSearch={onSearchMovies}
        onFilter={handleShorts}
        isShortMovies={isShort}
      />
      <MoviesCardList
        movies={filteredMovies}
        isSavedMoviesPage={isSavedMoviesPage}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
        isLoading={isLoading}
        savedMovies={savedMovies}
        notFoundError={isNotFound}
        serverError={isServerErr}
      />
    </>
  );
}

export default Movies;
