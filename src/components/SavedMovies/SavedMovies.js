import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { filterMovies, shortDuration } from '../../utils/searchUtils';

function SavedMovies({
  isSavedMoviesPage,
  onMovieLike,
  onMovieDelete,
  savedMovies,
}) {
  const [userMovies, setIsUserMovies] = useState(savedMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  //const [isReqErr, setIsReqErr] = useState(false); //ошибка запроса к серверу
  const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (localStorage.getItem('userShortMovies') === 'true') {
      setIsShort(true);
      setIsUserMovies(shortDuration(savedMovies));
    } else {
      setIsShort(false);
      setIsUserMovies(savedMovies);
    }
  }, [savedMovies]);

  function onSearchMovies(inquiry) {
    const moviesList = filterMovies(savedMovies, inquiry, isShort);
    if (moviesList.length === 0) {
      setIsNotFound(true);
    } else {
      setFilteredMovies(moviesList);
      setIsUserMovies(moviesList);
    }
  }

  function handleShorts() {
    setIsShort(!isShort);
    if (!isShort) {
      setFilteredMovies(shortDuration(userMovies));
    } else {
      setFilteredMovies(userMovies);
    }
    localStorage.setItem('userShortMovies', !isShort);
  }
  console.log(filteredMovies);
  console.log(userMovies);

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
        savedMovies={savedMovies}
      />
    </>
  );
}

export default SavedMovies;
