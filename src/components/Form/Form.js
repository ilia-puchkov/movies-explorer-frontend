import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/navtab-logo.svg';

function Form({
  children,
  title,
  name,
  buttonText,
  subtitleQuestion,
  linkText,
  linkPath,
  onSubmit,
  isDisabled,
}) {
  const location = useLocation();

  return (
    <main className='form__auth-container'>
      <section className='form__block'>
        <Link to='/' className='form__logo-container'>
          <img className='navTab__logo form__logo' src={logo} alt='лого' />
        </Link>
        <h1 className='form__title'>{title}</h1>

        <form
          className='form form__auth'
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className={`form__logIn-button ${
              location.pathname === '/signup'
                ? 'form__logIn-button_registration'
                : ''
            } ${isDisabled ? 'form__logIn-button_disabled' : ''}`}
            type='submit'
            disabled={isDisabled ? true : false}
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
      </section>
    </main>
  );
}

export default Form;
