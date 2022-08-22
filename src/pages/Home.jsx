import React from "react";
import Dishes from "../components/Dishes/Dishes";
import Header from "../components/Header/Header";
import Meals from "../components/Meals/Meals";
import ReachOut from "../components/ReachOut/ReachOut";
import Reservation from "../components/Reservation/Reservation";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Dishes />
        <Meals />
        <Reservation />
        <Testimonials />
        <ReachOut />
      </main>
    </div>
  );
};

export default Home;
