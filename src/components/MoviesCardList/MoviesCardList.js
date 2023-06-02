import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, isSavedMoviesPage}) {
  return (
    <section className='elements'>
      <ul className='elements__grid'>
      {movies.map(card => {
            return <MoviesCard card={card} key={card._id} isSavedMoviesPage={isSavedMoviesPage} />
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
