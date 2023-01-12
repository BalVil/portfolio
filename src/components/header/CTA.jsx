import { useTranslation } from "react-i18next";
import CV from "assets/cv.pdf";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("header.cv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("header.talk")}
      </a>
    </div>
  );
};

export default CTA;
