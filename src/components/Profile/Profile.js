import { Link } from 'react-router-dom';

function Profile({ onPopupClick }) {
  return (
      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <div className='profile__info'>
          <div className='profile__line'>
            <p className='profile__name'>Имя</p>
            <p className='profile__text'>Виталий</p>
          </div>
          <div className='profile__line'>
            <p className='profile__email'>E-mail</p>
            <p className='profile__text-email'>pochta@yandex.ru</p>
          </div>
        </div>
        <button
          type='button'
          className='profile__edit-button'
          onClick={onPopupClick}
        >
          Редактировать
        </button>
        <Link to='/'>
          <button type='button' className='profile__exit-button'>
            Выйти из аккаунта
          </button>
        </Link>
      </main>
  );
}

export default Profile;
