import { toHours, setURL } from "../../utils/moviesCardUtils";

function MoviesCard(props) {
  const isLiked = props.savedMovies.some((i) => i.movieId === props.card.id);
  
  const cardSavedButtonClassName = `element__save-button ${
      isLiked && 'element__save-button-active'
    }`;

    function handleLikeClick() {
    props.onMovieLikeClick(props.card);
  }

  function onCardClick() {
    if (isLiked) {
      props.onMovieDeleteClick(props.savedMovies.filter((m) => m.movieId === props.card.id)[0]);
    } else {
      handleLikeClick();
    }
  }

  function handleDeleteClick() {
    props.onMovieDeleteClick(props.card);
  }

  return (
    <li className='element'>
      <a
        href={props.card.trailerLink}
        target='_blank'
        rel='noreferrer noopener'
        className="element__link"
      >
        <img
          className='element__image'
          src={props.isSavedMoviesPage ? props.card.image : setURL(props.card.image.url)}
          alt={props.card.name}
        />
      </a>
      <div className='element__bottom'>
        <div>
          <h2 className='element__name'>{props.card.nameRU}</h2>
          <p className='element__duration'>{toHours(props.card.duration)}</p>
        </div>
        {props.isSavedMoviesPage ? (
          <button type='button' className='element__delete-button' onClick={handleDeleteClick}></button>
        ) : (
          <button type='button' className={cardSavedButtonClassName} onClick={onCardClick} ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
