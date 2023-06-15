import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Footer() {
  const location = useLocation();
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies'
    ) {
      setFooterVisible(true);
    } else {
      setFooterVisible(false);
    }
  }, [location]);

  return (
    isFooterVisible && (
      <footer className='footer'>
        <p className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__block'>
          <p className='footer__text'>&copy; 2023</p>
          <nav className='footer__block-links'>
            <ul className='footer__block-text'>
              <li>
                <a
                  className='footer__text footer__text-link'
                  href='https://practicum.yandex.ru/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  className='footer__text footer__text-link'
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  );
}

export default Footer;
