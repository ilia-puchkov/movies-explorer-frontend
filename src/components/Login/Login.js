import Form from '../Form/Form';

function Login() {
  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      subtitleQuestion='Еще не зарегестрированы? '
      linkPath='/signup'
      linkText='Регистрация'
    >
      <div className='form__input-block'>
        <p className='form__input-block-name'>E-mail</p>
        <input
          className='form__auth-input form__input_el_name_login'
          type='email'
          id='email-input'
          name='email'
          placeholder='Email'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error email-input-error'></span>
      </div>
      <div className='form__input-block'>
        <p className='form__input-block-name'>Пароль</p>
        <input
          className='form__auth-input form__input_el_password'
          type='password'
          id='password-input'
          name='password'
          placeholder='Пароль'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error password-input-error'></span>
      </div>
    </Form>
  );
}

export default Login;
