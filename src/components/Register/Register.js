import Form from '../Form/Form';

function Register() {
  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегестрироваться'
      subtitleQuestion='Уже зарегестрированы? '
      linkText='Войти'
    >
      <div className='form__input-block'>
        <p className='form__input-block-name'>Имя</p>
        <input
          className='form__auth-input form__input_el_name_login'
          type='name'
          id='name-input'
          name='name'
          placeholder='Name'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='form__input-error email-input-error'></span>
      </div>

      <div className='form__input-block'>
        <p className='form__input-block-name'>E-mail</p>
        <input
          className='form__auth-input form__input_el_email_login'
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
        <p className='form__input-block-name'>пароль</p>
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

export default Register;
