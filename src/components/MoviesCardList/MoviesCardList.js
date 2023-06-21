import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import {
  MOVIE_GRID_NUMBER_BIG,
  MOVIE_GRID_NUMBER_BIG_EXTRA,
  MOVIE_GRID_NUMBER_MEDIUM,
  MOVIE_GRID_NUMBER_MEDIUM_EXTRA,
  MOVIE_GRID_NUMBER_SMALL,
  MOVIE_GRID_NUMBER_SMALL_EXTRA,
} from '../../utils/constants';

function MoviesCardList({
  movies,
  isSavedMoviesPage,
  onMovieLike,
  onMovieDelete,
  isLoading,
  savedMovies,
}) {
  // Variables
  const [moviesCount, setMoviesCount] = useState(0);

  const location = useLocation();

  // Количество сетки фильмов (база)
  function showMovies() {
    const displaySize = window.innerWidth;
    if (displaySize > 1024) {
      setMoviesCount(MOVIE_GRID_NUMBER_BIG);
    } else if (displaySize > 767) {
      setMoviesCount(MOVIE_GRID_NUMBER_MEDIUM);
    } else if (displaySize < 750) {
      setMoviesCount(MOVIE_GRID_NUMBER_SMALL);
    }
  }

  // Количество сетки фильмов (экстра)
  function showMoreMovies() {
    const displaySize = window.innerWidth;
    if (displaySize > 1024) {
      setMoviesCount(moviesCount + MOVIE_GRID_NUMBER_BIG_EXTRA);
    } else if (displaySize > 767) {
      setMoviesCount(moviesCount + MOVIE_GRID_NUMBER_MEDIUM_EXTRA);
    } else if (displaySize < 750) {
      setMoviesCount(moviesCount + MOVIE_GRID_NUMBER_SMALL_EXTRA);
    }
  }

  // Формирование сетки
  useEffect(() => {
    showMovies();
  }, []);

  // Переформирование сетки и изменении размеров окна
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', showMovies);
    }, 800)
  });

  return (
    <section className='movies'>
      {isLoading && <Preloader />}
      {!isLoading && (
        <div className='elements'>
          <ul
            className={`elements__grid ${
              location.pathname === '/movies' ? 'elements__grid-full' : ''
            }`}
          >
            {movies.slice(0, moviesCount).map((card) => {
              return (
                <MoviesCard
                  card={card}
                  key={isSavedMoviesPage ? card._id : card.id}
                  isSavedMoviesPage={isSavedMoviesPage}
                  savedMovies={savedMovies}
                  onMovieLikeClick={onMovieLike}
                  onMovieDeleteClick={onMovieDelete}
                />
              );
            })}
          </ul>
          <div
            className={`elements__extra ${
              location.pathname === '/movies' ? 'element__extra-visible' : ''
            }`}
          >
            <button
              onClick={showMoreMovies}
              type='button'
              className={`elements__extra-button ${
                location.pathname === '/saved-movies'
                  ? 'elements__extra-button_small'
                  : ''
              }`}
            >
              Ещё
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
