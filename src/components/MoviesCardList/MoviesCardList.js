import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

function MoviesCardList({ movies, isSavedMoviesPage }) {
  // Variables
  const [moviesCount, setMoviesCount] = useState(0);

  const location = useLocation();

  function showMovies() {
    const displaySize = window.innerWidth;
    if (displaySize > 1024) {
      setMoviesCount(16);
    } else if (displaySize > 767) {
      setMoviesCount(8);
    } else if (displaySize < 750) {
      setMoviesCount(5);
    }
  }

  useEffect(() => {
    showMovies();
  }, []);

  return (
    <main className='movies'>
    <SearchForm />
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
              key={card._id}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          );
        })}
      </ul>
      <div
        className={`elements__extra ${
          location.pathname === '/movies' ? 'element__extra-visible' : ''
        }`}
      >
        <button type='button' className={`elements__extra-button ${
          location.pathname === '/saved-movies' ? 'elements__extra-button_small' : ''
        }`}>Ещё</button>
      </div>
    </div>
    </main>
  );
}

export default MoviesCardList;
