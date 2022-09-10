import { motion } from "framer-motion";
import { dinner, fadeInUpVariants } from "../data";
import Card from "./Card/Card";

const DinnerTab = () => {
  return (
    <div className="tab-grid-container">
      {dinner.map((item, index) => (
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
            amount="$25"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DinnerTab;
