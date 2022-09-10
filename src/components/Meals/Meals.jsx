import React, { useRef } from "react";

import { motion } from "framer-motion";
import {
  meals,
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInUpVariants,
} from "../../data";

import Button from "../Button/Button";
import Card from "../Card/Card";

import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Meals.css";

import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Meals = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation]);

  return (
    <section className="meals">
      <div className="meals-wrapper">
        <div className="meals-menu">
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="meals-header"
          >
            <h3>Our Featured Food Menus</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              incidunt cumque quos est enim aut.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              text="Full Menu"
              width={250}
              height={64}
              backgroundColor={`var(--tertiary-color)`}
              link="/products"
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="meals-slider-container"
        >
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
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
                  <Card
                    src={meal.src}
                    title={meal.title}
                    subtitle={meal.body}
                    amount="$25"
                  />
                </SwiperSlide>
              ))}
            </div>

            <div className="arrow-container">
              <div
                ref={prevRef}
                style={{ left: "0px" }}
                className="slide-arrow prev"
              >
                <MdKeyboardArrowLeft className="slide-icons" />
              </div>
              <div
                ref={nextRef}
                style={{ right: "0px" }}
                className="slide-arrow next"
              >
                <MdKeyboardArrowRight className="slide-icons" />
              </div>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Meals;
