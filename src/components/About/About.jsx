import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Banner from "../Banner/Banner";

import "./About.css";
import {
  chefs,
  cards,
  fadeInRightVariants,
  fadeInUpVariants,
} from "../../data";

const About = () => {
  return (
    <div className="about" id="about">
      <Banner heading="About Us" subHeading="Who We Are" />

      <motion.div
        variants={fadeInRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="about-heading-container container"
      >
        <h2>Xavier's Diner</h2>
        <p>
          The European languages are members of the same family. Their separate
          existence is a myth. For science, music, sport, etc, Europe uses the
          same vocabulary. The languages only differ in their grammar, their
          pronunciation and their most common words. Everyone realizes why a new
          common language would be desirable: one could refuse to pay expensive
          translators. To achieve this, it would be necessary to have uniform
          grammar, pronunciation and more common words. If several languages
          coalesce, the grammar of the resulting language is more simple and
          regular than that of the individual languages.
        </p>
      </motion.div>

      <div className="cards-container">
        <motion.h2
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="heading container"
        >
          The Best Place to Eat Healthy
        </motion.h2>
        <div className="container cards">
          {cards.map((card) => (
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="cardBox"
              key={card.id}
            >
              <img src={card.src} alt={card.title} />
              <p className="title">{card.title}</p>
              <p>{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="chefs-container container">
        <motion.div
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="chefs-header-container"
        >
          <SectionHeader
            header="Our qualified Chefs"
            subHeader="Meet the chefs who put in their all to serve you the most tasty meals"
          />
        </motion.div>

        <div className="chefs-grid-container">
          {chefs.map((chef, index) => (
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="chefs-grid"
            >
              <img src={chef.src} alt="chef" />
              <h4>{chef.name}</h4>
              <p>{chef.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
