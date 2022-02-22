import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        <div id="left">
          <ul>
            <li className="contact-element">
              <PhoneIcon
                style={{ display: "inline-block", verticalAlign: "sub" }}
                fontSize="large"
              />{" "}
              <div className="contact-text"> +33 7 52 54 06 32 </div>
            </li>
            <li className="contact-element">
              <ContactMailIcon
                style={{ display: "inline-block", verticalAlign: "sub" }}
                fontSize="large"
              />{" "}
              <div className="contact-text"> bilek.lisa1@gmail.com </div>
            </li>
            <li className="contact-element">
              <LocationCityIcon
                style={{ display: "inline-block", verticalAlign: "sub" }}
                fontSize="large"
              />{" "}
              <div className="contact-text"> Poitiers, France </div>
            </li>
          </ul>
        </div>
        <div id="right">
          <div className="text-social">Contact me</div>
          <div className="social-media">
            <a href="https://github.com/lisabilek">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/lisa-bilek/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
