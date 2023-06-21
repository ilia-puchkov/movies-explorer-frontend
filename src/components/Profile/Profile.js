import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../../utils/formValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function Profile({
  editState,
  isInEdit,
  onClose,
  onUpdateUser,
  error,
  onLogOut,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } =
    useFormValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(values);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form
        className='profile__info'
        name='profile_form'
        onSubmit={handleSubmit}
      >
        <div className='profile__line'>
          <label className='profile__name'>Имя</label>
          {editState ? (
            <input
              className='profile__text'
              type='text'
              id='name'
              name='name'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              required
              value={values.name || ''}
              onChange={handleChange}
            />
          ) : (
            <p className='profile__text'>{currentUser.name}</p>
          )}
        </div>
        <span className='form__input-error name-input-error profile-input-error form__input-error_visible'>
          {errors.name}
        </span>
        <div className='profile__line'>
          <label className='profile__email'>E-mail</label>
          {editState ? (
            <input
              className='profile__text-email'
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
          ) : (
            <p className='profile__text-email'>{currentUser.email}</p>
          )}
        </div>
        <span className='form__input-error email-input-error profile-input-error form__input-error_visible'>
          {errors.email}
        </span>
        {editState ? (
          <div className='profile__buttons'>
            <span className='form__input-error button-input-error form__input-error_visible'>
              {error}
            </span>
            <button
              className={`form__logIn-button form__profile-button ${
                !isValid ? 'form__logIn-button_disabled' : ''
              }`}
              type='submit'
              disabled={!isValid ? true : false}
            >
              Сохранить
            </button>
            <button
              className='not-found__button profile__button-back'
              type='button'
              onClick={onClose}
            >
              Назад
            </button>
          </div>
        ) : (
          <div className='profile__buttons'>
            <button
              type='button'
              className='profile__edit-button'
              onClick={isInEdit}
            >
              Редактировать
            </button>
            <Link to='/'>
              <button
                type='button'
                className='profile__exit-button'
                onClick={onLogOut}
              >
                Выйти из аккаунта
              </button>
            </Link>
          </div>
        )}
      </form>
    </main>
  );
}

export default Profile;
