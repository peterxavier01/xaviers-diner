import React from "react";

import "./Testimonials.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import TestimonialOne from "../../assets/customer1.jpg";
import TestimonialTwo from "../../assets/customer2.jpg";
import TestimonialThree from "../../assets/customer3.jpg";
import TestimonialFour from "../../assets/customer4.jpg";
import TestimonialFive from "../../assets/customer5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      src: TestimonialOne,
      title: "Shaun Grey",
      body: "The service offered to customers is top-notch and the meals are extremely delicious.",
      rating: <AiFillStar />,
    },
    {
      src: TestimonialTwo,
      title: "Mark Twain",
      body: "The service offered to customers is top-notch and the meals are extremely delicious.",
      rating: <AiFillStar />,
    },
    {
      src: TestimonialThree,
      title: "Bella Black",
      body: "The service offered to customers is top-notch and the meals are extremely delicious.",
      rating: <AiFillStar />,
    },
    {
      src: TestimonialFour,
      title: "Angela Michaels",
      body: "The service offered to customers is top-notch and the meals are extremely delicious.",
      rating: <AiFillStar />,
    },
    {
      src: TestimonialFive,
      title: "Jessica Jones",
      body: "The service offered to customers is top-notch and the meals are extremely delicious.",
      rating: <AiOutlineStar />,
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div>
          <h3>Our customers reviews</h3>
          <p>Here's what our valued customers have to say about us</p>
        </div>

        <div>
          <Swiper
            navigation={true}
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
