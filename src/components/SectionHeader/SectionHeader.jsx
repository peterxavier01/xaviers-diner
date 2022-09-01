import React from "react";

import "./SectionHeader.css";

const SectionHeader = ({ header, subHeader }) => {
  return (
    <>
      <h2 className="section-header">{header}</h2>
      <p className="section-sub-header">{subHeader}</p>
    </>
  );
};

export default SectionHeader;
