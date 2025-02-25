import { socialNetworks } from "../../config/constants";
function Footer() {

  return (
    <footer className="footer-container">
      <p className="contact-text">Contacto</p>
      <p className="description-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
        nesciunt doloribus asperiores et, laudantium corrupti! Impedit,
        accusantium facilis quisquam perferendis deleniti unde eius itaque
        ipsam, dolorem id pariatur distinctio amet.
      </p>
      <div className="footer-buttons">
        {socialNetworks.map((social, index) => (
          <button
            className="btn btn-secondary shadow-sm"
            type="submit"
            key={index}
          >
            <img src={social.icon} alt={social.name} />
            <a href={social.url}>{social.name}</a>
          </button>
        ))}
      </div>
      <p className="develop-name">Ariana Ocando™ 2025</p>
    </footer>
  );
}

export default Footer;