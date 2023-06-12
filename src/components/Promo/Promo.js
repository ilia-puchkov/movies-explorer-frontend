import promoLogo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__block'>
        <div className='promo__block-text'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='promo__text'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className='promo__logo' src={promoLogo} alt='Промок-логотип' />
      </div>
      <a href='#techs' className='promo__button'>Узнать больше</a>
    </section>
  );
}

export default Promo;
