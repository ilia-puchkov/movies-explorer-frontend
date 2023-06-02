import navTabLogo from "../../images/navtab-logo.svg"

function NavTab() {
  return (
  <section className="navTab">
    <img className="navTab__logo" src={navTabLogo} alt="лого"/>
    <div>
      <button className="navTab__button-registration">Регистрация</button>
      <button className="navTab__button-login">Войти</button>
    </div>    
  </section>
  );
};

export default NavTab;