import Card from "./Card/Card";

import BreakOne from "../assets/rest.jpg";
import BreakTwo from "../assets/rest2.jpg";
import BreakThree from "../assets/rest3.jpg";
import BreakFour from "../assets/rest4.jpg";
import BreakFive from "../assets/rest7.jpg";
import BreakSix from "../assets/rest6.jpg";

const BreakTab = () => {
  const breakfast = [
    {
      src: BreakOne,
      title: "French toast",
      body: "The most exquisite taste in all the world",
    },
    {
      src: BreakTwo,
      title: "Breakfast sandwich",
      body: "The most exquisite taste in all the world",
    },
    {
      src: BreakThree,
      title: "Avocado toast",
      body: "The most exquisite taste in all the world",
    },
    {
      src: BreakFour,
      title: "Cheese Burger",
      body: "The most exquisite taste in all the world",
    },
    {
      src: BreakFive,
      title: "Chicken and waffles",
      body: "The most exquisite taste in all the world",
    },
    {
      src: BreakSix,
      title: "pancakes",
      body: "The most exquisite taste in all the world",
    },
  ];

  return (
    <div className="tab-grid-container">
      {breakfast.map((item, index) => (
        <Card
          key={index}
          src={item.src}
          title={item.title}
          subtitle={item.body}
          amount="$15"
        />
      ))}
    </div>
  );
};

export default BreakTab;
