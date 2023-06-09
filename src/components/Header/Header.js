import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/navtab-logo.svg';
import accountIcon from '../../images/account-icon-svg.svg';
import menuIcon from '../../images/menu-icon.svg';

function Header({ onNavigationClick }) {
  const location = useLocation();

  return (
    <section className='header'>
      <Link to='/' className='navTab__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <div className='header__container_movies'>
        <Link
          to='/movies'
          className={`header__button ${
            location.pathname === '/movies' ? 'header__button_active' : ''
          }`}
        >
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`header__button ${
            location.pathname === '/saved-movies' ? 'header__button_active' : ''
          }`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <div className='header__button-container'>
        <Link to='/profile' className='header__account-button'>
          <img
            className='header__account-logo'
            src={accountIcon}
            alt='аккаунт'
          />
        </Link>
        <button className='header__menu-button' onClick={onNavigationClick}>
          <img src={menuIcon} alt='меню' />
        </button>
      </div>
    </section>
  );
}

export default Header;
