function MoviesCard(props) {
  const cardSavedButtonClassName = `element__save-button ${
    props.card.isSaved && 'element__save-button-active'
  }`;

  return (
    <li className='element'>
      <img
        className='element__image'
        src={props.card.link}
        alt={props.card.name}
      />
      <div className='element__bottom'>
        <div>
          <p className='element__name'>{props.card.name}</p>
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
