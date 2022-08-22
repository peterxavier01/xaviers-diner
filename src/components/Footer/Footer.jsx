import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import Logo from "../../assets/logo-light.png";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid container">
        <div className="footer-about-container">
          <Link to="/" className="footer-about">
            <div className="footer-logo-container">
              <img src={Logo} alt="xavier's diner logo" />
            </div>
            <span>Xavier's Diner</span>
          </Link>
          <div className="footer-about-content">
            Here at Xavier's diner, we serve our customers the most exquisite of
            dishes. <q>Your satisfaction is our priority.</q>
          </div>
          <div className="social-icons-container">
            <Link to="/">
              <i>{<AiOutlineFacebook />}</i>
            </Link>
            <Link to="/">
              <i>{<AiOutlineTwitter />}</i>
            </Link>
            <Link to="/">
              <i>{<AiOutlineWhatsApp />}</i>
            </Link>
            <Link to="/">
              <i>{<AiOutlineInstagram />}</i>
            </Link>
            <Link to="/">
              <i>{<AiOutlineYoutube />}</i>
            </Link>
          </div>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Products</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>1A, Landsview Avenue, Nigeria</p>
          <p>+234 9067 2722 8280</p>
          <p>xaviersdiner@gmail.com</p>
        </div>
      </div>

      <div className="copyright">
        Copyright ©2022 All rights reserved | Made by Peter Uadiale
      </div>
    </div>
  );
};
export default Footer;
