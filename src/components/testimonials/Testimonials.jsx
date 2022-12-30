import "./testimonials.css";
import ava1 from "assets/avatar1.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Third-party reviews</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="person__avatar">
            <img src={ava1} alt="avatar one" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
