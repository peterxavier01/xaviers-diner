import { motion } from "framer-motion";
import { fadeInVariants } from "../../data";
import "./Banner.css";

const Banner = ({ heading, subHeading }) => {
  return (
    <div className="banner-container">
      <div className="banner">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>{heading}</h2>
          <p>{subHeading}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
