// elements
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({  onSearch,  onFilter, isShortMovies }) {
  const [inquiry, setInquiry] = useState('');
  const location = useLocation();

  function handleInquiry(e) {
    setInquiry(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(inquiry);
  }

  useEffect(() => {
    if(location.pathname === '/movies' && localStorage.getItem('moviesSearch')) {
      const currentInquiry = localStorage.getItem('moviesSearch');
      setInquiry(currentInquiry);
    }
  }, [])

  return (
    <section className='search'>
      <form className='search__form' name='search_form' onSubmit={handleSubmit}>
        <div className='search__field'>
          <input
            className='search__input'
            id='search-input'
            name='inquery'
            type='text'
            placeholder='Фильм'
            minLength='1'
            required
            value={inquiry || ''}
            onChange={handleInquiry}
          ></input>
          <button className='search__button' type='submit'>
            Поиск
          </button>
        </div>
        <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
      </form>
    </section>
  );
}

export default SearchForm;
