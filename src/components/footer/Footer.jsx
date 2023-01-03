import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="#" className="footer__logo">
          BALUTA
        </a>
      </div>

      <ul className="permalinks">
        <li href="#top">Home</li>
        <li href="#about">About</li>
        <li href="#experience">Experience</li>
        <li href="#portfolio">Portfolio</li>
        <li href="#testimonials">Testimonials</li>
        <li href="#contact">Contact</li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Baluta Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
