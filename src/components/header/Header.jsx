import { useTranslation } from "react-i18next";

import "./header.css";
import LanguageSwitch from "components/header/LanguageSwitch";
import CTA from "./CTA";
import Me from "assets/me.png";
import Me2x from "assets/me@2x.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <section>
          <div className="header__language-switch">
            <LanguageSwitch />
          </div>
          <h5>{t("header.greeting")}</h5>
          <h1>{t("header.name")}</h1>
          <h5 className="text-light">JS FullStack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <picture>
              <source srcSet={`${Me2x} 2x, ${Me}`} media="(max-width:719px)" />
              <source srcSet={`${Me2x} 2x`} media="(min-width:720px)" />
              <img srcSet={Me} alt="me main" />
            </picture>
          </div>

          <a href="#contact" className="scroll__down">
            {t("header.scroll")}
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;
