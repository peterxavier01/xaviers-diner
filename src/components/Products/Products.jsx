import { motion } from "framer-motion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Banner from "../Banner/Banner";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./Products.css";
import BreakTab from "../BreakTab";
import LunchTab from "../LunchTab";
import DinnerTab from "../DinnerTab";
import { fadeInRightVariants } from "../../data";

const Products = () => {
  return (
    <div className="products" id="products">
      <Banner heading="Our Menu" subHeading="What We Serve" />

      <div className="menu-tab-container container">
        <motion.div
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5"
        >
          <SectionHeader
            header="Our Full Menu"
            subHeader="Check out our full list of meals specially selected for you"
          />
        </motion.div>
        <Tabs
          defaultActiveKey="breakfast"
          id="justify-tab-example"
          className="mb-3"
        >
          <Tab eventKey="breakfast" title="Breakfast">
            <BreakTab />
          </Tab>
          <Tab eventKey="lunch" title="Lunch">
            <LunchTab />
          </Tab>
          <Tab eventKey="dinner" title="Dinner">
            <DinnerTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
