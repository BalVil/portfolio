import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper";

import reviews from "data/reviews.json";
import "./testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials">
      <h5>{t("testimonials.reviews")}</h5>
      <h2>{t("testimonials.title")}</h2>

      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        loop={true}
        modules={[Keyboard, Navigation]}
        className="container testimonials__container"
      >
        {reviews.map(({ avatar, name, position, desc }) => {
          return (
            <SwiperSlide className="testimonial" key={name}>
              <div className="reviewer__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="reviewer__name">{name}</h5>
              <small className="reviewer__position">{position}</small>
              <small className="reviewer__desc">{desc}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
