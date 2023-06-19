import { Link } from 'react-router-dom';

function Profile({ editState, isInEdit, onClose }) {
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__info' name='profile_form'>
        <div className='profile__line'>
          <label className='profile__name'>Имя</label>
          {editState ? (
            <input
              className='profile__text'
              type='text'
              id='name'
              name='profile-name'
              placeholder='Имя'
              minLength='2'
              maxLength='40'
              required
              // запонить данными currentUser
            />
          ) : (
            <p className='profile__text'>Текущее имя</p>
          )}
        </div>
        <span className='form__input-error name-input-error profile-input-error'></span>
        <div className='profile__line'>
          <label className='profile__email'>E-mail</label>
          {editState ? (
            <input
              className='profile__text-email'
              type='email'
              id='email'
              name='profile-email'
              placeholder='Email'
              minLength='2'
              maxLength='40'
              required
              // запонить данными currentUser
            />
          ) : (
            <p className='profile__text-email'>Текущее мыло</p>
          )}
        </div>
        <span className='form__input-error email-input-error profile-input-error form__input-error_visible'>
          Test
        </span>
        {editState ? (
          <div className='profile__buttons'>
            <span className='form__input-error button-input-error form__input-error_visible'>
              test
            </span>
            <button
              className='form__logIn-button form__profile-button'
              type='submit'
              // disabled
              onClick={onClose}
            >
              Сохранить
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
              <button type='button' className='profile__exit-button'>
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
