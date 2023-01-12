import { useTranslation } from "react-i18next";
import works from "data/my-works.json";
import "./portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <h5>{t("portfolio.works")}</h5>
      <h2>{t("portfolio.title")}</h2>
      <div className="container portfolio__container">
        {works.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="portfolio__item-desc">
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
