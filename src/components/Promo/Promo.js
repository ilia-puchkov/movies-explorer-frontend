import promoLogo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__block'>
        <div>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='promo__text'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className='promo__logo' src={promoLogo} alt='Промок-логотип' />
      </div>
      <button className='promo__button'>Узнать больше</button>
    </section>
  );
}

export default Promo;
