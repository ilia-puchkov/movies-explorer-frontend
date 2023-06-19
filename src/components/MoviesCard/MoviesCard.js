function MoviesCard(props) {
  const cardSavedButtonClassName = `element__save-button ${
    props.card.isSaved && 'element__save-button-active'
  }`;

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
          src={props.card.link}
          alt={props.card.name}
        />
      </a>
      <div className='element__bottom'>
        <div>
          <h2 className='element__name'>{props.card.name}</h2>
          <p className='element__duration'>{props.card.duration}</p>
        </div>
        {props.isSavedMoviesPage ? (
          <button type='button' className='element__delete-button'></button>
        ) : (
          <button type='button' className={cardSavedButtonClassName}></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
