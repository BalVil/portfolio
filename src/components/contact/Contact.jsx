import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandTelegram, TbBrandMessenger } from "react-icons/tb";

import notices from "helpers/Notification/Notification";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        notices.showSuccess("The email has been sent");
      })
      .catch(() => {
        notices.showError("Something went wrong. Please try again");
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__item">
            <MdOutlineMail className="contact__item-icon" />
            <h4>Email</h4>
            <h5>balutavili@gmail.com</h5>
            <a href="mailto:balutavili@gmail.com">Send a message</a>
          </article>
          <article className="contact__item">
            <TbBrandTelegram className="contact__item-icon" />
            <h4>Telegram</h4>
            <h5>@VitalBal</h5>
            <a href="https://t.me/VitalBal" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__item">
            <TbBrandMessenger className="contact__item-icon" />
            <h4>Messenger</h4>
            <h5>Vitali Baluta</h5>
            <a href="https://m.me/rasilew" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name=""
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-form">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
