import { Link } from 'react-router-dom';
import navTabLogo from '../../images/navtab-logo.svg';

function NavTab() {
  return (
    <section className='navTab'>
      <img className='navTab__logo' src={navTabLogo} alt='лого' />
      <div className='navTab__block'>
        <Link to='/signup'>
          <button type='button' className='navTab__button navTab__button-registration'>Регистрация</button>
        </Link>
        <Link to='/signin'>
          <button type='button' className='navTab__button navTab__button-login'>Войти</button>
        </Link>
      </div>
    </section>
  );
}

export default NavTab;
