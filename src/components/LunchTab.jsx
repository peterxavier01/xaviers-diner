import Card from "./Card/Card";

import LunchOne from "../assets/rest7.jpg";
import LunchTwo from "../assets/rest8.jpg";
import LunchThree from "../assets/rest9.jpg";
import LunchFour from "../assets/rest10.jpg";
import LunchFive from "../assets/rest11.jpg";
import LunchSix from "../assets/rest12.jpg";

const LunchTab = () => {
  const lunch = [
    {
      src: LunchOne,
      title: "Classic hot dog",
      body: "The most exquisite taste in all the world",
    },
    {
      src: LunchTwo,
      title: "Reuben sandwich",
      body: "The most exquisite taste in all the world",
    },
    {
      src: LunchThree,
      title: "Barbeque ribs",
      body: "The most exquisite taste in all the world",
    },
    {
      src: LunchFour,
      title: "Apple pie",
      body: "The most exquisite taste in all the world",
    },
    {
      src: LunchFive,
      title: "Beef jerky",
      body: "The most exquisite taste in all the world",
    },
    {
      src: LunchSix,
      title: "Buffalo Chicken Wings",
      body: "The most exquisite taste in all the world",
    },
  ];

  return (
    <div className="tab-grid-container">
      {lunch.map((item, index) => (
        <Card
          key={index}
          src={item.src}
          title={item.title}
          subtitle={item.body}
          amount="$30"
        />
      ))}
    </div>
  );
};

export default LunchTab;
