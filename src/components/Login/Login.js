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
        <label className='form__input-block-name'>E-mail</label>
        <input
          className='form__auth-input form__input_el_name_login'
          type='email'
          id='email'
          name='login-email'
          placeholder='Email'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error email-input-error'></span>
      </div>
      <div className='form__input-block'>
        <label className='form__input-block-name'>Пароль</label>
        <input
          className='form__auth-input form__input_el_password'
          type='password'
          id='password'
          name='login-password'
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
