import { motion } from "framer-motion";
import { breakfast, fadeInUpVariants } from "../data";
import Card from "./Card/Card";

const BreakTab = () => {
  return (
    <div className="tab-grid-container">
      {breakfast.map((item, index) => (
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
            amount="$15"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BreakTab;
