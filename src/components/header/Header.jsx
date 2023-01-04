import "./header.css";
import CTA from "./CTA";
import Me from "assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <section>
          <h5>Hello, I'm</h5>
          <h1>Vitalii Baluta</h1>
          <h5 className="text-light">JS FullStack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={Me} alt="me main"></img>
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;
