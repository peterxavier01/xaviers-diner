import React, { useRef } from "react";
import { motion } from "framer-motion";

import { testimonials, fadeInUpVariants, fadeInVariants } from "../../data";

import "./Testimonials.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation]);

  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Our customers reviews</h3>
          <p>Here's what our valued customers have to say about us</p>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="swiper-container"
        >
          <Swiper
            navigation={true}
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
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
            <div className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonials-card">
                    <img src={testimonial.src} alt="tuna tartar" />
                    <p>{testimonial.title}</p>
                    <p>{testimonial.body}</p>
                    <div className="divider"></div>
                    <div className="ratings-container">
                      {testimonials.map((item, index) => (
                        <div key={index} className="rating">
                          {item.rating}
                        </div>
                      ))}
                    </div>
                  </div>
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

export default Testimonials;
