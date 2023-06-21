function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <div className='filter'>
      <input
        className='filter__checkbox'
        type='checkbox'
        onChange={onFilter}
        checked={isShortMovies ? true : false}
      ></input>
      <span className='filter__text'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
