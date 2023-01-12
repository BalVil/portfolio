import { useTranslation } from "react-i18next";

import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#top" className="footer__logo">
        BALUTA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">{t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#experience">{t("footer.experience")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("footer.portfolio")}</a>
        </li>
        <li>
          <a href="#testimonials">{t("footer.testimonials")}</a>
        </li>
        <li>
          <a href="#contact">{t("footer.contact")}</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Baluta Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
