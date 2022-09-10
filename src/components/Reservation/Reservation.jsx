import React from "react";

import { fadeInLeftVariants, fadeInRightVariants } from "../../data";

import "./Reservation.css";
import Contact from "../../assets/rest5.jpg";
import Button from "../Button/Button";

import { motion } from "framer-motion";

const Reservation = () => {
  return (
    <section className="reservation row">
      <motion.div
        variants={fadeInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="reservation-img-container col-md-5 col-lg-7 col-sm-12"
      >
        <img src={Contact} alt="female waiter smiling in front of restaurant" />
      </motion.div>
      <motion.div
        variants={fadeInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="reservation-form-container col-md-5 col-lg-5 col-sm-12"
      >
        <form className="reservation-form">
          <h4>Make a reservation</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe
            repellat perspiciatis.
          </p>
          <div className="form-input-container">
            <input
              type="text"
              placeholder="Number of Guest"
              className="form-control"
            />
          </div>
          <div className="form-input-container">
            <input
              type="number"
              placeholder="Phone No."
              className="form-control"
            />
          </div>
          <div className="form-input-container">
            <div className="mb-3">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="form-control"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
            <div>
              <select className="form-select" aria-label="time of day">
                <option value="breakfast">BreakFast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>
          <div className="form-input-container">
            <textarea
              placeholder="Leave Your Message"
              className="form-control"
            ></textarea>
          </div>
          <Button
            text="Book Appointment"
            width="100%"
            height={64}
            backgroundColor="var(--tertiary-color)"
          />
        </form>
      </motion.div>
    </section>
  );
};

export default Reservation;
