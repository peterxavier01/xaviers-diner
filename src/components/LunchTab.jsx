import { motion } from "framer-motion";
import { fadeInUpVariants, lunch } from "../data";
import Card from "./Card/Card";

const LunchTab = () => {
  return (
    <div className="tab-grid-container">
      {lunch.map((item, index) => (
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card
            key={index}
            src={item.src}
            title={item.title}
            subtitle={item.body}
            amount="$30"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LunchTab;
