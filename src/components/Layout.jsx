import React from "react";
import Footer from "./Footer/Footer";
import GoToTop from "./GoToTop/GoToTop";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GoToTop />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
