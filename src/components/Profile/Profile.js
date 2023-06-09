function Profile() {
  return (
    <>
      <section className='profile'>
        <h3 className='profile__title'>Привет, Виталий!</h3>
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
        <button className='profile__edit-button'>Редактировать</button>
        <button className='profile__exit-button'>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
