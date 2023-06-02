// Page elements
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return(
 <section className="main">
    <NavTab />
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
  </section>
  );
};

export default Main;