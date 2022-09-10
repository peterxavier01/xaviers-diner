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
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

import { MdOutlineLocationOn } from "react-icons/md";

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
          <div className="icon-container">
            <MdOutlineLocationOn className="footer-contact-icon" />
            <span>1A, Landsview Avenue, Nigeria</span>
          </div>
          <div className="icon-container">
            <AiOutlinePhone className="footer-contact-icon" />
            <span>+234 9067 2722 8280</span>
          </div>
          <div className="icon-container">
            <AiOutlineMail className="footer-contact-icon" />
            <span>xaviersdiner@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2022 All rights reserved | Peter Uadiale
      </div>
    </div>
  );
};
export default Footer;
