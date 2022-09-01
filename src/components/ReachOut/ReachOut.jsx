import React from "react";

import "./ReachOut.css";
import Contact from "../../assets/rest18.jpg";
import Button from "../Button/Button";

const ReachOut = () => {
  return (
    <div className="reach-out row">
      <div className="form-container col-md-6 col-sm-12">
        <h3>Contact us</h3>
        <p>
          Feel free to tell us anything you would like us to know. We are always
          happy to hear from you
        </p>
        <form>
          <div className="form-input-container">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-input-container">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
            />
          </div>
          <div className="form-input-container">
            <textarea
              className="form-control"
              placeholder="Leave Your Message Here"
            ></textarea>
          </div>
          <Button
            text="Send Message"
            width="100%"
            height={60}
            backgroundColor="var(--tertiary-color)"
          />
        </form>
      </div>

      <div className="col-md-6 col-sm-12 img-container">
        <img src={Contact} alt="conatct us" />
      </div>
    </div>
  );
};

export default ReachOut;
