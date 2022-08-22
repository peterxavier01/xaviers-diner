import React from "react";

import "./Reservation.css";
import Contact from "../../assets/rest5.jpg";
import Button from "../Button/Button";

const Reservation = () => {
  return (
    <section className="reservation row">
      <div className="reservation-img-container col-md-5 col-lg-7 col-sm-12">
        <img src={Contact} alt="" />
      </div>
      <div className="reservation-form-container col-md-5 col-lg-5 col-sm-12">
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
              <input type="date" className="form-control" />
            </div>
            <div>
              <select className="form-select" aria-label="time of day">
                <option value="breakfast">
                  BreakFast
                </option>
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
      </div>
    </section>
  );
};

export default Reservation;
