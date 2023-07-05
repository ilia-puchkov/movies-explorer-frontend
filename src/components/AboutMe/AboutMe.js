import aboutMePhoto from '../../images/portfolio-photo.png';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className='aboutProject__title'>Студент</h2>
      <div className='aboutMe__block'>
        <div>
          <h3 className='aboutMe__title'>Илья</h3>
          <h3 className='aboutMe__subtitle'>Фронетенд-разработчик, 32 года</h3>
          <p className='aboutMe__text'>
            Я родился в Тамбове, живу в Москве, закончил факультет английской филологии ТГУ. Люблю  кино и пешие прогулки. Работаю в сфере обслуживания аэропортов. В 2022-2023 прошел курсы Яндекс.Практикум по фронт-енд разработке. Мечтаю стать одним из создателей сервиса, который изменит мир.
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
