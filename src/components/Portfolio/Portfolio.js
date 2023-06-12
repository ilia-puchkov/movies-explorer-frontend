/* eslint-disable jsx-a11y/anchor-has-content */
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__block'>
          <a
            className='portfolio__text'
            href='https://github.com/ilia-puchkov/how-to-learn'
            target='_blank'
            rel='noreferrer noopener'
          >
            Статичный сайт
          </a>
          <a
            className='portfolio__link'
            href='https://github.com/ilia-puchkov/how-to-learn'
            target='_blank'
            rel='noreferrer noopener'
          ></a>
        </li>
        <li className='portfolio__block'>
          <a
            className='portfolio__text'
            href='https://github.com/ilia-puchkov/russian-travel'
            target='_blank'
            rel='noreferrer noopener'
          >
            Адаптивный сайт
          </a>
          <a
            className='portfolio__link'
            href='https://github.com/ilia-puchkov/russian-travel'
            target='_blank'
            rel='noreferrer noopener'
          ></a>
        </li>
        <li className='portfolio__block'>
          <a
            className='portfolio__text'
            href='https://github.com/ilia-puchkov/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer noopener'
          >
            Одностраничное приложение
          </a>
          <a
            className='portfolio__link'
            href='https://github.com/ilia-puchkov/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer noopener'
          ></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
