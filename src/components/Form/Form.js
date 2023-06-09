import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/navtab-logo.svg';

function Form({
  children,
  title,
  buttonText,
  subtitleQuestion,
  linkText,
  linkPath,
}) {
  const location = useLocation();

  return (
    <div className='form__auth-container'>
      <Link to='/'>
        <img className='navTab__logo form__logo' src={logo} alt='лого' />
      </Link>
      <h3 className='form__title'>{title}</h3>
      <form className='form form__auth' name='login_form'>
        {children}
        <button
          className={`form__logIn-button ${
            location.pathname === '/signup'
              ? 'form__logIn-button_registration'
              : ''
          }`}
          type='submit'
        >
          {buttonText}
        </button>
        <div className='form__subtitle'>
          <p className='form__subtitle'>{subtitleQuestion}</p>
          <p className='form__subtitle form__subtitle_link'>
            <Link to={linkPath} className='form__subtitle_link-color'>
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
