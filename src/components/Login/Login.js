import Form from '../Form/Form';
import useFormValidation from '../../utils/formValidation';

function Login({onLogin}) {
  const { values, errors, handleChange, isValid } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values);
  }

  return (
    <Form
      title='Рады видеть!'
      name='login_form'
      buttonText='Войти'
      subtitleQuestion='Еще не зарегестрированы? '
      linkPath='/signup'
      linkText='Регистрация'
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className='form__input-block'>
        <label className='form__input-block-name'>E-mail</label>
        <input
          className='form__auth-input form__input_el_name_login'
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          minLength='2'
          maxLength='40'
          required
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className='form__input-error email-input-error form__input-error_visible'>{errors.email}</span>
      </div>
      <div className='form__input-block'>
        <label className='form__input-block-name'>Пароль</label>
        <input
          className='form__auth-input form__input_el_password'
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
          minLength='2'
          maxLength='40'
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className='form__input-error password-input-error form__input-error_visible'>{errors.password}
        </span>
      </div>
    </Form>
  );
}

export default Login;
