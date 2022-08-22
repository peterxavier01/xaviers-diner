import React from "react";

import Button from "../Button/Button";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Meals.css";
import "swiper/css";
import "swiper/css/navigation";

import MealOne from "../../assets/rest.jpg";
import MealTwo from "../../assets/rest2.jpg";
import MealThree from "../../assets/rest3.jpg";
import MealFour from "../../assets/rest4.jpg";
import MealFive from "../../assets/rest6.jpg";
import MealSix from "../../assets/rest7.jpg";

const Meals = () => {
  const meals = [
    {
      src: MealOne,
      title: "Tuna Tartare",
      body: "The most exquisite taste in all the world",
    },
    {
      src: MealTwo,
      title: "Prawn Sauce",
      body: "The most exquisite taste in all the world",
    },
    {
      src: MealThree,
      title: "Shrimp Sauce",
      body: "The most exquisite taste in all the world",
    },
    {
      src: MealFour,
      title: "Cheese Burger",
      body: "The most exquisite taste in all the world",
    },
    {
      src: MealFive,
      title: "Pizza al Padellino",
      body: "The most exquisite taste in all the world",
    },
    {
      src: MealSix,
      title: "Chicken Wings",
      body: "The most exquisite taste in all the world",
    },
  ];

  return (
    <section className="meals">
      <div className="meals-wrapper">
        <div className="meals-menu">
          <div className="meals-header">
            <h3>Our Featured Food Menus</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              incidunt cumque quos est enim aut.
            </p>
          </div>
          <div>
            <Button
              text="Full Menu"
              width={250}
              height={74}
              backgroundColor={`var(--tertiary-color)`}
              link="/products"
            />
          </div>
        </div>

        <div className="meals-slider-container">
          <Swiper
            navigation={true}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <div className="meals-slider">
              {meals.map((meal, index) => (
                <SwiperSlide key={index}>
                  <div className="meals-card">
                    <img src={meal.src} alt="tuna tartar" />
                    <h3>{meal.title}</h3>
                    <p>{meal.body}</p>
                    <button>Make an Order</button>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Meals;
