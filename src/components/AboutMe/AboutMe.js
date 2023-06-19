import aboutMePhoto from '../../images/portfolio-photo.png';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className='aboutProject__title'>Студент</h2>
      <div className='aboutMe__block'>
        <div>
          <h3 className='aboutMe__title'>Виталий</h3>
          <h3 className='aboutMe__subtitle'>Фронетенд-разработчик, 30 лет</h3>
          <p className='aboutMe__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='aboutMe__link'
            href='https://github.com/ilia-puchkov'
            target='_blank'
            rel='noreferrer noopener'
          >
            Github
          </a>
        </div>
        <img
          className='aboutMe__photo'
          src={aboutMePhoto}
          alt='портфолио-фото'
        />
      </div>
    </section>
  );
}

export default AboutMe;
