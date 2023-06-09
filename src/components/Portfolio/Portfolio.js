/* eslint-disable jsx-a11y/anchor-has-content */
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__block'>
        <p className='portfolio__text'>Статичный сайт</p>
        <a
          className='portfolio__link'
          href='https://github.com/ilia-puchkov/how-to-learn'
        ></a>
      </div>
      <div className='portfolio__block'>
        <p className='portfolio__text'>Адаптивный сайт</p>
        <a
          className='portfolio__link'
          href='https://github.com/ilia-puchkov/russian-travel'
        ></a>
      </div>
      <div className='portfolio__block'>
        <p className='portfolio__text'>Одностраничное приложение</p>
        <a
          className='portfolio__link'
          href='https://github.com/ilia-puchkov/react-mesto-api-full-gha'
        ></a>
      </div>
    </section>
  );
}

export default Portfolio;
