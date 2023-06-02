import logo from '../../images/navtab-logo.svg';

function Form({children, title, buttonText, subtitleQuestion, linkText}) {
  return(
    <div className='form__auth-container'>
      <img className='navTab__logo' src={logo} alt='лого' /> {/* Добавить Link */}
      <h3 className='form__title'>{title}</h3>
      <form className='form form__auth' name='login_form'>
        {children}
        <button className='form__logIn-button' type='submit'>
          {buttonText}
        </button>
        <div className='form__subtitle'>
          <p className='form__subtitle form__subtitle_link'>
            {subtitleQuestion}
            {linkText} {/* Добавить Link */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;