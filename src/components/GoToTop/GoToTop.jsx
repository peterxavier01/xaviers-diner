import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./GoToTop.css";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="go-to-top" style={{ display: visible ? "inline" : "none" }}>
      <div className="arrow-top-container" onClick={scrollToTop}>
        <AiOutlineArrowUp className="arrow-top" />
      </div>
    </div>
  );
};

export default GoToTop;
