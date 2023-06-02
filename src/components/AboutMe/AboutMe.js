import aboutMePhoto from '../../images/portfolio-photo.png';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className="aboutProject__title">Студент</h2>
      <hr className="aboutProject__separation"></hr>
      <div className='aboutMe__block'>
        <div>
          <h2 className='aboutMe__title'>
            Илья
          </h2>
          <h3 className='aboutMe__subtitle'>Фронетенд-разработчикб 31 год</h3>
          <p className='aboutMe__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
        <img className='aboutMe__photo' src={aboutMePhoto} alt='портфолио-фото' />
      </div>
      <a className='aboutMe__link' href='https://github.com/ilia-puchkov'>Github</a>
    </section>
  );
}

export default AboutMe;
