import Form from '../Form/Form';

function Register() {
  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегестрироваться'
      subtitleQuestion='Уже зарегестрированы? '
      linkPath='/signin'
      linkText='Войти'
    >
      <div className='form__input-block'>
        <label className='form__input-block-name'>Имя</label>
        <input
          className='form__auth-input form__input_el_name_login'
          type='name'
          id='name'
          name='registration-name'
          placeholder='Name'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error email-input-error'></span>
      </div>

      <div className='form__input-block'>
        <label className='form__input-block-name'>E-mail</label>
        <input
          className='form__auth-input form__input_el_email_login'
          type='email'
          id='email'
          name='registration-email'
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
          name='registration-password'
          placeholder='Пароль'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error password-input-error form__input-error_visible'>
          test
        </span>
      </div>
    </Form>
  );
}

export default Register;
