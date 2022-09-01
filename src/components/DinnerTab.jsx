import Card from "./Card/Card";

import DinnerOne from "../assets/rest13.jpg";
import DinnerTwo from "../assets/rest14.jpg";
import DinnerThree from "../assets/rest15.jpg";
import DinnerFour from "../assets/rest16.jpg";
import DinnerFive from "../assets/rest17.jpg";
import DinnerSix from "../assets/rest.jpg";

const DinnerTab = () => {
  const dinner = [
    {
      src: DinnerOne,
      title: "Marcaroni and Cheese",
      body: "The most exquisite taste in all the world",
    },
    {
      src: DinnerTwo,
      title: "Meatloafs",
      body: "The most exquisite taste in all the world",
    },
    {
      src: DinnerThree,
      title: "Fajitas",
      body: "The most exquisite taste in all the world",
    },
    {
      src: DinnerFour,
      title: "Tater tots",
      body: "The most exquisite taste in all the world",
    },
    {
      src: DinnerFive,
      title: "Baked beans",
      body: "The most exquisite taste in all the world",
    },
    {
      src: DinnerSix,
      title: "Grilled cheese sandwich",
      body: "The most exquisite taste in all the world",
    },
  ];

  return (
    <div className="tab-grid-container">
      {dinner.map((item, index) => (
        <Card
          key={index}
          src={item.src}
          title={item.title}
          subtitle={item.body}
          amount="$25"
        />
      ))}
    </div>
  );
};

export default DinnerTab;
