import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/navtab-logo.svg';
import accountIcon from '../../images/account-icon-svg.svg';
import menuIcon from '../../images/menu-icon.svg';
import { useEffect, useState } from 'react';

function Header({ onNavigationClick }) {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    if (
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile'
    ) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  }, [location]);

  return (
    isHeaderVisible && (
      <header className='header'>
        <Link to='/' className='navTab__logo'>
          <img src={logo} alt='логотип' />
        </Link>
        <ul className='header__container_navigation'>
          <li>
            <Link
              to='/movies'
              className={`header__button ${
                location.pathname === '/movies' ? 'header__button_active' : ''
              }`}
              type='button'
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              to='/saved-movies'
              className={`header__button ${
                location.pathname === '/saved-movies'
                  ? 'header__button_active'
                  : ''
              }`}
              type='button'
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className='header__button-container'>
          <Link to='/profile' className='header__account-button'>
            <img
              className='header__account-logo'
              src={accountIcon}
              alt='аккаунт'
            />
          </Link>
          <button
            className='header__menu-button'
            type='button'
            onClick={onNavigationClick}
          >
            <img src={menuIcon} alt='меню' />
          </button>
        </div>
      </header>
    )
  );
}

export default Header;
