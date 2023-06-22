import linkLogo from '../../images/portfolio-link-arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li>
          <a
            className='portfolio__block'
            href='https://github.com/ilia-puchkov/how-to-learn'
            target='_blank'
            rel='noreferrer noopener'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <img src={linkLogo} className='portfolio__link' alt='ссылка' />
          </a>
        </li>
        <li className='portfolio__lines'>
          <a
            className='portfolio__block'
            href='https://github.com/ilia-puchkov/russian-travel'
            target='_blank'
            rel='noreferrer noopener'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <img src={linkLogo} className='portfolio__link' alt='ссылка' />
          </a>
        </li>
        <li>
          <a
            className='portfolio__block'
            href='https://github.com/ilia-puchkov/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer noopener'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <img src={linkLogo} className='portfolio__link' alt='ссылка' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
