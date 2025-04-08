import { useContext } from "react";
import { Link } from "react-router-dom";

//assets
import "./Footer.css";
import Logo from "../../assets/DNC_logo.svg";
import BrasilIcon from "../../assets/brasilIcon.svg";
import UsaIcon from "../../assets/usaIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import TwitterIcon from "../../assets/twitterIcon.svg";
import InstragramIcon from "../../assets/instagramIcon.svg";
import LinkedinIcon from "../../assets/linkedinIcon.svg";

//components
import Button from "../Button/Button";

//context
import { AppContext } from "../Contexts/AppContext";

function Footer() {
  const appContext = useContext(AppContext);
  const changeLanguage = (country) => {
    appContext.setLanguage(country);
  };

  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" alt="DNC LOGO" />
            <p className="grey-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="https://google.com" target="_blank">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={TwitterIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={LinkedinIcon} alt="" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={InstragramIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p className="grey-1-color">
                {" "}
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP
                12243-030{" "}
              </p>
              <p className="grey-1-color"> suporte@escoladnc.com.br </p>
              <p className="grey-1-color"> (19) 99187-4342 </p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <Button
              className="btn"
              buttonStyle="unstyled"
              onClick={() => changeLanguage("br")}
            >
              <img src={BrasilIcon} height="29px" alt="Icone brasil" />
            </Button>
            <Button
              className="btn"
              buttonStyle="unstyled"
              onClick={() => changeLanguage("en")}
            >
              <img src={UsaIcon} height="29px" alt="Icone Usa" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
