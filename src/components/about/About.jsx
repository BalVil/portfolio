import { useTranslation, Trans } from "react-i18next";
import { SlTrophy } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
import MeAbout from "assets/me-about.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t("about.meet")}</h5>
      <h2>{t("about.me")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="me about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card-item">
              <SlTrophy className="about__icon" />
              <h5>{t("about.experience")}</h5>
              <small>1+ {t("about.duration", { count: 1 })}</small>
            </article>
            <article className="about__card-item">
              <FiUsers className="about__icon" />
              <h5>{t("about.team")}</h5>
              <small>3</small>
            </article>
            <article className="about__card-item">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("about.individual")}</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
            <Trans i18nKey="about.summary">
              I am a FullStack JavaScript Developer aspiring to join a
              dynamic,active company to create in-demand business solutions.
              <br />I know HTML/CSS, JavaScript, React, Node.js and have
              practical experience using them both in team and individual
              projects.
              <br />
              In all projects, I try to add features that will be in demand by a
              potential customer/user. <br />
              During team projects, I adhere to the Agile/Scrum methodology and
              have experience performing tasks as a Scrum Master.
            </Trans>
          </p>
          <a href="#contact" className="btn btn-primary">
            {t("header.talk")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
