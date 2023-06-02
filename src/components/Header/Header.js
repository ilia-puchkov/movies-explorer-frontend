import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/navtab-logo.svg';
import accountIcon from '../../images/account-icon.svg';
import menuIcon from '../../images/menu-icon.svg';

function Header() {
  return (
    <section className='header'>
      <Link to='/' className='navTab__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <div className='header__container_movies'>
        <Link
          to='/movies'
          className='header__button'
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className='header__button'
        >
          Сохранённые фильмы
        </Link>
      </div>
      <div className='header__button-container'>
        <Link to='/profile' className='header__account-button'>
          <img src={accountIcon} alt='аккаунт' />
        </Link>
        <button className='header__menu-button'>
          <img src={menuIcon} alt='меню' />
        </button>
      </div>
    </section>
  );
}

export default Header;
