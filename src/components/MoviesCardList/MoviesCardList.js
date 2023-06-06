import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, isSavedMoviesPage }) {
  const location = useLocation();

  return (
    <section className='elements'>
      <ul
        className={`elements__grid ${
          location.pathname === '/movies' ? 'elements__grid-full' : ''
        }`}
      >
        {movies.map((card) => {
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
        <button className='elements__extra-button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
