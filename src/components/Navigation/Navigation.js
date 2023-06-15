import { Link, useLocation } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <aside className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__container'>
        <button
          className='navigation__button-close'
          type='button'
          onClick={onClose}
        ></button>
        <nav>
          <ul className='navigation__links'>
            <li>
              <Link to='/' className='navigation__link'>
                Главная
              </Link>
            </li>
            <li>
              <Link
                to='/movies'
                className={`navigation__link ${
                  location.pathname === '/movies'
                    ? 'navigation__link_active'
                    : ''
                }`}
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                to='/saved-movies'
                className={`navigation__link ${
                  location.pathname === '/saved-movies'
                    ? 'navigation__link_active'
                    : ''
                }`}
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <Link to='/profile'>
          <button
            className='header__account-button navigation__account-button'
            type='button'
          >
            <p className='header__account-button-name'>Аккаунт</p>
            <img
              className='header__account-logo'
              src={accountIcon}
              alt='аккаунт'
            />
          </button>
        </Link>
      </div>
    </aside>
  );
}
export default Navigation;
