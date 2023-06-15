import { Link } from 'react-router-dom';
import navTabLogo from '../../images/navtab-logo.svg';

function NavTab() {
  return (
    <header className='navTab'>
      <img className='navTab__logo' src={navTabLogo} alt='лого' />
      <nav>
        <ul className='navTab__block'>
          <li>
            <Link to='/signup'>
              <button
                type='button'
                className='navTab__button navTab__registration-button'
              >
                Регистрация
              </button>
            </Link>
          </li>
          <li>
            <Link to='/signin'>
              <button
                type='button'
                className='navTab__button navTab__login-button'
              >
                Войти
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTab;
