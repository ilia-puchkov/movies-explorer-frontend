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
  const [userMovies, setUserMovies] = useState(savedMovies);
  const [filteredMovies, setFilteredMovies] = useState(userMovies);
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (localStorage.getItem('userShortMovies') === 'true') {
      setIsShort(true);
      setUserMovies(shortDuration(savedMovies));
    } else {
      setIsShort(false);
      setUserMovies(savedMovies);
    }
  }, [savedMovies]);

  function onSearchMovies(inquiry) {
    const moviesList = filterMovies(savedMovies, inquiry, isShort);
    if (moviesList.length !== 0) {
      setFilteredMovies(moviesList);
      setUserMovies(moviesList);
    }
  }

  function handleShorts() {
    if (!isShort) {
      setIsShort(true);
      localStorage.setItem('userShortMovies', true);
      setUserMovies(shortDuration(filteredMovies));
    } else {
      setIsShort(false);
      localStorage.setItem('userShortMovies', false);
      setUserMovies(filteredMovies);
    }
  }

  return (
    <>
      <SearchForm
        onSearch={onSearchMovies}
        onFilter={handleShorts}
        isShortMovies={isShort}
      />
      <MoviesCardList
        movies={userMovies}
        isSavedMoviesPage={isSavedMoviesPage}
        onMovieLike={onMovieLike}
        onMovieDelete={onMovieDelete}
        savedMovies={savedMovies}
      />
    </>
  );
}

export default SavedMovies;
