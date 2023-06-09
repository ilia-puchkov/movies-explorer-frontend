import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import accountIcon from '../../images/account-icon-svg.svg';

function Navigation({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__container'>
        <button className='navigation__button-close' onClick={onClose}></button>
        <div className='navigation__links'>
          <Link to='/' className='navigation__link'>
            Главная
          </Link>
          <Link
            to='/movies'
            className={`navigation__link ${
              location.pathname === '/movies' ? 'navigation__link_active' : ''
            }`}
          >
            Фильмы
          </Link>
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
        </div>
        <Link
          to='/profile'
          className='header__account-button navigation__account-button'
        >
          <img
            className='header__account-logo'
            src={accountIcon}
            alt='аккаунт'
          />
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
