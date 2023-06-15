import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/navtab-logo.svg';
import accountIcon from '../../images/account-icon.svg';
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
        <nav>
          <ul className='header__container-navigation'>
            <li>
              <Link
                to='/movies'
                className={`header__button ${
                  location.pathname === '/movies' ? 'header__button_active' : ''
                }`}
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
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <div className='header__button-container'>
          <Link to='/profile' className='header__account-button'>
            <button className='header__account-button' type='button'>
              <p className='header__account-button-name'>Аккаунт</p>
              <img
                className='header__account-logo'
                src={accountIcon}
                alt='аккаунт'
              />
            </button>
          </Link>
          <button
            className='header__menu-button'
            type='button'
            onClick={onNavigationClick}
          >
            <img src={menuIcon} alt='меню' className='header__menu-button' />
          </button>
        </div>
      </header>
    )
  );
}

export default Header;
