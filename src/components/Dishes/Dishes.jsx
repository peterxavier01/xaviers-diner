import React from "react";
import { motion } from "framer-motion";

import { dishes, fadeInUpVariants, fadeInVariants } from "../../data";

import "./Dishes.css";

const Dishes = () => {
  return (
    <section className="dishes">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="dishes-header-container"
      >
        <h2>Our Popular Dishes</h2>
        <p className="subtitle">Take a bite and be hooked on forever</p>
      </motion.div>
      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className="dishes-card"
          >
            <img src={dish.src} alt="dish" />
            <h4>{dish.title}</h4>
            <p>{dish.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
