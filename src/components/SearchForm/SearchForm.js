// elements
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form' name='search_form'>
        <div className='search__field'>
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
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
