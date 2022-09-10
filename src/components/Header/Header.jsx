import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { headerVariants } from "../../data";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-left">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              className="header-content"
            >
              <h1>We serve mouth-watering meals</h1>
              <p>
                We pride ourselves on serving our customers the most healthy and
                tasty dishes in the world.
              </p>
              <Link to="/products">Check out our menu</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
