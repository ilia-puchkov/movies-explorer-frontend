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
  //const [isReqErr, setIsReqErr] = useState(false); //ошибка запроса к серверу
  //const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены
  const [isAllMovies, setIsAllMovies] = useState([]);

  const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/',
    headers: {
      'content-type': 'application/json',
    },
  });

  useEffect(() => {
    if (localStorage.getItem('isAllMovies')) {
      const movies = JSON.parse(localStorage.getItem('isAllMovies'));
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
    setIsClearMovies(moviesList);
    console.log('yjuf' + moviesList);
    setFilteredMovies(short ? shortDuration(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('isAllMovies', JSON.stringify(movies));
  }

  function onSearchMovies(inquiry) {
    console.log(inquiry);
    localStorage.setItem('moviesSearch', inquiry);
    localStorage.setItem('shortMovies', isShort);

    if (isAllMovies.length === 0) {
      console.log('new');
      setIsLoading(true);
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleFilterMovies(movies, inquiry, isShort);
          //setIsReqErr(false);
        })
        .catch((err) => {
          //setIsReqErr(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log('old');
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

  //console.log(filteredMovies);
  console.log(isClearMovies);
  console.log(isAllMovies);

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
      />
    </>
  );
}

export default Movies;
