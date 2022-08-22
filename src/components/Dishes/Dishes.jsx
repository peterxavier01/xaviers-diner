import React from "react";

import "./Dishes.css";
import DishOne from "../../assets/rest4.jpg";
import DishTwo from "../../assets/rest15.jpg";
import DishThree from "../../assets/rest8.jpg";

const dishes = [
  {
    src: DishOne,
    title: "Cheese burger with tomato",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
  {
    src: DishTwo,
    title: "Avocado Egg & Vegetables",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
  {
    src: DishThree,
    title: "Ham Salad Sauce & Red wine",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut maiores debitis ipsum dolores magni!",
  },
];

const Dishes = () => {
  return (
    <section className="dishes">
      <h2>Our Popular Dishes</h2>
      <p className="subtitle">Take a bite and be hooked on forever</p>
      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dishes-card">
            <img src={dish.src} alt="dish" />
            <h4>{dish.title}</h4>
            <p>{dish.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;
