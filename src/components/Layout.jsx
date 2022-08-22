import React from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
