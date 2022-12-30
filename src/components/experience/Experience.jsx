import { FaCheckCircle } from "react-icons/fa";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="experience__subtitle">Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS / SASS / Styled-components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>OAuth</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="experience__subtitle">Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>MongoDB / Mongoose</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Socket.io</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Passport</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
