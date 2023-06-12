// elements
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          className='search__input'
          id='search-input'
          name='search-query'
          type='text'
          placeholder='Фильм'
          minLength='1'
          required
        ></input>
        <button className='search__button' type='submit'>
          Поиск
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
